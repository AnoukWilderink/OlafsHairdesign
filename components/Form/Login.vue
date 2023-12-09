<template>
    <div class="bg-white rounded-2xl shadow-2xl mx-auto p-10">
        <FormKit type="form" @submit="signInWithEmail" :actions="false">
            <FormKit
                type="email"
                label="E-mail"
                name="email"
                required
            />
            <FormKit
                type="password"
                label="Wachtwoord"
                name="password"
                required
            />
            <FormKit
                type="submit"
                label="Login"
                required
            />
        </FormKit>
    </div>
</template>

<script setup>
const client = useSupabaseClient();

const signInWithEmail = async (loginData) => {
  const { data, error } = await client.auth.signInWithPassword({
    email: loginData.email,
    password: loginData.password,
  })
}
</script>