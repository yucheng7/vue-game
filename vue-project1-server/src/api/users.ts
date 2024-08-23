import { log } from 'console';
import express, { Request, Response, Application, Router } from 'express';
import mongoose from 'mongoose';
const url: string = "mongodb+srv://aa102133395:R3V0a7AqqkL4MoaK@cluster0.vunkd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(url, {})
.then((res) => {
    console.log("已連線到資料庫");
    
})
.catch((err) => {
    console.log(err);
    
})



const userRoutes: Router = express.Router();

userRoutes.get('/',(req: Request, res: Response) => {
    res.json('this is users');    
     
})

userRoutes.get('/login',(req: Request, res: Response) => {
    res.json('this is login');
})

userRoutes.get('/register',(req: Request, res: Response) => {
    res.json('this is register');
})

export default userRoutes