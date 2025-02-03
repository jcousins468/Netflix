import { useState, useEffect, useContext } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { FirebaseContext } from "../context/firebase";

export function useContent(target) {
  const [content, setContent] = useState([]);
  const { firebaseApp } = useContext(FirebaseContext);
  const firestore = getFirestore(firebaseApp);

  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(collection(firestore, target));
      const allContent = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        docId: doc.id,
      }));
      setContent(allContent);
    }

    fetchData();
  }, [firestore, target]);

  return { [target]: content };
}
