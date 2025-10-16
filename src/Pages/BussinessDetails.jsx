import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import BookingForm from "../components/BookingForm";

export default function BusinessDetails() {
  const { id } = useParams();
  const [biz, setBiz] = useState(null);

  useEffect(() => {
    const fetchBusiness = async () => {
      const docRef = doc(db, "businesses", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) setBiz(docSnap.data());
    };
    fetchBusiness();
  }, [id]);

  if (!biz) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4">
      <img src={biz.imageUrl} alt={biz.name} className="w-full h-60 object-cover rounded" />
      <h1 className="text-2xl font-bold mt-4">{biz.name}</h1>
      <p className="text-gray-600 mt-2">{biz.description}</p>
      <p className="mt-3 font-semibold">📍 {biz.location}</p>
      <BookingForm businessId={id} />
    </div>
  );
}
