import mongoose from "mongoose";

const urlSchema = mongoose.Schema({
  longUrl: {
    type: String,
    required: true,
  },
  shortID: {
    type: String,
    required: true,
    unique: true,
  },
  clicks: {
    type: Number,
    default: 0,
  },
},{timestamps: true});

export const Url = mongoose.model("Url", urlSchema);
