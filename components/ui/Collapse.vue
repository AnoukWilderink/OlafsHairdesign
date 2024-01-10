<template>
    <div class="relative bg-white p-4 rounded-md">
        <header @click="toggleCollapse" class="flex items-center cursor-closed  justify-between text-2xl text-green font-bold cursor-pointer">
            {{ title }}
            <UiIcon :class="{'rotate-180': collapseOpen} "  name="lucide:chevron-down"/>
        </header>
        <div v-if="collapseOpen">
            <slot />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String,
    collapsed: Boolean,
})

const toggleCollapse = () => {
    collapseOpen.value = !collapseOpen.value;
}

const collapseOpen = ref(!props.collapsed);
</script>