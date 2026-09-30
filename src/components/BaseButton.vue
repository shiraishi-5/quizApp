<script setup lang="ts">
const { text = "ボタン", color = "primary" } = defineProps<{
  text: string;
  color?: string;
  active?:true;
}>();
</script>

<template>
  <button :class="[`btn-color--${color}`]">{{ text }}</button>
</template>

<style scoped>
button {
  padding: 8px;

  color: black;
  background-color: rgb(72, 179, 255);

  border-radius: 12px;

  border: none;

  width: 100%;
}

.btn-color--primary {
  background-color: rgb(72, 179, 255);
}

.btn-color--secondary {
  background-color: red;
  color: white;
}

.btn-color--normal {
  background-color: rgb(200, 200, 200);
}

.btn-color--primary:hover {
  background-color: rgb(63, 154, 219);
  transition: 0.3s;

  cursor: pointer;
}

.btn-color--secondary:hover {
  background-color: rgb(212, 2, 2);
  color: white;
  transition: 0.3s;

  cursor: pointer;
}

.btn-color--normal:hover {
background-color: rgb(180,180,180);

cursor: pointer;
}

.active {
  font-weight: bold;
  background-color: yellow;
}

.active:hover {
  background-color: rgb(231, 231, 2);
  transition: 0.3s;

  cursor: pointer;
}
</style>
