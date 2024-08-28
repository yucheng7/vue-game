import mongoose from "mongoose";

// 連接MongoDB Atlas
const connectdb = async (database: string) => {
  try{
  const uri = `mongodb+srv://aa102133395:R3V0a7AqqkL4MoaK@cluster0.vunkd.mongodb.net/${database}?retryWrites=true&w=majority&appName=Cluster0`;
  await mongoose.connect(uri, {});
  console.log("連接成功");
}catch(err){
  console.log(err);
  console.log("連接失敗");
  
}
};
export default connectdb;
