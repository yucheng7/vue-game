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
    console.log(messages);
  } else {
    console.log("請輸入訊息");
  }
  msg.value = "";
  scrollToBottom();
};

const cleanInput = () => {
  msg.value = "";
};

const scrollToBottom = () => {
  const msgBox = document.querySelector(".messages-box");
  msgBox?.scrollTo({
    top:msgBox.scrollHeight,
    behavior: "smooth",
});
scrollToBottom();

}

</script>

<template>
  <div class="container">
    <div class="back-btn" @click="cleanInput">清空輸入</div>
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
      <input class="msg-input" @keypress.enter="sendSomething(msg)" type="text" v-model="msg" />
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
  .main-contentbox {
    width: 100%;
    height: 100%;
    background-color: white;
    // padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    .messages-box {
      width: 100%;
      height: 100%;
      // background-color: lightcyan;
      font-size: 1.5em;
      font-weight: bold;
      overflow: auto;
      .msg-item {
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        background-color: antiquewhite;
      }
    }
    .msg-input {
      width: 100%;
      height: 50px;
      background-color: lightgray;
      border: none;
      padding: 10px;
      box-sizing: border-box;
      font-size: 1.5em;
      font-weight: bold;
      text-align: center;
    }
    
    :focus {
      outline: none;
    }
  }
}
</style>
