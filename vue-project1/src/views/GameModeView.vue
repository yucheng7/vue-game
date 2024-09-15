<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const goback = () => {
  router.push("/gamelobby")
}

const gonormal = () => {
  router.push("/gamemode/normalmode")
}
</script>

<template>
  <div class="container">
    <div class="back-btn" @click="goback">回上一頁</div>
    <div class="main-contentbox">
      <div class="mode-item normal-mode" @click="gonormal">一般遊玩模式</div>
      <div class="mode-item daily-mode">每日主題任務</div>
      <div class="mode-item boss-mode">週期BOSS討伐</div>
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
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .mode-item {
      width: 80%;
      font-size: 1.5em;
      font-weight: bold;
      background-color: white;
      text-align: center;
      border-radius: 10px;
      margin: 10px 0;
      padding: 20px 0;
    }
  }

}
</style>
