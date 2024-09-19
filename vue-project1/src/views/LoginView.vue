<script setup lang="ts">
import { useRouter } from "vue-router";
import service from "@/utils/request";
import { onMounted, ref } from "vue";

onMounted(() => {});

const router = useRouter();
const goback = () => {
  router.push("/");
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
if (localStorage.getItem("token")) {
  username.value = JSON.parse(localStorage.getItem("token")).name;
  userpassword.value = JSON.parse(localStorage.getItem("token")).password;
}
// const user = ref<User>({ name: username.value, email: useremail.value, password: userpassword.value });
// 創建使用者
const user = ref<User>({
  name: "",
  email: useremail.value,
  password: "",
});

const resetUserData = () => {
  user.value = {
    name: "",
    email: useremail.value,
    password: "",
  };
};

// console.log(user.value);

// 登入註冊切換值
const chooseType = ref<boolean>(true);

// 錯誤訊息
const errorMsg = ref<string>("預設錯誤訊息");

// 錯誤值
const haveError = ref<boolean>(false);

// 獲取所有使用者
const getUser = async () => {
  try {
    const res = await service.get("/users/userlist");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// 確認帳號是否存在資料庫
const checkUser = async () => {
  //調用獲取所有使用者的方法
  const res = await getUser();
  // 比對是否有此帳號
  // console.log(res);
  user.value.name = username.value;
  user.value.password = userpassword.value;
  // console.log(user.value);
  const checkUser = res.find((item: any) => {
    return item.name == user.value.name;
  });

  // 回傳是否有此帳號
  return checkUser;
};

// 註冊
const register = async () => {
  try {
    // 調用確認帳號是否存在資料庫的函式
    const check = await checkUser();
    // 返回值判斷是否可以註冊
    if (check) {
      // alert("帳號已存在");
      errorMsg.value = "帳號已存在";
      haveError.value = true;
    } else {
      // 調用新增使用者的api
      const res = await service.post(`/users/${user.value.name}`, user.value);
      // console.log("成功創建新使用者", res.status);
      alert("註冊成功");
      localStorage.setItem("token", JSON.stringify(user.value));
      haveError.value = false;
      router.push("/gamelobby");
    }
  } catch (err) {
    // console.log(err);
    // alert("帳號或密碼格式有誤");
    errorMsg.value = "帳號或密碼格式有誤";
    haveError.value = true;
  }
};

// 登入
const login = async () => {
  try {
    // 確認帳號是否存在資料庫
    const check = await checkUser();
    // 返回值判斷是否可以登入
    if (check && check.password == userpassword.value) {
      // alert("登入成功");
      localStorage.setItem("token", JSON.stringify(user.value));
      haveError.value = false;
      router.push("/gamelobby");
    } else {
      errorMsg.value = "帳密錯誤或無使用者";
      // alert("帳密錯誤或無使用者");
      haveError.value = true;
    }
  } catch (err) {
    // console.log(err);
  }
};

// 選擇註冊或登入
const choosemethod = async () => {
  console.log("執行");

  if (chooseType.value) {
    await register();
    resetUserData();
  } else {
    await login();
    resetUserData();
  }
};
</script>

<template>
  <div class="msg-box">
    <div class="msg-box-content">這是訊息</div>
    <button class="msg-box-btn">確認</button>
  </div>
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
              type="password"
              text=""
              v-model="userpassword"
              placeholder="請輸入密碼"
            />
          </div>
        </div>
        <p class="login-errormsg" :style="{ opacity: !haveError ? '0' : '1' }">
          {{ errorMsg }}
        </p>
        <button class="login-btn" @click="choosemethod">GO</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.msg-box {
  height: 80px;
  position: absolute;
  top: 5%;
  left: 50%;

  transform: translate(-50%);
  box-shadow: 0 0 5px 0 black;
  border-radius: 8px;
  background-color: white;
  // display: flex;
  display: none;
  justify-content: space-evenly;
  align-content: center;
  flex-direction: column;
  .msg-box-content {
    width: 100%;
    text-align: center;
    line-height: 40px;
  }
  .msg-box-btn {
    width: 150px;
    margin: auto;
  }
}

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
