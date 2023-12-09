<template>
    <li @click="toggleInfo" class="text-xs flex gap-x-2 items-center cursor-pointer relative">
        <span class="rounded-full h-2 w-2 block" :style="`background-color:${appointment.color}`"/>
        {{ appointment.title }}
    </li>
    <dialog class="rounded-2xl p-10 shadow-2xl z-20 w-96 h-96 space-y-4" v-if="showInfo" open>
        <header class="text-2xl flex justify-between">
            {{ appointment.title }}
            <UiIcon @click="toggleInfo" class="h-6 w-6 text-green cursor-pointer" name="radix-icons:cross-2"/>
        </header>
        <div class="flex justify-between items-center">
            <p>Klant: </p>
            <p>{{ `${customer.firstName} ${customer.lastName}` }}</p>
        </div>
        <div class="flex justify-between items-center">
            <p>Kapper: </p>
            <p>{{ `${hairdresser.firstName} ${hairdresser.lastName}` }}</p>
        </div>
        <div class="flex justify-between items-center">
            <FormKit
                name="time"
                type="time"
                label="Tijd"
                disabled
                v-model="formattedAppointmentStart"
            />
            <FormKit
                name="duration"
                type="time"
                label="Duur"
                disabled
                v-model="formattedAppointmentDuration"
            />
        </div>
    </dialog>
</template>

<script setup>
import { DateTime } from 'luxon'

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
}

const fetchCustomer = async () => {
  try {
    const { data } = await client.from('customer').select('id, firstName, lastName').eq('id', props.appointment.customer_id);
    
    customer.value = data[0] || {};
  } catch (error) {
    console.error('Error loading customer:', error);
  }
}

const fetchHairdresser = async () => {
  try {
    const { data } = await client.from('hairdresser').select('id, firstName, lastName').eq('id', props.appointment.hairdresser_id);
    
    hairdresser.value = data[0] || {};
  } catch (error) {
    console.error('Error loading customer:', error);
  }
}

const formattedAppointmentStart = computed(() => {
    const dateTime = DateTime.fromISO(props.appointment.appointment_date);

    return dateTime.toFormat('HH:mm');
})

const formattedAppointmentDuration = computed(() => {
    return props.appointment.duration.toString().replace('.', ':');
})
</script>