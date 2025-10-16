import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-blue-600 text-white shadow">
      <h1 className="text-xl font-bold">LocalConnect</h1>
      <nav className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/add">Add Business</Link>
      </nav>
    </header>
  );
}
