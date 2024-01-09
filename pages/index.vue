<template>
    <div class="grid grid-cols-1 custom-grid tablet:h-[768px] laptop:h-screen">
        <section class="flex flex-col justify-center items-center">
            <img
                alt="Olaf's Hairdesign logo"
                class="self-center mobile:px-10 mobile:py-20 w-full px-10 max-w-[600px]"
                src="../assets/logo_olaf.png"
            />
        </section>
        <section
            class=" bg-white text-green grid tablet:grid-rows-[2fr,1fr] mobile:mb-40 overflow-hidden"
        >
            <img
                class="tablet:h-full w-full object-cover h-96"
                src="../assets/olaf.webp"
                alt="Olaf sitting in his hairsalon"
            />
            <div
                class="flex flex-col items-start justify-start mobile:m-10 tablet:m-8 laptop:m-10"
            >
                <h2 class="mb-5 h2 text-green">Over Olaf's Hairdesign</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </section>

        <section
            class=" bg-white text-green grid tablet:grid-rows-[1fr,2fr] mobile:mb-40 overflow-hidden"
        >
            <div class="grid m-10 tablet:m-10 mobile:order-2">
                <h2 class="mb-5 h2 text-green">Maak een afspraak</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
                <UiButton class="btn-green mt-10" label="0612345678" icon="mingcute:phone-fill" />
            </div>
            <img
                class="tablet:h-full w-full object-cover h-96"
                src="../assets/olaf1.jpeg"
                alt="Olaf cutting a girls hair"
            />
        </section>
    </div>

    <Tarieven />
    <ImageSlider />
    <Reviews />
    <Location />
</template>

<style>
@media (max-width: 500px) {
    .hero {
        height: 100vh;
    }
}

@media (min-width: 768px) {
    .custom-grid {
        grid-template-columns: 33.3% 33.3% 33.3%;
    }
}

@media (min-width: 1024px) {
    .custom-grid {
        grid-template-columns: 4fr 3fr 3fr;
    }
}
</style>
