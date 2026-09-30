<script setup lang="ts">
const { size = "middle" } = defineProps<{
  size?: string;
}>();
</script>

<template>
  <div :class="['card', `card-size--${size}`]">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  padding: 24px;
  margin: 32px;

  background-color: rgb(228, 254, 254);

  border-radius: 16px;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.card-size--small {
  width: 200px;
}

.card-size--middle {
  width: 300px;
}

.card-size--large {
  width: 400px;
}

.card-size--xl {
  width: 500px;
}
</style>
