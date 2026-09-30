<script setup lang="ts">
import { ref } from "vue";
import InputZip from "./InputZip.vue";
import type { Address, ApiResult, ValidResult } from "@/script/types.ts";
import { validZipcode } from "@/script/validation.ts";
import { getAddress } from "@/script/apiController.ts";

const zipcode = ref<string>("");
const strAddress = ref<string>("");

const error = ref<string>("");
const apiError = ref<string>("");

const search = async () => {
  resetError();
  const validResult: ValidResult = validZipcode(zipcode.value);

  if (!validResult.isValid) {
    error.value = validResult.message;
    return;
  }

  const apiResult: ApiResult<Address> = await getAddress(zipcode.value);

  //正常に取得できたか
  if (!apiResult.isSuccess || !apiResult.data) {
    apiError.value = apiResult.message;
    return;
  }

  const address: Address = apiResult.data;

  strAddress.value = address.address1 + address.address2 + address.address3;
};

//エラー初期化
const resetError = (): void => {
  error.value = "";
  apiError.value = "";
};
</script>

<template>
  <div class="address-area">
    <h3>住所検索</h3>
    <div v-if="apiError" class="error">
      <p>{{ apiError }}</p>
    </div>

    <InputZip :error="error" @searching="search" v-model="zipcode"></InputZip>

    <label for="address">住所</label>
    <input
      id="address"
      type="text"
      v-model="strAddress"
      placeholder="取得に成功すると表示されます"
      readonly
    />
  </div>
</template>

<style scoped>
h3 {
  font-weight: bold;
  margin-bottom: 8px;
}

.address-area {
  display: flex;
  flex-direction: column;
}

.address-area label {
  margin-top: 16px;
}

.error {
  padding: 8px;
  color: red;
  background-color: rgba(255, 208, 208, 0.7);

  border-radius: 12px;

  border: 2px solid red;
}

input {
  padding: 8px;

  border-radius: 4px;

  border: none;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}
</style>
