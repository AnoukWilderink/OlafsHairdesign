<template>
    <div class="mx-auto mobile:w-4/5 tablet:min-w-[300px]">
        <FormKit type="form" @submit="signInWithEmail" :actions="false">
            <FormKit
                type="email"
                name="email"
                placeholder="voorbeeld@example.com"
                required
            />
            <FormKit
                type="password"
                name="password"
                placeholder="******"
                required
            />
            <FormKit type="submit" label="Login" required />
        </FormKit>
        <p
            @click="$emit('toggleLoginRegister')"
            class="cursor-closed p-small text-center hover:text-white transition duration-300 ease-in-out mt-[8px]"
        >
            Of registreren
        </p>
    </div>
</template>

<script setup>
defineEmits(["toggleLoginRegister"]);

const client = useSupabaseClient();

const signInWithEmail = async (loginData) => {
    const { data, error } = await client.auth.signInWithPassword({
        email: loginData.email,
        password: loginData.password,
        options: {
            redirectTo: "/",
        },
    });  
};
</script>
