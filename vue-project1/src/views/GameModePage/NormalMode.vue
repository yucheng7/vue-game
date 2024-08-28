<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import service from "@/utils/request";

const router = useRouter();


const questionList = ref([]);

const getQuestion = async() => {
    const res = await service.get("/gamemode/normalmode")
    console.log(res);
    
}
getQuestion();
const resetQuestion = () => {
  const allQuestions:Array<string> = []

};
const question = ref("問題");
</script>

<template>
  <div class="container">
    <div class="back-btn" @click="resetQuestion">重設題目</div>
    <div class="main-contentbox">
      <div class="top-aria">
        <div class="question whitebox">{{ question }}</div>
      </div>
      <div class="bottom-aria">
        <input type="text" class="whitebox answer" placeholder="請輸入回答" />
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
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .top-aria {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .bottom-aria {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      .answer {
        border: none;
        outline: none;
      }
    }
  }
}

.whitebox {
  width: 80%;
  font-size: 1.5em;
  font-weight: bold;
  background-color: white;
  text-align: center;
  border-radius: 10px;
  margin: 10px 0;
  padding: 20px 0;
}
</style>
