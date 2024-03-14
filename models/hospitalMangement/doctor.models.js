import mongoose from "mongoose";

const HospitalHours = new mongoose.Schema({
  hospitalName: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  hours: {
    type: Number,
    required: true,
  },
});

const DoctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experienceInYear: {
      type: Number,
      default: 0,
      required: true,
    },
    workInHospitals: [
      {
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
    hospitalHours: [HospitalHours],
  },
  { timestamps: true }
);

export const Doctor = mongoose.model("Doctor", DoctorSchema);
