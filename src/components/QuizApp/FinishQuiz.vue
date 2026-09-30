<script setup lang="ts">
import BaseButton from "../BaseButton.vue";
import type { QuizSection } from "@/script/types.ts";

const { totalQuizNum, correctAnswersNum, correctRate } = defineProps<{
  totalQuizNum: number;
  correctAnswersNum: number;
  correctRate: number;
}>();

const emit = defineEmits<{ toStart: [section: QuizSection] }>();
</script>

<template>
  <h3>結果発表</h3>

  <div class="score-area">
    <p>スコア</p>
    <p>
      <span class="correct-answer">{{ correctAnswersNum }}</span
      > / {{ totalQuizNum }}
    </p>
    <p>{{ totalQuizNum }} 問中 {{ correctAnswersNum }} 問正解</p>
    <p class="correct-rate">正答率 {{ correctRate }}%</p>
  </div>

  <BaseButton
    text="もう一度始める"
    @click="emit('toStart', 'START')"
  ></BaseButton>
</template>

<style scoped>
h3 {
  font-weight: bold;
}

.score-area {
  display: flex;
  flex-direction: column;

  align-items: center;

  margin: 8px 0;
  gap: 8px;
}

.correct-answer {
    font-size:2rem;
    font-weight: bold;
    color: blue;
}

.correct-rate {
  color: green;
}
</style>
