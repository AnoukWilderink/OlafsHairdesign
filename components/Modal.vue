<template>
    <div class="text-black">
        <!-- overlay -->
        <div
            class="overlay fixed w-screen h-screen z-1 top-0 left-0 backdrop-blur-md"
            v-if="showModal"
            @click="closeModal"
        ></div>

        <!-- modal -->
        <div
            v-if="showModal"
            class="w-3/5 bg-white rounded-2xl z-10 m-auto overflow-hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
            <div class="bg-green-soft w-full h-32">
                <button
                    class="absolute top-5 left-5 text-white"
                    @click="closeModal"
                >
                                       
                    <UiIcon name="material-symbols:arrow-back-ios" /> Terug
                </button>
            </div>

            <div class="grid tablet:grid-cols-2 relative p-20">
                <div class="flex flex-col gap-3">
                    <div class="border border-light-grey rounded p-3">
                        <input type="checkbox" class="mr-3" />
                        <label for="fname">Dames knippen</label>
                    </div>
                    <div class="border border-light-grey rounded p-3">
                        <input type="checkbox" class="mr-3" />
                        <label for="fname">Heren knippen</label>
                    </div>
                    <div class="border border-light-grey rounded p-3">
                        <input type="checkbox" class="mr-3" />
                        <label for="fname">Kinderen knippen</label>
                    </div>
                    <div class="border border-light-grey rounded p-3">
                        <input type="checkbox" class="mr-3" />
                        <label for="fname">Dames verven</label>
                    </div>
                </div>
                <div
                    class="details border-2 border-black rounded-2xl mobile:hidden tablet:mt-[-150px] m-5 bg-white p-10"
                >
                    <p class="font-bold">Jouw afspraak</p>
                    <p class="flex items-center gap-3">
                        <UiIcon
                            name="material-symbols:location-on-outline"
                            :color="'black'"
                        />Locatie
                    </p>
                    <p class="flex items-center gap-3">
                        <UiIcon name="ri:scissors-fill" :color="'black'" />haren
                        knippen
                    </p>
                    <p class="flex items-center gap-3">
                        <UiIcon
                            name="ic:baseline-person"
                            :color="'black'"
                        />Olaf vleerhos
                    </p>

                    <p class="flex items-center gap-3">
                        <UiIcon
                            name="material-symbols:calendar-month"
                            :color="'black'"
                        />28 oktober 2023
                    </p>
                    <p class="flex items-center gap-3">€35,00</p>
                    <button class="btn">Bevestigen</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        showModal: Boolean, // To control the visibility of the modal
    },
    methods: {
        closeModal(){
            this.$emit("close-modal");
        },
    },
};
</script>

<style>
.overlay {
    background-color: rgba(0, 0, 0, 0.5);
}
</style>
