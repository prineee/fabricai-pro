import {
  collection,
  addDoc
} from "firebase/firestore";

import { db } from "../firebase";

export const saveSubscription = async (
  uid,
  plan,
  amount,
  currency,
  paymentId
) => {
  try {
    await addDoc(collection(db, "subscriptions"), {
      uid,
      plan,
      amount,
      currency,
      paymentId,
      status: "active",
      createdAt: new Date(),
      expiresAt: new Date(
        Date.now() + 30 * 24 * 60 * 60 * 1000
      )
    });

    console.log("Subscription Saved");
  } catch (error) {
    console.log(error);
  }
};