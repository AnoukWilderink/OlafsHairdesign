<template>
  <div class="bg-white rounded-2xl shadow-2xl mx-auto p-10">
    <FormKit type="form" @submit="signUpNewUser" :actions="false">
        <FormKit
            type="text"
            name="email"
            label="Email"
            placeholder="voorbeeld@example.com"
            validation="required|email"
        />
        <div class="double">
            <FormKit
                type="password"
                name="password"
                label="Wachtwoord"
                validation="required|length:6|matches:/[^a-zA-Z]/"
                :validation-messages="{
                matches: 'Wachtwoord moet minstens 1 symbool bevatten',
                }"
                placeholder="Wachtwoord"
            />
            <FormKit
                type="password"
                name="password_confirm"
                label="Wachtwoord herhalen"
                placeholder="Kies een wachtwoord"
                validation="required|confirm"
            />
        </div>
        <FormKit type="submit" label="Registreren" required />
    </FormKit>
  </div>
</template>

<script setup>
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
