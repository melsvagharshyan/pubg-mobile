import mongoose from "mongoose";

const { Schema, model } = mongoose;

const informationModel = new Schema(
  {
    login: { type: String, required: true },
    pubgId: { type: Number },
    password: { type: String },
  },
  { timestamps: true }
);

export default model("players", informationModel);
