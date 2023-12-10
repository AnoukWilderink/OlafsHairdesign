<template>
    <div class="mx-auto mobile:w-4/5 tablet:min-w-[300px]">
        <FormKit type="form" @submit="signUpNewUser" :actions="false">
            <FormKit
                type="text"
                name="email"
                placeholder="voorbeeld@example.com"
                validation="required|email"
            />
            <FormKit
                type="password"
                name="password"
                validation="required|length:6|matches:/[^a-zA-Z]/"
                :validation-messages="{
                    matches: 'Wachtwoord moet minstens 1 symbool bevatten',
                }"
                placeholder="Wachtwoord"
            />
            <FormKit
                type="password"
                name="password_confirm"
                placeholder="Bevestig wachtwoord"
                validation="required|confirm"
            />
            <FormKit type="submit" label="Registreren" required/>
        </FormKit>
        <p
            @click="$emit('toggleLoginRegister')"
            class="cursor-closed p-small text-center hover:text-white transition duration-300 ease-in-out mt-[8px]"
        >
            Terug naar login
        </p>
    </div>
</template>

<script setup>
defineEmits(["toggleLoginRegister"]);

const client = useSupabaseClient();

const signUpNewUser = async (registerData) => {
    try {
        const { data, error } = await client.auth.signUp({
            email: registerData.email,
            password: registerData.password,
            options: {
                emailRedirectTo: "/login",
            },
        });
    } catch (error) {
        console.log(error);
    }
};
</script>
