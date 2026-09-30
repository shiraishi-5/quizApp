<script setup lang="ts">
import type { Answer, Question, QuizHistory } from "@/script/types.ts";
import Card from "../Card.vue";

const { quizHistory } = defineProps<{ quizHistory: QuizHistory }>();

const findCorrectAnswer = (answers: Answer[]): Answer | undefined => {
  return answers.find((answer) => answer.isCorrect);
};

const getResultMark = (isCorrect: boolean | undefined): string => {
  if (isCorrect === undefined) return "";
  return isCorrect ? "〇" : "✕";
};

const getClass = (isCorrect: boolean): string => {
  if (isCorrect === undefined) return "";
  return isCorrect ? "correct" : "in-correct";
};
</script>

<template>
  <h3>解答詳細　{{ quizHistory.count }}回目</h3>

  <Card
    v-for="(question, index) in quizHistory.questions"
    :key="index"
    size="large"
  >
    <p>{{ index + 1 }}問目　{{ question.title }}</p>

    <div class="answers-area">
      <p
        v-for="(answer, answersIndex) in question.answers"
        :key="answersIndex"
        class="answer"
      >
        {{ answer.text }}
      </p>
    </div>

    <p class="correct">正解：{{ findCorrectAnswer(question.answers)?.text }}</p>
    <p :class="getClass(quizHistory.playerAnswers[index]?.isCorrect ?? false) ">
      解答：{{ quizHistory.playerAnswers[index]?.text }}
      {{ getResultMark(quizHistory.playerAnswers[index]?.isCorrect) }}
    </p>
  </Card>
</template>

<style scoped>
.answer {
  padding: 4px;
  background-color: rgb(212, 212, 212);
  border-radius: 8px;
}

.answers-area {
  display: flex;
  gap: 8px;
}

.correct {
  color: green;
}

.in-correct {
  color: red;
}
</style>
