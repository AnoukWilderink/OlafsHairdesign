<template>
    <FormKit v-model="customerData" type="form" @submit="addCustomer">
        <FormKit
            name="firstName"
            type="text"
            label="Voornaam"
            placeholder="Voornaam"
            required
        />
        <FormKit
            name="lastName"
            type="text"
            label="Achternaam"
            placeholder="Achternaam"
            required
        />
        <FormKit
            name="tel"
            type="tel"
            label="Telefoonnummer"
            placeholder="Telefoonummer"
        />
        <FormKit
            name="email"
            type="email"
            label="Email"
            placeholder="Email"
            validation="required|email"
            :validation-messages="{
                matches: 'Format klopt niet',
                required: 'Email is verplicht',
            }"
        />
        <FormKit
            type="textarea"
            name="note"
            label="Notitie"
            placeholder="Notitie over de klant."
            validation="length:0,120"
            :validation-messages="{
                length: 'Notities kunnen niet langer zijn dan 120 characters.',
            }"
        />
    </FormKit>
</template>

<script setup>
const client = useSupabaseClient();
const customerData = ref(null);

const addCustomer = async () => {
    await client.from('customer').insert({...customerData.value})
}
</script>