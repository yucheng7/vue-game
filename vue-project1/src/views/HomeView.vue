<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const startGameButtonState = ref<boolean>(false);

function changeStartGameBtnState() {
  startGameButtonState.value = !startGameButtonState.value;
  console.log("已執行");
}

//使用vue-router
const router = useRouter();

function changePage() {
  router.push("/login");
}
</script>

<template>
  <div class="container" @click="changeStartGameBtnState">
    <div class="content-box">
      <h1 class="title">XX大接龍</h1>
      <transition name="fade">
        <div class="startgame" v-if="startGameButtonState">
          <button class="startgame_button" @click="changePage">開始遊戲</button>
        </div>
      </transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.fade-enter-active {
  transition: opacity 0.5s ease-in;
}

.fade-leave-active {
  transition: opacity 0.5s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.container {
  width: 100vw;
  height: 100vh;
  background-color: orange;
  // border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;

  .content-box {
    width: 100%;
    text-align: center;
    .title {
      margin: 10px;
      padding: 5px;
      font-size: 3em;
      font-weight: bold;
      color: white;
      cursor: pointer;
    }
    .startgame_button {
      padding: 15px;
      width: 200px;
      max-height: 3em;
      border-radius: 10px;
      border: none;
      font-size: 1.5em;
      font-weight: bolder;
      // color: darkgoldenrod;
      transition: 0.2s ease-in;
    }
    .startgame_button:hover {
      background-color: white;
      color: black;
      cursor: pointer;
    }
  }
}

@keyframes titleFade {
  25% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  65% {
    opacity: 1;
  }
}

.title-animation {
  animation: titleFade 4s ease-in infinite;
}
</style>
