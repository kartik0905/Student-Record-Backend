import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    studentId: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      required: true,
    },
    department: {
      type: String,
      trim: true,
      required: true,
    },
    marks: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    gender:{
        type:String,
        enum:["Male","Female","Others"]
    }
  },
  { timestamps: true }
);

export const Student = mongoose.model("Student",studentSchema);