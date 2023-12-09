<template>
  <section>
    <div>
      <div class="wrapper bg-white rounded shadow w-full">
        <slot name="controls"/>
        <table class="w-full">
          <thead class="text-black">
            <slot name="header" />
          </thead>
          <tbody class="relative">
            <slot name="cells"/>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  daysOfWeek: Object
});
</script>