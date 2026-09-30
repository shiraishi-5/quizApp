import type { TaskCreateRequest, TaskError } from "./types";

export const initialTask: TaskCreateRequest = {
  name: "",
  deadline: "",
} as const;

export const initialError: TaskError = {
  name: "",
  deadline: "",
} as const;

export const MILLISECONDS_PER_SECOND = 1000;

// ======　クイズ設定 ======

//クイズ数
export const QUIZ_NUMS: number[] = [3, 10, 15];

//1問ごとの解答時間
export const ANSWER_TIME: number = 5;

export const QUIZ_CATEGORY = {
  GENERAL: "GENERAL",
  IT: "IT",
  HISTORY: "HISTORY",
} as const;
