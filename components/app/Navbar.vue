<template>
    <!-- <span class="tablet:hidden text-right pr-10 pt-5"
        ><font-awesome-icon icon="fa-solid fa-bars"
    /></span> -->

    <nav class="m-10 fixed top-0 left-0">
        <div class="w-full">
            <ul class="space-x-10 flex">
                <li>
                    <nuxt-link
                        to="/"
                        class="text-green-light transition duration-300 ease-in-out hover:text-white"
                        >Home
                    </nuxt-link>
                </li>
                <li>
                    <UiButton />
                </li>
                <li>
                    <button
                        @click="logout"
                        class="text-green-light transition duration-300 ease-in-out hover:text-white"
                    >
                        Uitloggen
                    </button>
                </li>
                <!-- <li>
                    <nuxt-link
                        to="/calendar"
                        class="text-green-light transition duration-300 ease-in-out hover:text-white"
                        >Kalender</nuxt-link
                    >
                </li> -->
            </ul>
        </div>
    </nav>
</template>

<script setup>
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
