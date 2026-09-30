<script setup lang="ts">
import type { TaskCreateRequest, TaskError } from "@/script/types.ts";
import BaseButton from "../BaseButton.vue";
import BaseInput from "../BaseInput.vue";
import Error from "../Error.vue";
import ApiError from "../ApiError.vue";

const props = defineProps<{
  taskForm: TaskCreateRequest;
  apiError: string;
  errors: TaskError;
}>();

const emit = defineEmits<{
  create: [];
}>();
</script>

<template>
  <h2>タスク追加</h2>

  <ApiError :msg="props.apiError"></ApiError>

  <div class="input-area">
    <label for="task-name">タスク名</label>

    <BaseInput id="task-name" v-model="props.taskForm.name"></BaseInput>

    <Error :msg="props.errors.name"></Error>
  </div>

  <div class="input-area">
    <label for="task-deadline">期限</label>

    <BaseInput
      id="task-deadline"
      type="date"
      v-model="props.taskForm.deadline"
    ></BaseInput>

    <Error :msg="props.errors.deadline"></Error>
  </div>

  <div class="btn-area">
    <BaseButton text="追加" @click="emit('create')"></BaseButton>
  </div>
</template>

<style scoped>
.input-area {
  padding: 8px;
  margin-bottom: 8px;

  display: flex;
  flex-direction: column;
}

.input-area:end {
  margin-bottom: 0;
}

.btn-area {
  display: flex;
  justify-content: right;
}
</style>
