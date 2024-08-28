import Link from "next/link";

export default function AdminNavbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3 rounded">
      <Link className="text-white font-bold" href={"/"}>
       Admin Panel
      </Link>
      <Link className="bg-white p-2 rounded" href={"/addTopic"}>
        Add Student
      </Link>
    </nav>
  );
}
