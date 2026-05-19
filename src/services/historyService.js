import {
  collection,
  addDoc
} from "firebase/firestore";

import { db } from "../firebase";

export const saveAIHistory = async (
  uid,
  type,
  prompt,
  result
) => {
  try {
    await addDoc(collection(db, "ai_history"), {
      uid,
      type,
      prompt,
      result,
      createdAt: new Date()
    });

    console.log("AI History Saved");
  } catch (error) {
    console.log(error);
  }
};