<template>
    <FormKit v-model="hairdresserData" type="form" @submit="addHairdresser">
        <FormKit
            name="firstName"
            type="text"
            label="Voornaam"
            required
        />
        <FormKit
            name="lastName"
            type="text"
            label="Achternaam"
            required
        />
        <FormKit
            name="title"
            type="select"
            label="Functie"
            required
            :options="[
                'Kapper',
                'Assistent kapper',
                'Stylist',
            ]"
        />
    </FormKit>
</template>

<script setup>
const client = useSupabaseClient();
const hairdresserData = ref(null);

const addHairdresser = async () => {
    await client.from('hairdresser').insert({...hairdresserData.value})
}
</script>