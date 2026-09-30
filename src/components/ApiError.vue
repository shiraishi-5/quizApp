<script setup lang="ts">
const { msg = "エラーがあります。" } = defineProps<{
  msg: string;
}>();
</script>

<template>
  <div v-if="msg" class="api-error">
    <p>{{ msg }}</p>
  </div>
</template>

<style scoped>
.api-error {
  padding: 8px;
  color: red;
  background-color: rgba(255, 208, 208, 0.7);

  border-radius: 12px;

  border: 2px solid red;
}
</style>
