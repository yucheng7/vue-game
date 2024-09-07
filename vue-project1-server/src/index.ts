import express, { Request, Response, Application } from "express";
import cors from "cors";
import connectdb from "./db";
import { createServer } from "http";
import { Server } from "socket.io";

import userRouter from "./api/users";
import gamemodeRouter from "./api/gamemode";


const app: Application = express();
const port = 3000;

const corsOptions = {
  origin: "http://localhost:5173", // 允許的來源域名
  methods: ["GET", "POST", "PUT", "DELETE"], // 允許的 HTTP 方法
  // allowedHeaders: ['Content-Type', 'Authorization'], // 允許的標頭
  // credentials: true // 是否允許使用憑證（如 Cookies）
};

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173", // 對應你的前端 URL
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});

// 設定跨域
app.use(cors(corsOptions));
// 設定解析 JSON 資料的中間件
app.use(express.json());

// 設定userApi路由
app.use("/api/users", userRouter);

// 設定gamemodeApi路由
app.use("/api/gamemode", gamemodeRouter);

//啟動伺服器
app.get("/", (req: Request, res: Response) => {
  res.send("伺服器正常運行中");
});

//監聽端口
// app.listen(port, () => {
//   console.log(`伺服器正常運行在http://localhost:${port}`);
// });

// 使用 HTTP 伺服器監聽端口
httpServer.listen(port, () => {
  console.log(`伺服器正常運行在 http://localhost:${port}`);
});

// 連接資料庫
const databasename = "basic_data";
connectdb(databasename);

export default app;
