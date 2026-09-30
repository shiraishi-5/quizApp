<script setup lang="ts">
import type { User } from "@/script/types";
import axios from "axios";
import { onMounted, ref } from "vue";

const user = ref<User | null>(null);

onMounted(async () => {
  user.value = await getUser();
});

const getUser = async (): Promise<User> => {
  const res = await axios.get<User[]>(
    "https://jsonplaceholder.typicode.com/users",
  );
  console.log(res);
  console.log(res.data);
  const apiUser = res.data[0];

  if (!apiUser) {
    throw new Error("ユーザーが存在しません");
  }

  const user: User = {
    id: apiUser.id,
    name: apiUser.name,
    username: apiUser.username,
    email: apiUser.email,
  };

  console.log(user);
  return user;
};
</script>

<template>
  <button @click="getUser">取得する</button>

  <div class="user-area">
    <h4>ユーザー情報</h4>
    <p>ID：{{user?.id}}</p>
    <p>名前：{{user?.name}}</p>
    <p>ユーザー名：{{user?.username}}</p>
    <p>メールアドレス：{{user?.email}}</p>
  </div>
</template>

<style scoped></style>
