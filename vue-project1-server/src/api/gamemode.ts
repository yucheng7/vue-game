import express, { Request, Response, Application, Router } from "express";
import QuesModel from "../model/GameModeModel";

// 設定路由
const router = Router();

router.get("/normalmode", async(req: Request, res: Response) => {
    try{
        const ques = await QuesModel.find();
        console.log(ques);
        res.json(ques);
    }catch(err){
        console.log(err);
        
    }
})

export default router;