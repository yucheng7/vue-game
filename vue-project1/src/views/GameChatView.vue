<script setup lang="ts">
import { ref } from "vue";
import { useSocketStore } from "../stores/socket";

import { useRouter } from "vue-router";
// const router = useRouter();

const getMessages = ref<string>("測試用文字")
const data = ref<string[]>([
  "測試用文字",
  "測試用文字2",
  "測試用文字3"
])

const socketStore = useSocketStore();
socketStore.sendMessage(data.value[0]);
console.log(socketStore.messages);


</script>

<template>
  <div class="container">
    <div class="back-btn" @click="">傳送訊息</div>
    <div class="main-contentbox">
      <div class="messages-box">
        {{ getMessages }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  background-color: orange;
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
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    .messages-box {
      width: 100%;
      height: 60px;
      background-color: lightcyan;
      line-height: 60px;
      text-align: center;
      font-size: 1.5em;
      font-weight: bold;
    }
  }
}
</style>
