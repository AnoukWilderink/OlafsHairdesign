<template>
    <div class="border border-green-soft p-5 flex flex-col">
        <div class="flex justify-between items-center">
            <div class="flex gap-5 items-center">
                <img
                    src="~/assets/slider1.jpeg"
                    alt=""
                    class="rounded-full h-10 w-10 object-cover"
                />
                <p class="bold">V. Achternaam</p>
            </div>
            <ul class="flex">
                <li>
                    <UiIcon name="mdi:star" :color="'yellow'" />
                </li>
                <li>
                    <UiIcon name="mdi:star" :color="'yellow'" />
                </li>
                <li>
                    <UiIcon name="mdi:star" :color="'yellow'" />
                </li>
                <li>
                    <UiIcon name="mdi:star" :color="'yellow'" />
                </li>
                <li>
                    <UiIcon name="mdi:star" :color="'yellow'" />
                </li>
            </ul>
        </div>
        <p class="italic p-small tablet:pl-5 tablet:pr-5 tablet:pt-5 desktop:pl-10 desktop:pr-10 desktop:pt-10">
            "Geknipt en geverfd door Olaf. Zoals altijd erg blij met het
            resultaat!"
        </p>
    </div>
</template>
