import mongoose from "mongoose";

const HospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    timeFrom: {
      type: Number,
      required: true,
    },
    timeTo: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Hospital = mongoose.model("Hospital", HospitalSchema);
