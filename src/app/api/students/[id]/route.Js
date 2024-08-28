import db from "../.././../../lib/mongoose.js";
import Student from '../../../model/student';
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newName: name, newEmail: email, newPhone: phone, newStudentId: studentId, newCourse: course } = await request.json();
  await db();
  await Student.findByIdAndUpdate(id, { name, email, phone, studentId, course });
  return NextResponse.json({ message: "Student updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await db();
  const student = await Student.findOne({ _id: id });
  return NextResponse.json({ student }, { status: 200 });
}
