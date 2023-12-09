<template>
    <div class="grid grid-cols-1 custom-grid-login relative space-y-10">
        <Logo />
        <component :is="loginShown ? login : register"/>
        <p v-if="loginShown" @click="loginShown = !loginShown" class="cursor-pointer text-center my-10">Registeren</p>
    </div>
</template>

<script setup>
const loginShown = ref(true);

const login = resolveComponent('FormLogin');
const register = resolveComponent('FormRegister');
</script>