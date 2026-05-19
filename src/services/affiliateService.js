import {
  collection,
  addDoc
} from "firebase/firestore";

import { db } from "../firebase";

export const createAffiliate = async (
  uid,
  email
) => {
  try {
    await addDoc(collection(db, "affiliates"), {
      uid,
      email,
      affiliateCode:
        "FAB" + Math.floor(Math.random() * 100000),
      totalSales: 0,
      totalCommission: 0,
      clicks: 0,
      conversions: 0,
      createdAt: new Date()
    });

    console.log("Affiliate Created");
  } catch (error) {
    console.log(error);
  }
};