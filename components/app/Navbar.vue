<template>
    <nav
        class=" fixed top-0 left-0 z-50 w-full"
        :class="{ 'bg-green m-0 px-10 py-5': scrolled, 'mx-10 my-5': !scrolled }"
        ref="navbar"
    >
        <div class="w-full">
            <ul class="desktop:space-x-10 tablet:space-x-6 mobile:space-x-3 flex items-center">
                <li v-if="user">
                    <nuxt-link
                        to="/"
                        class="text-green-light transition duration-300 ease-in-out hover:text-white mobile:text-sm"
                        >Home
                    </nuxt-link>
                </li>
                <li v-if="user">
                    <nuxt-link
                        to="/calendar"
                        class="text-green-light transition duration-300 ease-in-out hover:text-white mobile:text-sm"
                        >Kalender</nuxt-link
                    >
                </li>
                <li v-if="user">
                    <nuxt-link
                        to="/customers"
                        class="text-green-light transition duration-300 ease-in-out hover:text-white mobile:text-sm"
                        >Klanten</nuxt-link
                    >
                </li>
                <li v-if="user">
                    <nuxt-link
                        to="/employees"
                        class="text-green-light transition duration-300 ease-in-out hover:text-white mobile:text-sm"
                        >Medewerkers</nuxt-link
                    >
                </li>
                <li v-if="user">
                    <UiButton
                        @click="logout"
                        class="btn-green-soft mt-0 mobile:text-sm"
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
const scrolled = ref(false);

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

const handleScroll = () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Hier kun je aanpassen hoe ver de gebruiker moet scrollen voordat de achtergrondkleur wordt gewijzigd
    const scrollThreshold = 80;

    scrolled.value = scrollPosition >= scrollThreshold;
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>
