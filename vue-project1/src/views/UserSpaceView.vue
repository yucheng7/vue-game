<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
function goback() {
  router.push("/gamelobby")
}


</script>

<template>
  <div class="container">
    <div class="back-btn" @click="goback">回上一頁</div>
    <div class="main-contentbox"></div>
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
}
</style>
