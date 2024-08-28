import EditStudentForm from "../../../components/EditStudentForm.jsx";

const getStudentById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/students/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch student");
    }

    return await res.json();
  } catch (error) {
    console.log(error);
    return null; // Return null or an appropriate fallback value
  }
};

export default async function EditStudent({ params }) {
  const { id } = params;
  const student = await getStudentById(id);

  if (!student) {
    return <div>Error loading student data</div>; // Add error handling UI if student data is missing
  }

  const { name, email, phone, studentId, course } = student;

  return (
    <EditStudentForm
      id={id}
      name={name}
      email={email}
      phone={phone}
      studentId={studentId}
      course={course}
    />
  );
}
