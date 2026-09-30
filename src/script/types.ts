export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export type Address = {
  address1: string;
  address2: string;
  address3: string;
};

export type ValidResult = {
  isValid: boolean;
  message: string;
};

export type ApiResult<T> = {
  isSuccess: boolean;
  message: string;
  data?: T;
};

export type AddressApiResponse = {
  message: string;
  results: Address[];
  status: number;
};

export type InputSettings = {
  id?: string;
  type?: string;
  placeholder?: string;
};

export type TaskApiResponse = {
  message: string;
  data: TaskResponse[];
};

export type TaskCreateRequest = {
  name: string;
  deadline: string;
};

export type TaskUpdateRequest = {
  name: string;
  deadline: string;
  status: boolean;
};

export type TaskResponse = {
  id: number;
  name: string;
  deadline: string;
  taskStatus: TaskStatus;
};

export type TaskStatus = "COMPLETED" | "INCOMPLETE" | "DELAYED";

export type TaskError = {
  name: string;
  deadline: string;
};

// ==========ここからクイズアプリ===============
export type Question = {
  title: string;
  answers: Answer[];
};

export type Answer = {
  isCorrect: boolean;
  text: string;
};

export type QuizSection = "START" | "PLAY" | "FINISH";

export type QuizHistory = {
  count:number;
  completedAt: string;
  totalQuizNum: number;
  correctNum: number;
  correctRate: number;
  questions: Question[];
  playerAnswers: Answer[];
};
