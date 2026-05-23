import {
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";

import { db } from "../firebase";

export async function createUserProfile(
  uid: string,
  data: any
) {
  await setDoc(doc(db, "users", uid), data);
}

export async function getUserProfile(
  uid: string
) {
  const ref = doc(db, "users", uid);

  const snap = await getDoc(ref);

  return snap.data();
}