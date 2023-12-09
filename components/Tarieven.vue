<template>
    <section class="grid tablet:grid-cols-2 tablet:mb-40 tablet:mt-40 mobile:mb-40">
        <div class="bg-white text-black flex flex-col justify-start tablet:justify-center items-start mobile:p-10 tablet:p-10 desktop:px-40 desktop:py-20">
            <h2 class="h2 mb-5 text-green"> Tarieven</h2>
            <table>
                <tr>
                   <td>Knippen dames</td> 
                   <td class="pl-100px">€35</td> 
                </tr>
                <tr>
                   <td>Knippen heren</td> 
                   <td class="pl-100px">€25</td> 
                </tr>
                <tr>
                   <td>Knippen kinderen</td> 
                   <td class="pl-100px">€10</td> 
                </tr>

                <tr>
                   <td>Kleuren</td> 
                   <td class="pl-100px">€48</td> 
                </tr>
            </table>
            <p class="p-klein w-full text-right tablet:mt-auto">*prijzen vanaf</p>
        </div>
        <img
            class="h-96 desktop:h-[500px] w-full object-cover object-top"
            src="../assets/olaf2.jpeg"
            alt=""
        />
    </section>
</template>


<style>
.pl-100px{
    padding-left: 100px;
}

.p-klein{
    font-size: 18px;
    font-style: italic;
}
</style>
