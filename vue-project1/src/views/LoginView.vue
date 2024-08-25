<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import service from "@/utils/request";
import { ref } from "vue";

const route = useRoute();
const pagevalue = ref(route);
console.log(pagevalue.value);

const router = useRouter();
const goback = () => {
  router.push("/");
};

const gotolobby = () => {
  router.push("/gamelobby");
};

// 創建User型別
interface User {
  name: string;
  email: string;
  password: string;
}

const username = ref("");
const useremail = ref("xxxxx@xxx.com");
const userpassword = ref("");
// const user = ref<User>({ name: username.value, email: useremail.value, password: userpassword.value });

// 註冊
const register = async () => {
  try {
    const user = ref<User>({
      name: username.value,
      email: useremail.value,
      password: userpassword.value,
    });
    const res = await service.post("/users/add-new-user", user.value);
    console.log("成功創建新使用者", res.status);
    router.push("/gamelobby");
  } catch (err) {
    console.log(err);
    alert("輸入錯誤");
  }
};

// 登入註冊切換值
const chooseType = ref<boolean>(true);

// 錯誤值
const haveError = ref<boolean>(false);

</script>

<template>
  <div class="container">
    <div class="back-btn" @click="goback">回上一頁</div>
    <div class="main-content">
      <div class="login-form">
        <div class="login-title">
          <div
            :class="{ 'login-title-choose1': true, 'choose-left': chooseType }"
            @click="chooseType = true"
          >
            註冊
          </div>
          <div
            :class="{
              'login-title-choose2': true,
              'choose-right': !chooseType,
            }"
            @click="chooseType = false"
          >
            登入
          </div>
        </div>
        <div class="login-typebox">
          <div class="login-user">
            <p>使用者名稱</p>
            <input
              type="text"
              text=""
              v-model="username"
              placeholder="請輸入帳號"
            />
          </div>
          <div class="login-password">
            <p class="">密碼</p>
            <input
              type="text"
              text=""
              v-model="userpassword"
              placeholder="請輸入密碼"
            />
          </div>
        </div>
        <p class="login-errormsg" :style = "{opacity: haveError ? '1' : '0'}">顯示錯誤訊息</p>
        <button class="login-btn" @click="register">GO</button>
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
    border-radius: 8px;
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
    height: 100%;
    // animation: backgdchange 0.5s ease-in forwards;
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
        user-select: none;
        font-size: 3em;
        font-weight: bold;
        color: white;
        // padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        .login-title-choose1 {
          // cursor: pointer;
          padding: 12px 8px;
          border-radius: 8px 0 0 8px;
        }
        .login-title-choose2 {
          // cursor: pointer;
          padding: 12px 8px;
          border-radius: 0 8px 8px 0;
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
            user-select: none;
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
            user-select: none;
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
        user-select: none;
      }
      .login-btn {
        margin-top: 100px;
        padding: 10px 20px;
        border-radius: 5px;
        border: none;
        background-color: white;
        font-size: 2em;
        font-weight: bold;
        color: orange;
        // cursor: pointer;
      }
    }
  }
}

.choose-left {
  background-color: white;
  color: orange;
  // transition: all 0.3s ease-in;
}

.choose-right {
  background-color: white;
  color: orange;
  // transition: background-color 0.3s ease-in;
}
// @keyframes backgdchange {
//   0% {
//     height: 100%;
//   }

//   100% {
//     height: 85%;
//   }
// }
</style>
