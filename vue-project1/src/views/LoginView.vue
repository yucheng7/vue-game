<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
function goback() {
  router.push("/");
}

function gotolobby() {
  router.push("/gamelobby");
}
</script>

<template>
  <div class="container">
    <div class="back-btn" @click="goback">回上一頁</div>
    <div class="main-content">
      <div class="login-form">
        <div class="login-title">
          <div class="login-title-choose1">註冊</div>
          <div class="login-title-choose2">登入</div>
        </div>
        <div class="login-typebox">
          <div class="login-user">
            <p>使用者名稱</p>
            <input type="text" text="" placeholder="請輸入帳號" />
          </div>
          <div class="login-password">
            <p class="">密碼</p>
            <input type="text" text="" placeholder="請輸入密碼" />
          </div>
        </div>
        <p class="login-errormsg">顯示錯誤訊息</p>
        <button class="login-btn" @click="gotolobby">GO</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .back-btn {
    position: absolute;
    top: 8%;
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
  .main-content {
    width: 100%;
    animation: backgdchange 0.5s ease-in forwards;
    background-color: orange;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-form {
      height: 80%;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .login-title {
        font-size: 3em;
        font-weight: bold;
        color: white;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        .login-title-choose1 {
          padding: 8px;
          background-color: white;
          color: orange;
          border-radius: 8px;
        }
      }
      .login-typebox {
        border-radius: 10px;
        padding: 5px;

        margin: 30px;
        .login-user {
          p {
            height: 5vh;
            font-size: 2em;
            font-weight: bold;
            color: white;
            line-height: 5vh;
            padding: 5px;
          }
          input {
            width: 70vw;
            height: 5vh;
            border-radius: 10px;
            text-align: center;
            border: none;
            font-size: 1.5em;
            font-weight: bold;
          }
          input:focus {
            outline: none;
          }
        }
        .login-password {
          p {
            height: 5vh;
            font-size: 2em;
            font-weight: bold;
            color: white;
            line-height: 5vh;
            padding: 5px;
          }
          input {
            width: 70vw;
            height: 5vh;
            border-radius: 10px;
            text-align: center;
            border: none;
            font-size: 1.5em;
            font-weight: bold;
          }
          input:focus {
            outline: none;
          }
        }
      }
      .login-errormsg {
        color: red;
        font-weight: bold;
        font-size: large;
      }
      .login-btn {
        margin-top: 100px;
        width: 50vw;
        height: 5vh;
        border-radius: 5px;
        border: none;
        background-color: white;
        font-size: 2em;
        font-weight: bolder;
        color: orange;
      }
    }
  }
}

@keyframes backgdchange {
  0% {
    height: 100%;
  }

  100% {
    height: 85%;
  }
}
</style>
