import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export default function BookingForm({ businessId }) {
  const [form, setForm] = useState({ name: "", date: "", time: "" });

  const handleSubmit = async e => {
    e.preventDefault();
    await addDoc(collection(db, "bookings"), { ...form, businessId });
    alert("Booking confirmed!");
    setForm({ name: "", date: "", time: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 border-t pt-4">
      <h2 className="text-xl font-bold mb-2">Book an Appointment</h2>
      <input
        className="block w-full border p-2 mb-2 rounded"
        placeholder="Your Name"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
      />
      <input
        type="date"
        className="block w-full border p-2 mb-2 rounded"
        value={form.date}
        onChange={e => setForm({ ...form, date: e.target.value })}
      />
      <input
        type="time"
        className="block w-full border p-2 mb-3 rounded"
        value={form.time}
        onChange={e => setForm({ ...form, time: e.target.value })}
      />
      <button className="bg-blue-600 text-white py-2 px-4 rounded w-full hover:bg-blue-700">
        Book Now
      </button>
    </form>
  );
}
