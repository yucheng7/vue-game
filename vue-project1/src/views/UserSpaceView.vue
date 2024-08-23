<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
function goback() {
  router.push("/gamelobby");
}
</script>

<template>
  <div class="container">
    <div class="back-btn" @click="goback">回上一頁</div>
    <div class="main-contentbox">
      <div class="user-player"></div>
      <div class="item-type" >
        <div class="type-box" v-for="index in 5" :key="index">{{ index }}</div>
      </div>
      <div class="user-item">
        <div class="item-box"v-for="index in 20" :key="index">{{ index }}</div>
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
  }
  .user-player {
    width: 100%;
    height: 60%;

    background-color: white;
  }

  .item-type {
    height: 10%;
    width: 100%;
    display: flex;

    background-color: yellow;
    .type-box {
      text-align: center;
      line-height: 50px;
      width: 10vh;
      height:100%;

      color: white;
      background-color: blue;
    }
  }

  .user-item {
    position: relative;
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: flex-start;
    overflow-y: auto;
    overflow-x: hidden;

    background-color: lightblue;

    .item-box {
      min-width: 80px;
      height: 80px;
      


      border: 1px solid black;
      box-sizing: border-box;
    }
  }
}
</style>
