import { defineStore } from "pinia";
import { io } from "socket.io-client";
import { ref } from "vue";

interface Message {
    text: string;
    // ...其他字段
  }
  


export const useSocketStore = defineStore('socket', () => {
    const socket = io('http://localhost:3000');
    const messages = ref<Message[]>([]);

    // 接收訊息
    socket.on('messages', (msg: Message)=> {
        messages.value.push(msg);
    })

    // 發送訊息
    const sendMessage = (msg: string)=> {
        socket.emit('sendMessage', msg)
    }

    return { sendMessage, messages };
})