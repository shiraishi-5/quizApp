<script setup lang="ts">
import { onMounted, ref } from "vue";
import FinishQuiz from "./FinishQuiz.vue";
import PlayQuiz from "./PlayQuiz.vue";
import StartQuiz from "./StartQuiz.vue";
import type { Answer, QuizSection } from "@/script/types.ts";
import Card from "../Card.vue";
import { useQuizInfoStore } from "@/stores/quizInfo.ts";
import QuizHistory from "./QuizHistory.vue";

const quizInfo = useQuizInfoStore();

const sectionController = (section: QuizSection) => {
  quizInfo.quizSection = section;
};

const playQuiz = (answer: Answer) => {
  quizInfo.addAnswer(answer);
  quizInfo.nextQuiz();

  if (quizInfo.isFinishQuiz) {
    quizInfo.quizSection = "FINISH";
  }
};
</script>

<template>
  <div class="quiz-app">
    <h2>クイズアプリ</h2>

    <Card v-if="quizInfo.quizSection === 'START'">
      <StartQuiz @to-play="sectionController"></StartQuiz>
    </Card>

    <Card v-if="quizInfo.quizSection === 'PLAY'" size="large">
      <PlayQuiz
        :quiz="quizInfo.currentQuiz"
        :quiz-num="quizInfo.currentQuizNum"
        :total-quiz-num="quizInfo.totalQuizNum"
        :remain-time="quizInfo.remainTime"
        @to-finish="sectionController"
        @selected-answer="playQuiz"
      ></PlayQuiz>
    </Card>

    <Card v-if="quizInfo.quizSection === 'FINISH'">
      <FinishQuiz
        :total-quiz-num="quizInfo.totalQuizNum"
        :correct-answers-num="quizInfo.correctAnswersNum"
        :correct-rate="quizInfo.correctRate"
        @to-start="sectionController"
      ></FinishQuiz>
    </Card>
  </div>

  <QuizHistory
    v-if="quizInfo.quizSection === 'START'"
    :quiz-histories="quizInfo.quizHistories"
  />
</template>

<style scoped>
.quiz-app {
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
}
</style>
