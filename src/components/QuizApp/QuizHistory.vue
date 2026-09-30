<script setup lang="ts">
import { type Question, type Answer, type QuizHistory } from "@/script/types";
import Card from "../Card.vue";
import QuizHistoryDetail from "./QuizHistoryDetail.vue";
import { ref } from "vue";
import BaseModal from "../BaseModal.vue";

const { quizHistories } = defineProps<{ quizHistories: QuizHistory[] }>();
const selectedHistory = ref<QuizHistory>();
const showModal = ref<boolean>(false);

const openDetail = (quizHistory: QuizHistory) => {
  selectedHistory.value = quizHistory;
  showModal.value = true;
};
</script>

<template>
  <h3>解答履歴</h3>
  
  <div class="history-area">
    <Card v-for="(quizHistory, index) in quizHistories" :key="index">
      <p>{{ quizHistory.count }}回目 {{ quizHistory.completedAt }}</p>
      <p>正答率：{{ quizHistory.correctRate }}%</p>
      <p>
        正解数：{{ quizHistory.correctNum }} / {{ quizHistory.totalQuizNum }}
      </p>
      <p @click="openDetail(quizHistory)" class="detail">詳細を見る</p>
    </Card>
  </div>

  <BaseModal :show="showModal" @close="showModal = false">
    <QuizHistoryDetail :quiz-history="selectedHistory!"></QuizHistoryDetail>
  </BaseModal>
</template>

<style scoped>
.history-area {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.detail {
  display: inline-block;
  text-decoration: underline;
}

.detail:hover {
  transition: 0.3s;
  color: rgb(239, 5, 5);
  cursor: pointer;
}
</style>
