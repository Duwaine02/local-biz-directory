import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import BusinessCard from "../components/BusinessCard";

export default function Home() {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    const fetchBusinesses = async () => {
      const querySnapshot = await getDocs(collection(db, "businesses"));
      setBusinesses(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchBusinesses();
  }, []);

  return (
    <div className="p-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {businesses.map(biz => <BusinessCard key={biz.id} biz={biz} />)}
    </div>
  );
}
