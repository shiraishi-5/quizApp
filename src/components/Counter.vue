<script setup lang="ts">
import { ref } from "vue";

type Props = {
  initialCount?: number;
};

const { initialCount = 0 } = defineProps<Props>();
const count = ref(initialCount);

const countUp = () => {
  count.value++;
};
</script>

<template>
  <p>現在値：{{ count }}</p>
  <button @click="countUp">+1</button>
</template>

<style scoped></style>
