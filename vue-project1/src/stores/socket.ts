import { defineStore } from "pinia";
import { io } from "socket.io-client";
import { ref } from "vue";

interface Message {
    text: string;
    // ...其他字段
  }
  


export const useSocketStore = defineStore('socket', () => {
    const socket = io('http://localhost:3000');
    const messages = ref<string[]>([]);

    socket.on('connect', () => {
        console.log('連接成功');
    });

    // 接收伺服器messages事件
    socket.on('messages', (msg: string)=> {
        messages.value.push(msg);
        
    })

    // 前端發送sendMessage事件
    const sendMessage = (msg: string)=> {
        socket.emit('sendMessage', msg)
        console.log(2);
    }

    return { sendMessage, messages };
})