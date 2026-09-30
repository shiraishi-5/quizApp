<script setup lang="ts">
import type { Answer, Question, QuizSection } from "@/script/types";
import BaseButton from "../BaseButton.vue";
import { ANSWER_TIME } from "@/script/constants.ts";
import { computed } from "vue";

const { quiz, quizNum, totalQuizNum, remainTime } = defineProps<{
  quiz: Question;
  quizNum: number;
  totalQuizNum: number;
  remainTime: number;
}>();

const emit = defineEmits<{
  toFinish: [section: QuizSection];
  selectedAnswer: [answer: Answer];
}>();

const progressRate = computed(() => {
  return (remainTime / ANSWER_TIME) * 100;
});
</script>

<template>
  <p>問題{{ `${quizNum + 1}` }}/{{ totalQuizNum }}</p>
  <div class="time-area">
    <progress :value="remainTime" :max="ANSWER_TIME" />
    <p>
      残り時間：<span class="remain-time">{{ remainTime.toFixed(1) }}</span
      >秒
    </p>
  </div>

  <p class="quiz-title">{{ quiz?.title }}</p>

  <div class="answers-area">
    <BaseButton
      v-for="ans in quiz?.answers"
      :text="ans.text"
      @click="emit('selectedAnswer', ans)"
    ></BaseButton>
  </div>
</template>

<style scoped>
.time-area {
  display: flex;
  justify-content: right;
  align-items: center;

  gap: 8px;
}
.quiz-title {
  font-weight: bold;
  font-size: 1.1rem;
}
.answers-area {
  display: flex;
  flex-direction: column;

  margin: 8px 0;
  gap: 8px;
}

.remain-time {
  font-size: 2rem;
  font-weight: bold;
  color: blue;
}

.gauge {
  width: 100%;
  height: 20px;
  background: #ddd;
  overflow: hidden;
}

.gauge-value {
  width: 100%;
  height: 100%;
  background: #4caf50;
  transition: width 1s linear;
}

.gauge-value.start {
  width: 0%;
}
</style>
