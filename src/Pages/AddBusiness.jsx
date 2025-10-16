import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export default function AddBusiness() {
  const [form, setForm] = useState({
    name: "",
    category: "",
    location: "",
    description: "",
    imageUrl: ""
  });

  const handleSubmit = async e => {
    e.preventDefault();
    await addDoc(collection(db, "businesses"), form);
    alert("Business added!");
    setForm({ name: "", category: "", location: "", description: "", imageUrl: "" });
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add New Business</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(form).map(key => (
          <input
            key={key}
            className="block w-full border p-2 mb-2 rounded"
            placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
            value={form[key]}
            onChange={e => setForm({ ...form, [key]: e.target.value })}
          />
        ))}
        <button className="bg-blue-600 text-white py-2 px-4 rounded w-full hover:bg-blue-700">
          Save Business
        </button>
      </form>
    </div>
  );
}
