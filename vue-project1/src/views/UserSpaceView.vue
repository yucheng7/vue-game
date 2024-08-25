<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const goback = () => {
  router.push("/gamelobby");
}
</script>

<template>
  <div class="container">
    <div class="back-btn" @click="goback">回上一頁</div>
    <div class="main-contentbox">
      <div class="user-player">
        <div class="player-box">

        </div>
      </div>
      <div class="item-type">
        <div class="type-box" v-for="index in 5" :key="index">{{ index }}</div>
      </div>
      <div class="user-item">
        <div class="item-box" v-for="index in 27" :key="index">{{ index }}</div>
        <div class="nothing-box" v-for="index in 30"></div>
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
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: orange;
    .player-box {
      width: 90%;
      height: 90%;
      background-color: white;
      border-radius: 10px;
    }
  }

  .item-type {
    height: 10%;
    width: 100%;
    display: flex;

    .type-box {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2em;
      width: 100%;
      height: 100%;

      color: white;
      background-color: gray;
    }
    .type-box:first-child {
      background-color: orange;
    } 
  }

  .user-item {
    position: relative;
    width: 100%;
    height: 30%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow-y: auto;
    gap: 10px;
    background-color: orange;

    .item-box {
      min-width: 80px;
      height: 80px;
      line-height: 80px;
      margin-top: 10px;
      text-align: center;
      border-radius: 10px;
      background-color: white;
      
    }

    .nothing-box {
      min-width: 80px;
      line-height: 80px;
      margin-top: 10px;
      text-align: center;
      border-radius: 10px;
      // background-color: white;
    }
  }
}
</style>
