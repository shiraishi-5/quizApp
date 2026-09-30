import { ANSWER_TIME } from "@/script/constants";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useQuizTimerStore = defineStore("quizTimer", () => {
  const remainTime = ref<number>(ANSWER_TIME);
  let timerId: number | null = null;

  const startQuizTimer = () => {
    remainTime.value = ANSWER_TIME;

    timerId = window.setInterval(() => {
      remainTime.value -= 0.1;

      if (remainTime.value <= 0) {
        // answerTimeout();
        //時間切れ処理
      }
    }, 100); // 0.1秒
  };
});
