<template>
    <Navbar />
    <div class="bg-green-soft">
        <h2 class="h2 mb-5">Afspraken</h2>

        <p class="flex items-center gap-5 font-bold">
            28 oktober 2023 <UiIcon name="material-symbols:calendar-today" />
        </p>
        <ul>
            <li v-for="appointment in appointments" :key="appointment.id">
                {{
                    appointment.date +
                    " " +
                    appointment.hairdresser +
                    " " +
                    appointment.service
                }}
            </li>a
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
