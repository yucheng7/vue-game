import mongoose, { Document, Schema } from "mongoose";

interface User extends Document {
  name: string;
  email: string;
  password: string;
  msgArr: string[];
}

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  msgsArr: [{type: Object}],
});

const UserModel = mongoose.model<User>("users", userSchema);

export default UserModel;
