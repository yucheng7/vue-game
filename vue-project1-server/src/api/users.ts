import express, { Request, Response, Application, Router } from 'express';


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