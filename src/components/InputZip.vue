<script setup lang="ts">
import Error from "./Error.vue";

const { error } = defineProps<{ error: string }>();

const emit = defineEmits<{
  searching: [];
}>();

const zipcode = defineModel<string>();
</script>

<template>
  <div class="search-area">
    <div class="input-area">
      <label for="zipcode">郵便番号</label>

      <input
        id="zipcode"
        type="text"
        placeholder="郵便番号を半角数字7桁で入力して下さい"
        v-model="zipcode"
      />

      <Error :msg="error"></Error>
    </div>

    <button @click="emit('searching')">検索</button>
  </div>
</template>

<style scoped>
.search-area {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.input-area {
  display: flex;
  flex-direction: column;
}

.error-area {
  color: red;
}

input {
  padding: 8px;

  border-radius: 4px;

  border: none;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}
</style>
