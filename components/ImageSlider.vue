<template>
    <section class="mobile:mb-40">
        <h2 class="h2 mb-5 tablet:pl-10 desktop:px-40 mobile:pl-10">Zij gingen jou voor</h2>
        <swiper-container
        class="cursor-closed z-[-1]"
            :loop="true"
            :autoplay="true"
            :speed="3000"
            :breakpoints="{
                275: { slidesPerView: 1.5, spaceBetween:20 },
                768: { slidesPerView: 3, spaceBetween:20},
                1024: { slidesPerView: 4, spaceBetween:30  },
                1280: { slidesPerView: 5, spaceBetween:30 },
                2536: { slidesPerView: 7, spaceBetween:40 },
            }"
        >
            <swiper-slide>
                <img
                    loading="lazy"
                    alt="Olaf's Hairdesign logo"
                    class="self-center h-96 desktop:h-[500px] w-full object-cover"
                    src="../assets/slider1.jpeg"
                />
            </swiper-slide>
            <swiper-slide
                ><img
                    loading="lazy"
                    alt="Olaf's Hairdesign logo"
                    class="self-center h-96 desktop:h-[500px] w-full object-cover"
                    src="../assets/slider2.jpeg"
                />
            </swiper-slide>
            <swiper-slide
                ><img
                    alt="Olaf's Hairdesign logo"
                    height="100"
                    class="self-center h-96 desktop:h-[500px] w-full object-cover"
                    src="../assets/slider3.jpeg"
                />
            </swiper-slide>
            <swiper-slide>
                <img
                    loading="lazy"
                    alt="Olaf's Hairdesign logo"
                    class="self-center h-96 desktop:h-[500px] w-full object-cover"
                    src="../assets/slider1.jpeg"
                />
            </swiper-slide>
            <swiper-slide
                ><img
                    loading="lazy"
                    alt="Olaf's Hairdesign logo"
                    class="self-center h-96 desktop:h-[500px] w-full object-cover"
                    src="../assets/slider2.jpeg"
                />
            </swiper-slide>
            <swiper-slide
                ><img
                    loading="lazy"
                    alt="Olaf's Hairdesign logo"
                    class="self-center h-96 desktop:h-[500px] w-full object-cover"
                    src="../assets/slider3.jpeg"
                />
            </swiper-slide>
            <swiper-slide
                ><img
                    loading="lazy"
                    alt="Olaf's Hairdesign logo"
                    class="self-center h-96 desktop:h-[500px] w-full object-cover"
                    src="../assets/slider3.jpeg"
                />
            </swiper-slide>
            <swiper-slide
                ><img
                    loading="lazy"
                    alt="Olaf's Hairdesign logo"
                    class="self-center h-96 desktop:h-[500px] w-full object-cover"
                    src="../assets/slider3.jpeg"
                />
            </swiper-slide>
            <!-- mobile:px-10 mobile:py-20  -->
        </swiper-container>
    </section>
</template>

<script>
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();
</script>
