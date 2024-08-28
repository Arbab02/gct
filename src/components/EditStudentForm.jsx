"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditStudentForm({ id, name, email, phone, studentId, course }) {
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);
  const [newPhone, setNewPhone] = useState(phone);
  const [newStudentId, setNewStudentId] = useState(studentId);
  const [newCourse, setNewCourse] = useState(course);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/students/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newName, newEmail, newPhone, newStudentId, newCourse }),
      });

      if (!res.ok) {
        throw new Error("Failed to update student");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewName(e.target.value)}
        value={newName}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Student Name"
      />

      <input
        onChange={(e) => setNewEmail(e.target.value)}
        value={newEmail}
        className="border border-slate-500 px-8 py-2"
        type="email"
        placeholder="Student Email"
      />

      <input
        onChange={(e) => setNewPhone(e.target.value)}
        value={newPhone}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Student Phone"
      />

      <input
        onChange={(e) => setNewStudentId(e.target.value)}
        value={newStudentId}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Student ID"
      />

      <input
        onChange={(e) => setNewCourse(e.target.value)}
        value={newCourse}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Course"
      />

      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Update Student
      </button>
    </form>
  );
}
