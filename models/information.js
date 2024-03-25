import mongoose from "mongoose";

const { Schema, model } = mongoose;

const informationModel = new Schema(
  {
    login: { type: String },
    pubgId: { type: String },
    password: { type: String },
    socialSite: { type: String },
  },
  { timestamps: true }
);

export default model("players", informationModel);
