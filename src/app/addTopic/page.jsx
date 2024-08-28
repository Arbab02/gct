"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from 'framer-motion';

export default function AddStudent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [studentId, setStudentId] = useState("");
  const [course, setCourse] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !studentId || !course) {
      alert("All fields are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/students", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, studentId, course }),
      });

      if (res.ok) {
        router.push("/admin");
      } else {
        throw new Error("Failed to register student");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-[30rem] m-auto py-5">
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        className="py-2 rounded-md border-2 border-[green] bg-[transparent] text-[green] w-full px-4"
        type="text"
        placeholder="Student Name"
      />

      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className="py-2 rounded-md border-2 border-[green] bg-[transparent] text-[green] w-full px-4"
        type="email"
        placeholder="Student Email"
      />

      <input
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
        className="py-2 rounded-md border-2 border-[green] bg-[transparent] text-[green] w-full px-4"
        type="text"
        placeholder="Student Phone"
      />

      <input
        onChange={(e) => setStudentId(e.target.value)}
        value={studentId}
        className="py-2 rounded-md border-2 border-[green] bg-[transparent] text-[green] w-full px-4"
        type="text"
        placeholder="Student ID"
      />

      <input
        onChange={(e) => setCourse(e.target.value)}
        value={course}
        className="py-2 rounded-md border-2 border-[green] bg-[transparent] text-[green] w-full px-4"
        type="text"
        placeholder="Course"
      />

      <button
        type="submit"
        className="py-2 rounded bg-[green] font-bold text-white px-8 w-fit block m-auto"
      >
        Register
      </button>
    </form>
  );
}
