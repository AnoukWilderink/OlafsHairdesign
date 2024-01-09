<template>
    <FormKit v-model="hairdresserData" type="form" @submit="addHairdresser">
        <FormKit name="firstName" type="text" placeholder="Voornaam" required />
        <FormKit
            name="lastName"
            type="text"
            placeholder="Achternaam"
            required
        />
        <FormKit
            name="title"
            type="select"
            placeholder="Selecteer een functie"
            required
            :options="['Kapper', 'Assistent kapper', 'Stylist']"
        />
    </FormKit>
</template>

<script setup>
const client = useSupabaseClient();
const hairdresserData = ref(null);

const addHairdresser = async () => {
    await client.from("hairdresser").insert({ ...hairdresserData.value });
};
</script>
