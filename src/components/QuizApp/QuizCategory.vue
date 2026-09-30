<script setup lang="ts">
import { ref } from "vue";

const category = ref(["カテゴリ1", "カテゴリ2", "カテゴリ3"]);
</script>

<template>
  <p>カテゴリを選んでください</p>
  <p v-for="value in category">
    {{ value }}
  </p>
</template>

<style scoped></style>
