import mongoose from "mongoose";

const MedicineDescriptionSchema = new mongoose.Schema({
  medicineName: {
    type: String,
    required: true,
  },
  medicineContent: {
    type: String,
    required: true,
  },
  numberOfTablets: {
    type: Number,
    required: true,
  },
});

const Medical_Record_Schema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    description: [MedicineDescriptionSchema],
  },
  { timestamps: true }
);

export const Medical_Record = mongoose.model(
  "Medical_Record_",
  Medical_Record_Schema
);
