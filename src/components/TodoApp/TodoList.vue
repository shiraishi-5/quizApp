<script setup lang="ts">
import BaseButton from "../BaseButton.vue";
import type { TaskStatus, TaskResponse } from "@/script/types.ts";
import ApiError from "../ApiError.vue";

const props = defineProps<{
  tasks: TaskResponse[] | undefined;
  apiError: string;
}>();

const emit = defineEmits<{
  completed: [task: TaskResponse];
  delete: [id: number];
}>();

//ステータスから表示用に変換
const StatusLabel: Record<TaskStatus, string> = {
  COMPLETED: "完了",
  INCOMPLETE: "未完了",
  DELAYED: "遅延",
};

//ステータスから文字色変換
const getStatusClass = (task: TaskResponse): string => {
  if (task.taskStatus === "COMPLETED") {
    return "completed-row";
  }

  if (task.taskStatus === "DELAYED") {
    return "delayed-row";
  }

  return "incomplete-row";
};
</script>

<template>
  <h2>タスクリスト</h2>

  <ApiError :msg="props.apiError"></ApiError>

  <table>
    <thead>
      <tr>
        <th>タスク</th>
        <th>期限</th>
        <th>ステータス</th>
        <th>操作</th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="task in props.tasks"
        :key="task.id"
        :class="getStatusClass(task)"
      >
        <td>{{ task?.name }}</td>
        <td>{{ task?.deadline }}</td>
        <td>{{ StatusLabel[task?.taskStatus] }}</td>
        <td>
          <BaseButton
            v-if="task?.taskStatus !== 'COMPLETED'"
            text="完了"
            @click="emit('completed', task)"
          ></BaseButton>
          <BaseButton
            text="削除"
            color="secondary"
            @click="emit('delete', task?.id)"
          ></BaseButton>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
h2 {
  margin-bottom: 16px;
}

table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

thead {
  background: #f5f5f5;
}

th,
td {
  padding: 12px 16px;
  text-align: left;
}

th {
  font-weight: 600;
  border-bottom: 2px solid #ddd;
}

td {
  border-bottom: 1px solid #eee;
}

tbody tr:hover {
  background: #e9e9e9;
}

tbody tr:last-child td {
  border-bottom: none;
}

/* 操作列 */
td:last-child {
  display: flex;
  gap: 8px;
  align-items: center;
}

.completed-row td {
  color: blue;
}

.delayed-row td {
  color: red;
}
</style>
