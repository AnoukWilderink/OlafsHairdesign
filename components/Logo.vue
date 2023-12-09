<template>
    <div class="flex flex-col justify-start mobile:hidden ">
        <Navbar />
        <img
            alt="Olaf's Hairdesign logo"
            class="self-center mt-32 mobile:px-10 mobile:py-20"
            src="../assets/logo_olaf.png"
            width="450"
        />
        <button class="btn2 max-w-fit mx-auto mb-20 tablet:hidden">
            Afspraak maken
        </button>
    </div>

    <div class="flex justify-between items-start p-10 tablet:hidden">
        <img
            alt="Olaf's Hairdesign logo"
            src="../assets/logo_olaf.png"
            width="100"
        />
        <UiIcon name="icon-park-outline:hamburger-button" class="scale-150 cursor-pointer"/>
    </div>

</template>
