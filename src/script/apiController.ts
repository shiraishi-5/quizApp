import axios from "axios";
import type {
  Address,
  AddressApiResponse,
  ApiResult,
  TaskApiResponse,
  TaskCreateRequest,
  TaskResponse,
  TaskUpdateRequest,
} from "./types";

//withCredentials:trueでクッキー送受信を許可している
const api = axios.create({
  baseURL: "http://localhost:8080/api",
});

export const getAddress = async (
  zipcode: string,
): Promise<ApiResult<Address>> => {
  try {
    const res = await axios.get<AddressApiResponse>(
      "https://zipcloud.ibsnet.co.jp/api/search",
      {
        params: {
          zipcode: zipcode,
        },
      },
    );

    //デバッグ
    console.log(res);
    console.log(res.data);

    if (!res.data.results) {
      return {
        isSuccess: false,
        message: "該当する住所が見つかりません。",
      };
    }

    const apiAddress = res.data.results[0];

    //デバッグ
    console.log(apiAddress);

    return {
      isSuccess: true,
      message: "取得完了しました",
      data: apiAddress,
    };
  } catch (error) {
    console.log(error);
    return makeErrorApiResult("住所検索中にエラーが発生しました。");
  }
};

export const createTask = async (
  data: TaskCreateRequest,
): Promise<ApiResult<TaskResponse[]>> => {
  try {
    const res = await api.post("/tasks/create", data);

    return {
      isSuccess: true,
      message: res.data.message,
      data:res.data.data,
    };
  } catch (error) {
    console.log(error);
    return makeErrorApiResult();
  }
};

export const getTasks = async (): Promise<ApiResult<TaskResponse[]>> => {
  try {
    const res = await api.get<TaskApiResponse>("/tasks");

    return {
      isSuccess: true,
      message: res.data.message,
      data: res.data.data,
    };
  } catch (error) {
    console.log(error);
    return makeErrorApiResult();
  }
};

export const updateTask = async (
  id: Number,
  data: TaskUpdateRequest,
): Promise<ApiResult<TaskResponse>> => {
  try {
    const res = await api.put<TaskApiResponse>(`/tasks/${id}/update`, data);

    //データはなくてもいいかも？
    return {
      isSuccess: true,
      message: "更新完了しました。",
      data: res.data.data[0],
    };
  } catch (error) {
    console.log(error);
    return makeErrorApiResult();
  }
};

export const deleteTask = async (
  id: number,
): Promise<ApiResult<TaskResponse>> => {
  try {
    const res = await api.delete<TaskApiResponse>(`/tasks/${id}/delete`);

    return {
      isSuccess: true,
      message: "削除完了しました。",
      data: res.data.data[0],
    };
  } catch (error) {
    console.log(error);
    return makeErrorApiResult();
  }
};

/* =========================
  部品
========================= */

//　型があいまいになるのでよろしくないかも？
const makeSuccessApiResult = (
  message: string = "成功しました。",
  data: any,
): ApiResult<any> => {
  return {
    isSuccess: true,
    message: message,
    data: data,
  };
};

const makeErrorApiResult = (
  message: string = "API通信中にエラーが発生しました。",
): ApiResult<any> => {
  return {
    isSuccess: false,
    message: message,
  };
};
