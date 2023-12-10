<template>
    <div class="grid tablet:grid-cols-2 items-center tablet:h-screen">
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
