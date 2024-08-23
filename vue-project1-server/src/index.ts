import express, { Request, Response, Application } from 'express';
import cors from 'cors';
import userRoutes from './api/users';

const app: Application = express();
const port = 3000;

const corsOptions = {
    origin: 'http://example.com', // 允許的來源域名
    methods: ['GET', 'POST'], // 允許的 HTTP 方法
    allowedHeaders: ['Content-Type', 'Authorization'], // 允許的標頭
    credentials: true // 是否允許使用憑證（如 Cookies）
};

// 設定跨域
app.use(cors());
// 設定解析 JSON 資料的中間件
app.use(express.json());

//啟動伺服器
app.get('/',(req: Request, res: Response) => {
    res.send('server is running');
})

//監聽端口
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.use('/api/users', userRoutes);

export default app;