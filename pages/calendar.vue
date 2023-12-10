<template>
   <section class="flex mt-32 gap-x-2 px-10">
      <aside class="flex flex-col gap-y-4 w-1/5">
         <UiCollapse title="Klant toevoegen">
            <FormAddCustomer/>
         </UiCollapse>
         <UiCollapse title="Kapper toevoegen">
            <FormAddHairdresser/>
         </UiCollapse>
      </aside>
      <Calendar :daysOfWeek="daysOfWeek" class="w-full">
         <template #controls>
            <CalendarControls @forwards="addOneMonth" @backwards="subtractOneMonth">
               {{ currentDate }}
            </CalendarControls>   
         </template>
         <template #header>
            <tr>
               <CalendarHeaderCell v-for="(day, index) in daysOfWeek" key="index">
                  <span class="xl:block lg:block md:block sm:block hidden">{{ day.full }}</span>
                  <span class="xl:hidden lg:hidden md:hidden sm:hidden block">{{ day.short }}</span>
               </CalendarHeaderCell>
            </tr>
         </template>
         <template #cells>
            <tr v-for="(week, index) in weeksArray">
               <CalendarCell v-for="(day, index) in week" :key="index">
                  <div class="text-gray-500 h-full w-full">
                     <header class="flex justify-between items-center">
                        {{ day }}
                        <UiIcon @click="openAppointmentModal(day, index)" class="cursor-pointer" name="material-symbols:add-circle"/>
                     </header>
                     <ul>
                        <CalendarAppointment v-for="(appointment, appointmentIndex) in getAppointmentsForDay(day)" :key="appointmentIndex" :appointment="appointment"/>
                     </ul>
                  </div>
                  <UiModal class="absolute translate-y-1/4" @close="closeAppointmentModal(day)" v-if="modalStates[day]">
                     <template #header>
                        <header class="bg-green text-white font-bold text-2xl text-center py-5">
                           <h3>Afspraak maken</h3>
                        </header>
                     </template>
                     <template #content>
                        <div class="py-2 px-5">
                           <FormAddAppointment :now="now"/>
                        </div>
                     </template>
                  </UiModal>
               </CalendarCell>
            </tr>
         </template>
      </Calendar>
   </section>
</template>

<script setup>
import { DateTime } from 'luxon'

const client = useSupabaseClient();
const now = ref(DateTime.local());
const appointments = ref([]);

const currentDate = computed(() => {
  return capitalizeFirstLetter(`${now.value.toLocaleString({ month: 'long' })} ${now.value.year}`);
})

const daysOfWeek = [
  { full: 'Maandag', short: 'Ma' },     // Monday
  { full: 'Dinsdag', short: 'Di' },     // Tuesday
  { full: 'Woensdag', short: 'Wo' },    // Wednesday
  { full: 'Donderdag', short: 'Do' },   // Thursday
  { full: 'Vrijdag', short: 'Vr' },     // Friday
  { full: 'Zaterdag', short: 'Za' },    // Saturday
  { full: 'Zondag', short: 'Zo' }       // Sunday
];

const addOneMonth = () => {
   now.value = now.value.plus({ months: 1 });
   loadAppointments();
};

const subtractOneMonth = () => {
   now.value = now.value.minus({ months: 1 });
   loadAppointments();
};

const weeksArray = computed(() => {
   const daysInMonth = now.value.daysInMonth;
   const days = Array.from({ length: daysInMonth }, (_, index) => index + 1);
   const chunked = [];

   while (days.length > 0) {
      chunked.push(days.splice(0, 7));
   }

   return chunked;
})

const closeAppointmentModal = (day) => {
  modalStates.value[day] = false;
  modalStates.value = [...modalStates.value];
}

const openAppointmentModal = (day) => {
  now.value = now.value.set({day});
  modalStates.value[day] = true;
}

const modalStates = ref(Array.from({ length: now.value.daysInMonth }, () => false));

const loadAppointments = async () => {
  const startOfMonth = now.value.startOf('month');
  const endOfMonth = now.value.endOf('month');

  try {
    const { data } = await client.from('appointment').select().gte('appointment_date', startOfMonth).lte('appointment_date', endOfMonth);
    console.log(data);
    
    appointments.value = data || [];
  } catch (error) {
    console.error('Error loading appointments:', error);
  }
};

const getAppointmentsForDay = (day) => {
  const dayDate = now.value.set({ day });

  return appointments.value.filter(appointment => {
    const appointmentDate = DateTime.fromISO(appointment.appointment_date);
    return appointmentDate.hasSame(dayDate, 'day');
  });
};

onMounted(() => {
  loadAppointments();
});
</script>