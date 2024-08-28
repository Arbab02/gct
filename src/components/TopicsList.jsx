import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getStudents = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/students", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch students");
    }

    return await res.json();
  } catch (error) {
    console.log("Error loading students: ", error);
    return { students: [] }; // Return an empty array if there's an error
  }
};

export default async function StudentsList() {
  const { students = [] } = await getStudents(); // Default to an empty array if undefined

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {students.map((s) => (
        <div
          key={s._id}
          className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between"
        >
          <div className="mb-4">
            <h2 className="font-bold text-xl mb-2 text-gray-800">{s.name}</h2>
            <p className="text-gray-600"><strong>Email:</strong> {s.email}</p>
            <p className="text-gray-600"><strong>Phone:</strong> {s.phone}</p>
            <p className="text-gray-600"><strong>Student ID:</strong> {s.studentId}</p>
            <p className="text-gray-600"><strong>Course:</strong> {s.course}</p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <Link href={`/editStudent/${s._id}`}>
              <HiPencilAlt size={24} className="text-blue-500 cursor-pointer" />
            </Link>
            <RemoveBtn id={s._id} />
          </div>
        </div>
      ))}
    </div>
  );
}

