<template>
    <dialog ref="modal" class="bg-white rounded-2xl z-50 shadow-2xl" :open="true">
        <div class="relative">
            <UiIcon @click="$emit('close')" class="h-6 w-6 absolute right-3 top-3 text-white cursor-pointer" name="radix-icons:cross-2"/>
            <slot name="header"/>
            <slot name="content"/>
        </div>
    </dialog>
</template>

<script setup>
const emit = defineEmits(['close'])

const modal = ref(null);

onClickOutside(modal, () => {
    emit('close')
});
</script>