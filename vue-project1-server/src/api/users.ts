import express, { Request, Response, Application, Router } from "express";
import UserModel from "../model/UserModel";

// 設定路由
const router = Router();

// 獲取所有使用者資料
router.get("/userlist", async (req: Request, res: Response) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (err) {
    console.log("所有使用者資料獲取失敗", err);
  }
});

// 獲取特定使用者資料
// router.get("/:username", async (req: Request, res: Response) => {
//   try {
//     const user = await UserModel.findById(req.params.username);
//     res.status(200).json(user);
//     console.log("獲取特定使用者資料成功", res);
//   } catch (err) {
//     console.log("獲取特定使用者資料失敗", err);
//   }
// });

// 新增使用者資料
// router.post("/:username", async (req: Request, res: Response) => {
//   try {
//     const users = new UserModel(req.body);
//     await users.save();
//     res.status(201).json(users);
//     console.log("新增使用者資料成功");
//   } catch (err) {
//     console.log("新增使用者資料失敗", err);
//   }
// });

// 刪除特定使用者資料
// router.delete("/：username", async (req: Request, res: Response) => {
//   try {
//     const user = await UserModel.findById(req.params.userid);
//     await user?.deleteOne();
//     res.status(204).json();
//   } catch (err) {
//     console.log("刪除特定使用者資料失敗", err);
//   }
// });

// 更新特定使用者資料
// router.put("/:userid", async (req: Request, res: Response) => {
//   try {
//     const user = await UserModel.findByIdAndUpdate(
//       req.params.userid,
//       req.body,
//       { new: true }
//     );

//     if (user) {
//       res.json(user);
//     } else {
//       res.status(404).json();
//     }
//   } catch (err) {
//     console.log("更新特定使用者資料失敗", err);
//   }
// });

// 更改特定使用者資料
// router.put("/:userid", async (req: Request, res: Response) => {
//   try {
//     const user = await UserModel.findById(req.params.userid);
//   } catch (err) {
//     console.log("更改特定使用者資料失敗", err);
//   }
// });

// 把聊天訊息存入特定使用者

router.post("/savemsgs", async (req: Request, res: Response) => {
  try {
    const name = req.body.name;
    const user = await UserModel.find({ name: name });
    console.log("獲得特定使用者成功", user);
    if (user) {
      const userdata = await UserModel.findOneAndUpdate(
        {
          name: name
        },
        {
          $push: {
            msgArr: req.body
          }
        },{
          new: true
        }
      );
      console.log('執行結束',userdata);
      
    } else {
      console.log("找不到用户");
      res.status(404).json("找不到用户");
    }
  } catch (err) {
    console.log("把聊天訊息存入特定使用者失敗", err);
  }
});

router.get("/getusermsgs");

export default router;
