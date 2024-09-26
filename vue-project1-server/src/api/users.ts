import express, { Request, Response, Application, Router } from "express";
import UserModel from "../model/UserModel";
import { log } from "console";

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
    const data = req.body.data;
    const msgItem = {
      name: data.name,
      msg: data.msg,
      time: data.time,
    };

    // 如果沒有訊息陣列則新增一個空陣列
    const userdata = await UserModel.findOne({ name: msgItem.name });
    if (!userdata?.msgArr) {
      const res = await UserModel.findOneAndUpdate(
        { name: msgItem.name },
        { $set: { msgsArr: [] } },
        { new: true }
      );
      console.log("新增訊息陣列結束", res);
    }
    
    // 把訊息加入訊息陣列
    const postRes = await UserModel.findOneAndUpdate(
      { name: msgItem.name },
      { $push: { msgsArr: msgItem } },
      { new: true }
    );
    console.log("執行結束", postRes);
  } catch (err) {
    console.log("更新使用者資料失敗", err);
    res.status(500).json("更新使用者資料失敗");
  }
});

router.get("/getusermsgs");

export default router;
