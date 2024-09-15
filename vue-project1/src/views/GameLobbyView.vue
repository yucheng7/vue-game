<script setup lang="ts">
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { MTLLoader } from "three/addons/loaders/MTLLoader.js";

import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

const router = useRouter();
const goback = () => {
  router.push("/");
}
//創建場景
const scene = new THREE.Scene();
//創建相機
const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
//創建渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

const userinfobox = ref();

//創建模型
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x8fbc8f });
const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

camera.position.y = 1;
camera.position.z = 3;

//畫模型的邊
const edges = new THREE.EdgesGeometry(geometry);
const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 }); // 邊的顏色
const line = new THREE.LineSegments(edges, lineMaterial);
// scene.add(line);

//控制器
const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;

//模型加載器
const loader = new GLTFLoader();
loader.load(
  "../public/SheenChair.glb",
  function (gltf) {
    scene.add(gltf.scene);
  },
  // called when loading is in progresses
  function (xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  // called when loading has errors
  function (error) {
    console.log("An error happened");
  }
);

//增加環境光
const light = new THREE.AmbientLight(0x404040, 100);
scene.add(light);

const environment = new RoomEnvironment(renderer);
const pmremGenerator = new THREE.PMREMGenerator(renderer);

onMounted(() => {
  userinfobox.value = document.getElementById("user-infobox");
  userinfobox.value.appendChild(renderer.domElement);
  //   console.log(userinfobox.value);
  renderer.domElement.style.width = "100%";
  renderer.domElement.style.height = "100%";
  renderer.setClearColor(0xffffff);

  animate();
});

//模型動畫
function animate() {
  requestAnimationFrame(animate);
  //   cube.rotation.x += 0.01;
  //   cube.rotation.y += 0.01;
  //   line.rotation.x += 0.01;
  //   line.rotation.y += 0.01;
  renderer.render(scene, camera);
}

//重置模型
function resetModel() {
  //   controls.reset();
}

function toGamemode() {
  router.push("/gamemode");
}

function toUserspace() {
  router.push("/userspace");
}

function toUserrank() {
  router.push("/userrank");
}

function toPointshop() {
  router.push("/pointshop");
}

function toGamesetting() {
  router.push("/gamesetting");
}

function toGamechat() {
  router.push("/gamechat");
}
</script>

<template>
  <div class="container">
    <div class="back-btn" @click="goback">回上一頁</div>
    <div class="main-contentbox">
      <div class="user-infobox" id="user-infobox"></div>
      <div class="game-systembox">
        <button class="gamemode" @click="toGamemode">遊戲模式</button>
        <button class="player-backpack" @click="toUserspace">角色空間</button>
        <button class="game-shop" @click="toPointshop">點數商城</button>
        <button class="player-rank" @click="toUserrank">遊戲排行</button>
        <button class="game-setting" @click="toGamesetting">遊戲設定</button>
        <button class="game-chat" @click="toGamechat">好友聊天</button>
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
    width: 90%;
    height: 95%;
    // background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    // padding: 15px;
    .user-infobox {
      width: 100%;
      height: 400px;
      background-color: white;
      border-radius: 10px;
      margin-bottom: 15px;
      text-align: center;
      line-height: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
      //   box-shadow: 3px 3px 3px 0px red;
      overflow: hidden;
    }
    .game-systembox {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      //   overflow-y: auto;
      // background-color: blanchedalmond;
      button {
        min-width: 48%;
        height: 50px;
        border-radius: 10px;
        background-color: white;
        font-weight: bold;
        color: black;
        font-size: 1.2em;
        border: none;
        margin-bottom: 10px;
        // box-sizing: border-box;
        // border: 1px solid black;
        // box-shadow: 3px 3px 3px 0px red;
      }
    }
  }
}
</style>
