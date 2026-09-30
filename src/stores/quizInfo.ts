import { ANSWER_TIME } from "@/script/constants";
import { QUESTIONS } from "@/script/QuizApp/questions";
import {
  type QuizHistory,
  type Answer,
  type Question,
  type QuizSection,
} from "@/script/types";
import { createUnanswer, formatDate, getNow, shuffle } from "@/script/util";
import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";

export const useQuizInfoStore = defineStore("quizInfo", () => {
  const shuffleQuestions = ref<Question[]>([]);
  const playerAnswers = ref<Answer[]>([]);
  const totalQuizNum = ref<number>(0);
  const currentQuizNum = ref<number>(0);
  const quizHistories = ref<QuizHistory[]>([]); //複数履歴保存用
  const count = ref<number>(1); // 履歴での何回目か保存用
  const quizSection = ref<QuizSection>("START");
  let timerId: number | null = null; //タイマーID
  const remainTime = ref<number>(ANSWER_TIME); //残り時間

  const initialize = () => {
    shuffleQuestions.value = [];
    playerAnswers.value = [];
    totalQuizNum.value = 0;
    currentQuizNum.value = 0;
    countUp();
  };

  const countUp = () => {
    count.value++;
  };

  //問題一覧をセットする 選択肢もシャッフルしている
  const setQuestions = (length: number = QUESTIONS.length) => {
    shuffleQuestions.value = shuffle(QUESTIONS)
      .slice(0, length)
      .map((quiz) => ({
        ...quiz,
        answers: shuffle(quiz.answers),
      }));
  };

  //クイズを返す
  const currentQuiz = computed(
    (): Question => shuffleQuestions.value[currentQuizNum.value]!,
  );

  //正解数を返す
  const correctAnswersNum = computed(() => {
    return playerAnswers.value.filter((answer) => answer.isCorrect).length;
  });

  //次のクイズに移る
  const nextQuiz = () => {
    if (currentQuizNum.value + 1 < totalQuizNum.value) {
      currentQuizNum.value++;
      stopQuizTimer();
      startQuizTimer();
    }
  };

  //プレイヤーの解答に追加する
  const addAnswer = (answer: Answer) => {
    playerAnswers.value.push(answer);
  };

  //正答率計算 小数点切り捨て
  const correctRate = computed((): number => {
    const rate = (correctAnswersNum.value / totalQuizNum.value) * 100;
    return Math.floor(rate);
  });

  //すべて回答したか
  const isFinishQuiz = computed((): boolean => {
    return totalQuizNum.value === playerAnswers.value.length;
  });

  //履歴を追加する
  const addHistory = () => {
    const history: QuizHistory = {
      count: count.value,
      completedAt: formatDate(getNow()),
      totalQuizNum: totalQuizNum.value,
      correctNum: correctAnswersNum.value,
      correctRate: correctRate.value,
      questions: shuffleQuestions.value,
      playerAnswers: playerAnswers.value,
    };
    quizHistories.value.push(history);
  };

  watch(quizSection, (newSection: QuizSection) => {
    if (newSection === "START") {
      initialize();
    }

    if (newSection === "PLAY") {
      setQuestions(totalQuizNum.value);
      startQuizTimer();
    }

    if (newSection === "FINISH") {
      addHistory();
      stopQuizTimer();
    }
  });

  const startQuizTimer = () => {
    remainTime.value = ANSWER_TIME;

    timerId = window.setInterval(() => {
      remainTime.value = Math.max(0,remainTime.value - 0.1);

      if (remainTime.value <= 0) {
        answerTimeout();
      }
    }, 100); // 0.1秒
  };

  //時間切れ処理
  const answerTimeout = () => {
    addAnswer(createUnanswer());
    nextQuiz();

    if (isFinishQuiz.value) {
      quizSection.value = "FINISH";
    }
  };

  //タイマー停止
  const stopQuizTimer = () => {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
  };

  return {
    initialize,
    addAnswer,
    nextQuiz,
    setQuestions,
    addHistory,
    stopQuizTimer,
    quizSection,
    totalQuizNum,
    currentQuizNum,
    currentQuiz,
    correctAnswersNum,
    correctRate,
    isFinishQuiz,
    quizHistories,
    remainTime,
  };
});
