<script setup lang="ts">
import { ref } from "vue";
import BaseButton from "../BaseButton.vue";
import { useQuizInfoStore } from "@/stores/quizInfo.ts";
import type { QuizSection } from "@/script/types.ts";
import { QUIZ_NUMS } from "@/script/constants.ts";

const quizInfo = useQuizInfoStore();

const activeBtnId = ref<number>(0);
const quizNum = ref<number>(QUIZ_NUMS[activeBtnId.value]!);

const emit = defineEmits<{
  toPlay: [section: QuizSection];
}>();

const setQuizNum = (num: number, index: number) => {
  activeBtnId.value = index;
  quizNum.value = num;
};

const startQuiz = () => {
  quizInfo.totalQuizNum = quizNum.value;
  emit("toPlay", "PLAY");
};
</script>

<template>
  <p>問題数を選択</p>

  <div class="select-quiz-amount">
    <BaseButton
      v-for="(quizNum, index) in QUIZ_NUMS"
      :key="index"
      :text="String(quizNum) + '問'"
      color="normal"
      :class="{ active: activeBtnId === index }"
      @click="setQuizNum(quizNum, index)"
    ></BaseButton>
  </div>

  <BaseButton text="スタート" @click="startQuiz"></BaseButton>
</template>

<style scoped>
.select-quiz-amount {
  display: flex;

  gap: 8px;
  margin: 8px;
}

p {
  font-weight: bold;
}
</style>
