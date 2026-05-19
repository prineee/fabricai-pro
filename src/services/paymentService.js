import {
  collection,
  addDoc
} from "firebase/firestore";

import { db } from "../firebase";

export const savePayment = async (
  uid,
  paymentId,
  orderId,
  amount,
  currency
) => {
  try {
    await addDoc(collection(db, "payments"), {
      uid,
      paymentId,
      orderId,
      amount,
      currency,
      status: "success",
      createdAt: new Date()
    });

    console.log("Payment Saved");
  } catch (error) {
    console.log(error);
  }
};