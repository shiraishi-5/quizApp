<script setup>
import BaseButton from './BaseButton.vue';

defineProps({
  show: Boolean,
});

const emit = defineEmits(["close"]);
</script>

<template>
  <div v-if="show" class="modal-overlay" @click="emit('close')">
    <div class="modal-content" @click.stop>
      <slot />

      <BaseButton text="閉じる" color="secondary" @click="emit('close')"/>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;

  background: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;

  max-width: 800px;
  width: 80%;
  max-height: 80vh;

  overflow-y: auto;
}

.close-button {
  margin-top: 16px;
}
</style>
