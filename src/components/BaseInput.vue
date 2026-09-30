<script setup lang="ts">
import type { InputSettings } from "@/script/types";

const {
  id = "",
  type = "text",
  placeholder = "",
} = defineProps<InputSettings>();

const modelValue = defineModel();
</script>

<template>
  <input
    :id="id"
    :type="type"
    :placeholder="placeholder"
    v-model="modelValue"
  />
</template>

<style scoped>
input {
  padding: 8px;

  border-radius: 4px;

  border: none;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}
</style>
