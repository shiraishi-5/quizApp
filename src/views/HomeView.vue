<script setup lang="ts">
import Card from "@/components/Card.vue";
import PlayQuiz from "@/components/QuizApp/PlayQuiz.vue";
import StartQuiz from "@/components/QuizApp/StartQuiz.vue";
</script>

<template>
  <main>
    <p>URLに <span>/quizApp</span> を付けるとクイズ画面に遷移できます</p>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
}

p {
  color: gray;
}

span {
  color: black;
  font-weight: bold;
  font-size: 1.2rem;
}
</style>
