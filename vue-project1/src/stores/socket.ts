import service from "@/utils/request";
import { defineStore } from "pinia";
import { io } from "socket.io-client";
import { ref } from "vue";

interface Message {
  text: string;
  // ...其他字段
}

interface userMsg {
  name: string;
  msg: string;
  time: string;
}

export const useSocketStore = defineStore("socket", () => {
  const socket = io("http://localhost:3000");
  const messages = ref<userMsg[]>([]);

  socket.on("connect", () => {
    console.log("連接成功");
  });

  // 前端發送sendMessage事件
  const sendMessage = (msg: userMsg) => {
    socket.emit("sendMessage", msg);
    console.log(2);
  };
  // 接收伺服器messages事件
  socket.on("messages", (msg: userMsg) => {
    try {
      const res = service.post("users/savemsgs", msg);
      console.log(res);
      
    } catch (err) {
      console.log(err);
    }
    messages.value.push(msg);
    console.log(4);
  });

  return { sendMessage, messages };
});
