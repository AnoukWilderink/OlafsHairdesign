<template>
    <section class="grid tablet:grid-cols-2 mb-10 tablet:mb-40 mt-20 tablet:mt-40 mobile:mb-40 ">
        <div
            class="bg-white text-black flex flex-col justify-center items-start p-10 tablet:pl-40 pr-20 tablet:pr-40 h-96"
        >
            <h2 class="h2 mb-5 text-green">Reviews</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
            </p>
            <UiButton class="btn-green mt-10" label="Schrijf een review" icon="material-symbols:edit-outline" href="https://www.google.com/search?q=google+olafs+hairdesign&rlz=1C1UEAD_nlNL982NL982&oq=google+olafs+hairdesign&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhA0gEIMzU3MGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x47b811910ce57f6d:0x24dd3d844b342d5a,1,,,,"/>
        </div>
        <div class="grid grid-cols-2 h-96">
            <ReviewItem class="ml-5 mb-5" />
            <ReviewItem class="ml-5 mb-5 mr-10"/>
            <ReviewItem class="ml-5 "/>
            <ReviewItem class="ml-5 mr-10"/>
        </div>
    </section>
</template>

<style>
.pl-100px {
    padding-left: 100px;
}
</style>

