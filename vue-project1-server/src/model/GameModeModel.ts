import mongoose, { Document, Schema } from "mongoose";

interface Ques extends Document {
  textArr: string[];
}

const quesSchema = new Schema({
  textArr: { type: [String], required: true },
});

const QuesModel = mongoose.model<Ques>("fake_questions", quesSchema);

export default QuesModel;
