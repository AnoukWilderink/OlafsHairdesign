<template>
    <nav class="m-10 fixed top-0 left-0">
        <div class="w-full">
            <ul class="space-x-10 flex">
                <li v-if="user">
                    <nuxt-link
                        to="/"
                        class="text-green-light transition duration-300 ease-in-out hover:text-white"
                        >Home
                    </nuxt-link>
                </li>
                <li v-if="user">
                    <nuxt-link
                        to="/calendar"
                        class="text-green-light transition duration-300 ease-in-out hover:text-white"
                        >Kalender</nuxt-link
                    >
                </li>
                <li v-if="user">
                    <nuxt-link
                        to="/customers"
                        class="text-green-light transition duration-300 ease-in-out hover:text-white"
                        >Klanten</nuxt-link
                    >
                </li>
                <li v-if="user">
                    <nuxt-link
                        to="/hairdressers"
                        class="text-green-light transition duration-300 ease-in-out hover:text-white"
                        >Kappers</nuxt-link
                    >
                </li>
                <li v-if="user">
                    <UiButton
                        @click="logout"
                        class="btn-green-soft mt-0"
                        label="Uitloggen"
                        to="/"
                    />
                </li>

                <li v-if="session">
                    <nuxt-link
                        to="/calendar"
                        class="text-green-light transition duration-300 ease-in-out hover:text-white"
                        >Kalender</nuxt-link
                    >
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
const user = useSupabaseUser();
const client = useSupabaseClient();

const logout = async () => {
    try {
        await client.auth.signOut({
            options: {
                redirectTo: "/",
            },
        });
    } catch (e) {
        console.log(e.message);
    }
};
</script>
