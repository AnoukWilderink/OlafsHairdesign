<template>
    <form
        @submit.prevent="addAppointment"
        class="text-black flex flex-col items-start gap-3"
    >
        <input type="date" v-model="newAppointment.date" required />
        <div>
            <label>Hairdressers:</label>
            <div
                v-for="hairdresser in newAppointment.hairdressers"
                :key="hairdresser.id"
            >
                <input
                    type="checkbox"
                    v-model="newAppointment.selectedHairdressers"
                    :value="hairdresser.name"
                />
                {{ hairdresser.name }}
            </div>
        </div>
        <div>
            <label>Services:</label>
            <div v-for="service in newAppointment.services" :key="service.id">
                <input
                    type="checkbox"
                    v-model="newAppointment.selectedServices"
                    :value="service.name"
                />
                {{ service.name }}
            </div>
        </div>
        <button type="submit">Add Appointment</button>
    </form>

    <div class="bg-green-soft">
        <h1 class="font-bold">Appointments List</h1>
        <ul>
            <li v-for="appointment in appointments" :key="appointment.id">
                {{
                    appointment.date +
                    " " +
                    appointment.hairdresser +
                    " " +
                    appointment.service
                }}
            </li>
        </ul>
    </div>
</template>

<script>
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

export default defineComponent({
    setup() {
        const appointments = ref([]);
        const newAppointment = ref({
            date: "",
            selectedHairdressers: [],
            selectedServices: [],
        });

        onMounted(async () => {
            const db = getFirestore(app);

            const hairdressersCollection = collection(db, "hairdressers");

            try {
                const querySnapshot = await getDocs(hairdressersCollection);
                const hairdressers = [];
                querySnapshot.forEach((doc) => {
                    hairdressers.push({ id: doc.id, ...doc.data() });
                });

                newAppointment.value.hairdressers = hairdressers;
            } catch (error) {
                console.error("Error fetching hairdressers:", error);
            }

            const servicesCollection = collection(db, "services");

            try {
                const querySnapshot = await getDocs(servicesCollection);
                const services = [];
                querySnapshot.forEach((doc) => {
                    services.push({ id: doc.id, ...doc.data() });
                });

                newAppointment.value.services = services;
            } catch (error) {
                console.error("Error fetching services:", error);
            }

            const appointmentsCollection = collection(db, "appointments");

            try {
                const querySnapshot = await getDocs(appointmentsCollection);
                querySnapshot.forEach((doc) => {
                    appointments.value.push({ id: doc.id, ...doc.data() });
                });
                console.log(appointments.value);
            } catch (error) {
                console.error("Error fetching appointments:", error);
            }
        });

        const addAppointment = async () => {
            const db = getFirestore();
            const appointmentsCollection = collection(db, "appointments");

            try {
                const { date, selectedHairdressers, selectedServices } =
                    newAppointment.value;

                const newAppointmentData = {
                    date,
                    hairdresser: selectedHairdressers, // Updated to use selectedHairdressers
                    service: selectedServices, // Updated to use selectedServices
                };

                const docRef = await addDoc(
                    appointmentsCollection,
                    newAppointmentData
                );
                console.log("Appointment added with ID: ", docRef.id);

                newAppointment.value.date = "";
                newAppointment.value.selectedHairdressers = [];
                newAppointment.value.selectedServices = [];
            } catch (error) {
                console.error("Error adding the appointment:", error);
            }
        };

        return {
            appointments,
            newAppointment,
            addAppointment,
        };
    },
});
</script>
