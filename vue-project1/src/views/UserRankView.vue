<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
import service from "@/utils/request";

const router = useRouter();
const goback = () => {
  router.push("/gamelobby");
}

interface Player {
  username: string;
  score: number;
}

const rankdata: Player[] = [
  {
    username: "Kenny",
    score: 500,
  },
  {
    username: "bob",
    score: 400,
  },
  {
    username: "steve",
    score: 300,
  },
  {
    username: "whiteman",
    score: 200,
  },
  {
    username: "poorguy",
    score: 100,
  },
  {
    username: "Kenny",
    score: 500,
  },
  {
    username: "bob",
    score: 400,
  },
  {
    username: "steve",
    score: 300,
  },
  {
    username: "whiteman",
    score: 200,
  },
  {
    username: "poorguy",
    score: 100,
  },
];

const selfrank: Player = {
  username: "YC",
  score: 10000,
};


// 獲取所有使用者資料
const getalluserdata = async () => {
  try {
 const res = await service.get("/users/all-users");
 console.log(res);
 newarray.value = res;
  }catch (err) {
    console.log(err);
  }
}

const newarray = ref();

</script>

<template>
  <div class="container">
    <div class="back-btn" @click="goback">回上一頁</div>
    <div class="main-contentbox">
      <div class="page-title">玩家排行</div>
      <div class="top10-ranklist">
        <div
          class="ranklist-item"
          v-for="(user, index) in rankdata"
          :key="index"
        >
          <div class="ranklist-item-username">{{ index + 1}}{{ user.username }}</div>
          <div class="ranklist-item-userscore">{{ user.score }}</div>
        </div>
      </div>
      <div class="selfrank">
        <div class="selfrank-item">
          <div class="selfrank-item-username">{{ selfrank.username }}</div>
          <div class="selfrank-item-userscore">{{ selfrank.score }}</div>
        </div>
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
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    .page-title {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      // text-align: center;
      font-size: 3em;
      font-weight: bold;
      padding: 10px 0 10px 0;
      color: white;
      // background-color: white;
    }
    .top10-ranklist {
      width: 100%;
      max-height: 70vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      overflow: auto;
      .ranklist-item {
        width: 70%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        font-size: 1.5em;
        font-weight: bold;
        border-radius: 30px;
        // border: 1px solid black;
        background-color: white;
        
      }
      // background-color: white;
    }
    .selfrank {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      // background-color: white;
      .selfrank-item {
        width: 70%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        font-size: 1.5em;
        font-weight: bold;
        // border: 1px solid black;
        background-color: white;
        
      }
    }
  }
}
</style>
