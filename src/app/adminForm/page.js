"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminRegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        router.push("/admin");
      } else {
        alert("Registration failed");
      }
    } catch (error) {
      console.error("Error registering admin:", error);
    }
  };

  return (
    <form onSubmit={handleRegister} className="flex flex-col gap-3">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        className="border p-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="border p-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2">
        Register
      </button>
    </form>
  );
}
