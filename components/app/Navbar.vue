<template>
    <!-- <span class="tablet:hidden text-right pr-10 pt-5"
        ><font-awesome-icon icon="fa-solid fa-bars"
    /></span> -->

    <nav class="m-10 fixed top-0 left-0">
        <div class="w-full">
            <ul class=" space-x-10 mobile:hidden tablet:hidden laptop:flex">
                <li>
                    <nuxt-link
                        to="/"
                        class="text-green-light transition duration-300 ease-in-out hover:text-white"
                        >Home
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link
                        to="/login"
                        class="text-green-light transition duration-300 ease-in-out hover:text-white"
                        >Inloggen</nuxt-link
                    >
                </li>
                <li>
                    <nuxt-link
                        to="/calender"
                        class="text-green-light transition duration-300 ease-in-out hover:text-white"
                        >Kalender</nuxt-link
                    >
                </li>
            </ul>
        </div>
    </nav>
</template>


