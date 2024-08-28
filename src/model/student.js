import mongoose, { Schema } from "mongoose";

const studentSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    studentId: { type: String, required: true, unique: true },
    course: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.models.Student || mongoose.model("Student", studentSchema);

export default Student;
