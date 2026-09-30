<script setup lang="ts">
const { msg } = defineProps<{ msg: string }>();
</script>

<template>
  <div v-if="msg" class="error">
    <p>{{ msg }}</p>
  </div>
</template>

<style scoped>
.error p {
  color: red;
}
</style>
