import {
  collection,
  addDoc
} from "firebase/firestore";

import { db } from "../firebase";

export const addTemplates = async () => {
  const templates = [
    {
      title: "Facebook Ad",
      category: "ads",
      prompt:
        "Write a high converting Facebook ad for {business}"
    },

    {
      title: "Blog Generator",
      category: "blog",
      prompt:
        "Write a professional SEO blog about {topic}"
    },

    {
      title: "Email Generator",
      category: "email",
      prompt:
        "Write a sales email for {business}"
    },

    {
      title: "Landing Page",
      category: "landing",
      prompt:
        "Create a landing page copy for {product}"
    }
  ];

  try {
    for (const item of templates) {
      await addDoc(
        collection(db, "templates"),
        item
      );
    }

    console.log("Templates Added");
  } catch (error) {
    console.log(error);
  }
};