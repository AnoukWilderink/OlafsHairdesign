<template>
  <FormKit
    type="form"
    submit-label="Login"
  >
    <FormKit
      name="email"
      label="Email address"
      validation="required|email"
    />
    <FormKit
      type="password"
      name="password"
      label="Password"
      validation="required"
    />
  </FormKit>
</template>

<script setup>
const supabase = useSupabaseClient();
</script>
