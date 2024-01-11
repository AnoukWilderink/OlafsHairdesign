<template>
    <li
        @click="toggleInfo"
        class="text-xs flex gap-x-2 items-center cursor-pointer relative"
    >
        <span
            class="rounded-full h-2 w-2 block"
            :style="`background-color:${appointment.color}`"
        />
        {{ appointment.title }}
    </li>
    <dialog
        class="rounded-2xl z-20 w-96 h-96 overflow-hidden "
        v-if="showInfo"
        open
    >
        <header
            class="py-5 text-2xl text-center relative text-white font-bold"
            :style="`background-color:${appointment.color}`"
        >
            {{ appointment.title }}
            <UiIcon
                @click="toggleInfo"
                name="radix-icons:cross-2"
                class="icon h-6 w-6 absolute right-3 top-3 text-white cursor-pointer"
            />
        </header>
        <div class="p-10 shadow-2xl space-y-4">
            <div class="flex justify-between items-center">
                <p class="font-bold">Klant:</p>
                <p>{{ `${customer.firstName} ${customer.lastName}` }}</p>
            </div>
            <div class="flex justify-between items-center">
                <p class="font-bold">Medewerker:</p>
                <p>{{ `${hairdresser.firstName} ${hairdresser.lastName}` }}</p>
            </div>
            <div class="flex justify-between items-center">
                <FormKit
                    name="time"
                    type="time"
                    label="Begintijd"
                    disabled
                    v-model="formattedAppointmentStart"
                />
                <FormKit
                    name="duration"
                    type="time"
                    label="Eindtijd"
                    disabled
                    v-model="formattedAppointmentDuration"
                />
            </div>

            <UiIcon
                @click="deleteAppointment"
                name="material-symbols:delete-outline"
                class="icon h-6 w-6 flex text-green cursor-pointer justify-end"
            />
        </div>
    </dialog>
</template>

<script setup>
import { DateTime } from "luxon";

const client = useSupabaseClient();

const props = defineProps({
    appointment: Object,
});

const showInfo = ref(false);
const customer = ref({});
const hairdresser = ref({});

const toggleInfo = () => {
    showInfo.value = !showInfo.value;

    fetchCustomer();
    fetchHairdresser();
};

const fetchCustomer = async () => {
    try {
        const { data } = await client
            .from("customer")
            .select("id, firstName, lastName")
            .eq("id", props.appointment.customer_id);

        customer.value = data[0] || {};
    } catch (error) {
        console.error("Error loading customer:", error);
    }
};

const fetchHairdresser = async () => {
    try {
        const { data } = await client
            .from("hairdresser")
            .select("id, firstName, lastName")
            .eq("id", props.appointment.hairdresser_id);

        hairdresser.value = data[0] || {};
    } catch (error) {
        console.error("Error loading customer:", error);
    }
};

const formattedAppointmentStart = computed(() => {
    const dateTime = DateTime.fromISO(props.appointment.appointment_date);

    return dateTime.toFormat("HH:mm");
});

const formattedAppointmentDuration = computed(() => {
    return props.appointment.duration.toString().replace(".", ":");
});

const deleteAppointment = async () => {
    try {
        const { data, error } = await client
            .from("appointment")
            .delete()
            .eq("appointment_id", props.appointment.appointment_id);

        if (error) {
            console.error("Error deleting appointment:", error);
        } else {
            console.log("Appointment deleted:", data);
            showInfo.value = false; // Close the dialog after successful deletion
            location.reload()
        }
    } catch (error) {
        console.error("Error deleting appointment:", error);
    }
};
</script>
