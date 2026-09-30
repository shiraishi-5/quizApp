<script setup lang="ts">
import {
  createTask,
  deleteTask,
  getTasks,
  updateTask,
} from "@/script/apiController";
import { initialError, initialTask } from "@/script/constants";
import type {
  ApiResult,
  TaskCreateRequest,
  TaskError,
  TaskResponse,
  TaskUpdateRequest,
  ValidResult,
} from "@/script/types";
import { validTaskName, validTaskDeadline } from "@/script/validation";
import { onMounted, reactive, ref } from "vue";
import TodoForm from "./TodoForm.vue";
import TodoList from "./TodoList.vue";
import Card from "../Card.vue";

const apiErrorForm = ref<string>("");
const apiErrorList = ref<string>("");
const errors = reactive<TaskError>({ ...initialError });
const taskForm = reactive<TaskCreateRequest>({ ...initialTask });
const tasks = ref<TaskResponse[]>();

onMounted(async () => {
  const apiResult: ApiResult<TaskResponse[]> = await getTasks();

  if (!apiResult.isSuccess) {
    apiErrorList.value = apiResult.message;
    return;
  }

  tasks.value = apiResult.data;
});

//タスク追加
const addTask = async () => {
  resetErrors();
  if (!validate()) return;

  const apiResult: ApiResult<TaskResponse[]> = await createTask(taskForm);

  if (!apiResult.isSuccess) {
    apiErrorForm.value = apiResult.message;
    return;
  }

  //すぐに表示するため、tasksに追加している
  if (apiResult.data && apiResult.data[0]) {
    const resultTask: TaskResponse = apiResult.data[0];
    const task: TaskResponse = {
      id: resultTask.id,
      name: resultTask.name,
      deadline: resultTask.deadline,
      taskStatus: resultTask.taskStatus,
    };

    tasks.value?.push(task);
  }

  console.log("追加しました");
  resetForm();
};

//タスク完了
const taskCompleted = async (task: TaskResponse) => {
  const updatingTask: TaskUpdateRequest = {
    name: task.name,
    deadline: task.deadline,
    status: true,
  };

  const apiResult: ApiResult<TaskResponse> = await updateTask(
    task.id,
    updatingTask,
  );

  if (!apiResult.isSuccess) {
    apiErrorList.value = apiResult.message;
    return;
  }

  task.taskStatus = "COMPLETED";
  console.log("更新しました。");
};

//タスク削除
const taskDelete = async (id: number) => {
  const apiResult: ApiResult<TaskResponse> = await deleteTask(id);

  if (!apiResult.isSuccess) {
    apiErrorList.value = apiResult.message;
    return;
  }

  //dbに接続せずvueに反映するため
  tasks.value = tasks.value?.filter((task) => task.id !== id);

  console.log("削除しました");
};

const resetErrors = (): void => {
  apiErrorForm.value = "";
  Object.assign(errors, initialError);
};

const resetForm = (): void => {
  Object.assign(taskForm, initialTask);
};

const validate = (): boolean => {
  const validResultName: ValidResult = validTaskName(taskForm.name);
  const validResultDeadline: ValidResult = validTaskDeadline(taskForm.deadline);

  if (!validResultName.isValid) {
    errors.name = validResultName.message;
  }

  if (!validResultDeadline.isValid) {
    errors.deadline = validResultDeadline.message;
  }

  return !hasError(errors);
};

//エラーがあるか
const hasError = (errors: Object) => {
  return Object.values(errors).some(Boolean);
};
</script>

<template>
  <Card size="large">
    <TodoForm
      :task-form="taskForm"
      :api-error="apiErrorForm"
      :errors="errors"
      @create="addTask"
    ></TodoForm>
  </Card>

  <Card size="xl">
    <TodoList
      :tasks="tasks"
      :api-error="apiErrorList"
      @completed="taskCompleted"
      @delete="taskDelete"
    ></TodoList>
  </Card>
</template>

<style scoped></style>
