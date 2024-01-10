<template>
    <component
        :is="is"
        class="btn flex items-center justify-center gap-x-2"
        @click="navigate"
    >
        <UiIcon v-if="icon" :name="icon" />
        {{ label }}
    </component>
</template>

<script setup>
const props = defineProps({
    to: String,
    label: String,
    icon: String,
});

const router = useRouter();

const is = computed(() => {
    return props.to ? "a" : "button";
});

const navigate = () => {
    if (props.to) {
        location.href = props.to;
    }
};
</script>
