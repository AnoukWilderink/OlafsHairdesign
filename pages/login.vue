<template>
    <div class="grid tablet:grid-cols-2 mobile:gap-10 items-center margin-auto">
        <div class="flex flex-col justify-center align-start">
            <img
                alt="Olaf's Hairdesign logo"
                class="self-center w-full px-10 mobile:max-w-[350px] max-w-[600px] mobile:mb-10 mobile:mt-20"
                src="../assets/logo_olaf.png"
            />
        </div>
        <component
            @toggleLoginRegister="loginShown = !loginShown"
            :is="loginShown ? login : register"
        />
    </div>
</template>

<script setup>
const loginShown = ref(true);

const login = resolveComponent("FormLogin");
const register = resolveComponent("FormRegister");
</script>

<style>
.margin-auto {
    margin: auto 0;
}
</style>
