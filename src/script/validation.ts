import type { ValidResult } from "./types";

const ZIPCODE_LENGTH = 7;

export const validZipcode = (zipcode: string): ValidResult => {
  if (!zipcode) {
    return {
      isValid: false,
      message: "郵便番号を入力して下さい。",
    };
  }

  if (!/^[0-9]+$/.test(zipcode)) {
    return {
      isValid: false,
      message: "半角数字で入力して下さい。",
    };
  }

  if (zipcode.length != ZIPCODE_LENGTH) {
    return {
      isValid: false,
      message: `郵便番号は${ZIPCODE_LENGTH}桁で入力してください。`,
    };
  }

  return makeSuccessValidResult();
};

export const validTaskName = (taskName: string): ValidResult => {
  if (!taskName) {
    return {
      isValid: false,
      message: "タスク名は必須です。",
    };
  }

  return makeSuccessValidResult();
};

export const validTaskDeadline = (taskDeadline: string): ValidResult => {
  if (!taskDeadline) {
    return {
      isValid: false,
      message: "期限は必須です。",
    };
  }

  return makeSuccessValidResult();
};

/* ===============================
　部品
===============================　*/

const makeSuccessValidResult = (
  message: string = "正常です。",
): ValidResult => {
  return {
    isValid: true,
    message: message,
  };
};

const makeFailValidResult = (
  message: string = "不正な値です。",
): ValidResult => {
  return {
    isValid: false,
    message: message,
  };
};
