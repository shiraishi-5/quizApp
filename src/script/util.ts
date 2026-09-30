import type { Answer } from "./types";

export function shuffle<T>(array: T[]): T[] {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [result[i], result[j]] = [result[j]!, result[i]!];
  }

  return result;
}

export const formatDate = (date: Date): string => {
  return date.toLocaleString("ja-JP");
};

export const getNow = (): Date => {
  return new Date();
};

export const createUnanswer = (): Answer => {
  return {
    isCorrect: false,
    text: "未解答",
  };
};
