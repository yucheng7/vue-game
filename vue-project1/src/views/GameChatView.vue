<script setup lang="ts">
import { ref } from "vue";
import { useSocketStore } from "../stores/socket";

import { useRouter } from "vue-router";
// const router = useRouter();

const { sendMessage, messages } = useSocketStore();

const msg = ref<string>("");

const sendSomething = (data: string) => {
  if (data) {
    //使用store中的sendMessage函式
    sendMessage(data);
  } else {
    console.log("請輸入訊息");
  }
  msg.value = "";
  scrollToBottom();
};

//清空輸入
const cleanInput = () => {
  msg.value = "";
};

//輸入後自動滾動到底部
const scrollToBottom = () => {
  setTimeout(() => {
    const msgBox = document.querySelector(".messages-box");
    msgBox?.scrollTo({
      top: msgBox.scrollHeight,
      behavior: "smooth",
    });
  }, 200);
};

const createText = () => {
  const defaultText: string = "我是測試用訊息";
  const textArr = ref<string[]>([]);
  for (let i = 0; i < 12; i++) {
    sendMessage(defaultText);
  }
  scrollToBottom();
};
</script>

<template>
  <div class="container">
    <div class="back-btn" @click="cleanInput">清空輸入</div>
    <div class="test-btn" @click="createText">預設訊息</div>
    <div class="main-contentbox">
      <div class="messages-box">
        <div
          class="msg-item"
          v-for="(item, index) in messages"
          :key="index + 1"
        >
          {{ index + `.` + item }}
        </div>
      </div>
      <div class="msg-input-box">
        <div class="msg-input-functionbar">

        </div>
        <input
          class="msg-input"
          @keypress.enter="sendSomething(msg)"
          type="text"
          v-model="msg"
        />
        <div class="msg-input-sendbutton">

        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  // background-color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  .back-btn {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 100px;
    height: 50px;
    border-radius: 10px;
    background-color: white;
    font-weight: bold;
    color: orange;
    font-size: 1.2em;
    text-align: center;
    line-height: 50px;
    border: 1px solid orange;
  }
  .test-btn {
    position: absolute;
    top: 5px;
    left: 110px;
    width: 100px;
    height: 50px;
    border-radius: 10px;
    background-color: white;
    font-weight: bold;
    color: orange;
    font-size: 1.2em;
    text-align: center;
    line-height: 50px;
    border: 1px solid orange;
  }
  .main-contentbox {
    width: 100%;
    height: 100%;
    // background-color: orange;
    // padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    .messages-box {
      width: 100%;
      height: 100%;
      // background-color: orange;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      overflow: auto;
      // gap: 20px;

      // box-sizing: border-box;
      .msg-item {
        max-width: 80%;
        padding: 10px 20px;
        box-sizing: border-box;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        background-color: white;
        margin: 20px 20px 0px 0px;
        font-size: 1.2em;
        font-weight: bold;
        border-radius: 8px;
        word-break: break-all;
        line-height: 1.5;
        border: 1px solid orange;
        box-sizing: border-box;
      }
      .msg-item:last-child {
        margin-bottom: 20px;
      }
    }

    .msg-input-box {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: lightblue;
      padding: 10px;
      box-sizing: border-box;
      .msg-input {
        width: 100%;
        height: 50px;
        background-color: white;
        border: none;
        border-top: 1px solid orange;
        padding: 10px;
        font-size: 1.5em;
        font-weight: bold;
        &:focus {
          outline: none;
        }
      }
    }
  }
}
</style>
