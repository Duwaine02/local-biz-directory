import { Link } from "react-router-dom";

export default function BusinessCard({ biz }) {
  return (
    <div className="border rounded-lg shadow p-3 hover:shadow-lg transition">
      <img src={biz.imageUrl} alt={biz.name} className="w-full h-40 object-cover rounded" />
      <h2 className="text-lg font-bold mt-2">{biz.name}</h2>
      <p className="text-sm text-gray-500">{biz.category}</p>
      <p className="text-sm mt-1">📍 {biz.location}</p>
      <Link
        to={`/business/${biz.id}`}
        className="block mt-3 text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        View Details
      </Link>
    </div>
  );
}
