<template>
    <FormKit @submit="submitAppointment" type="form">
        <FormKit
          placeholder="Afspraak naam"
          name="title"
          label="Titel"
          required
        />
        <FormKit
           name="time"
           type="time"
           label="Begintijd"
           required
        />
        <FormKit
            name="duration"
            type="time"
            label="Eindtijd"
            required
        />
        <FormKit
           name="color"
           type="color"
           label="Selecteer een kleur voor de afspraak"
           :style="{ width: '100%', height: '40px', borderRadius: '20', border: 'none' }"
           required
        />
        <FormKit
            v-if="customers"
            name="customer_id"
            type="select"
            label="Klant"
            :options="customers"
            placeholder="Selecteer een klant voor de afspraak"
            required
        />
        <FormKit
            v-if="hairdressers"
            name="hairdresser_id"
            type="select"
            label="Kapper"
            :options="hairdressers"
            placeholder="Selecteer een medewerker voor de afspraak"
            required
        /> 
        
    </FormKit>
</template>

<script setup>
import { DateTime } from 'luxon'

const client = useSupabaseClient();

const props = defineProps({
  now: Object
});

const submitAppointment = async (data) => {
    const [hour, minute] = data.time.split(':');

    const appointmentData = {
        color: data.color,
        title: data.title,
        customer_id: data.customer_id,
        hairdresser_id: data.hairdresser_id,
        duration:  parseFloat(data.duration.replace(":", ".")),
        appointment_date: props.now.set({ hour, minute })
    }

    try {
        await client.from('appointment').insert({...appointmentData})
        location.reload()
    } catch (e) {
        console.log(e)
    }
}

const { data: customers } = await useAsyncData('customer', async () => {
  const { data } = await client.from('customer').select('id, firstName, lastName')

  return data.map(customer => ({
        label: `${customer.firstName} ${customer.lastName}`,
        value: customer.id
    }));
})

const { data: hairdressers } = await useAsyncData('hairdresser', async () => {
  const { data } = await client.from('hairdresser').select('id, firstName, lastName')

  return data.map(hairdresser => ({
        label: `${hairdresser.firstName} ${hairdresser.lastName}`,
        value: hairdresser.id
    }));
})
</script>