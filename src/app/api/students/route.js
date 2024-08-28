import Student from '../../api/../../model/student.js';
import db from '../../api/../../lib/mongoose';
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email, phone, studentId, course } = await request.json();
  await db();
  await Student.create({ name, email, phone, studentId, course });
  return NextResponse.json({ message: "Student Registered" }, { status: 201 });
}

export async function GET() {
  await db();
  const students = await Student.find();
  return NextResponse.json({ students });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await db();
  await Student.findByIdAndDelete(id);
  return NextResponse.json({ message: "Student deleted" }, { status: 200 });
}
