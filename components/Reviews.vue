<template>
    <section class="tablet:grid tablet:grid-cols-2 mb-10 tablet:mb-40 mt-20 tablet:mt-40 mobile:mb-40">
        <div
            class="bg-white text-black flex flex-col justify-center items-start mobile:p-10 tablet:p-10 desktop:px-40 desktop:py-20 min-h-96"
        >
            <h2 class="h2 mb-5 text-green">Reviews</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
            </p>
            <UiButton
                class="btn-green mt-10 text-base"
                label="Schrijf een review"
                icon="material-symbols:edit-outline"
                href="https://www.google.com/search?q=google+olafs+hairdesign&rlz=1C1UEAD_nlNL982NL982&oq=google+olafs+hairdesign&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhA0gEIMzU3MGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x47b811910ce57f6d:0x24dd3d844b342d5a,1,,,,"
            />
        </div>
        <swiper-container
            :loop="true"
            class="mx-5 mobile:mt-5"
            :autoplay="{ delay: 1000 }"
            :speed="5000"
            :breakpoints="{
                275: { slidesPerView: 1.1, spaceBetween: 20 },
                1024: { slidesPerView: 2, spaceBetween: 20 },
            }"
        >
            <swiper-slide class="grid gap-5">
                <ReviewItem />
                <ReviewItem />
            </swiper-slide>
            <swiper-slide class="grid gap-5">
                <ReviewItem />
                <ReviewItem />
            </swiper-slide>
            <swiper-slide class="grid gap-5">
                <ReviewItem />
                <ReviewItem />
            </swiper-slide>
            <swiper-slide class="grid gap-5">
                <ReviewItem />
                <ReviewItem />
            </swiper-slide>
        </swiper-container>
    </section>
</template>

