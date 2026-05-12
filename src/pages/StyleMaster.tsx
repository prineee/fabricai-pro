import { useState } from "react";

import { Upload, Loader2 } from "lucide-react";

import { db } from "../lib/firebase";

import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

import {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_UPLOAD_PRESET,
} from "../lib/cloudinary";

export default function StyleMaster() {
  const [styleNumber, setStyleNumber] = useState("");
  const [buyer, setBuyer] = useState("");
  const [category, setCategory] = useState("T-Shirt");
  const [fabricType, setFabricType] = useState("");
  const [gsm, setGsm] = useState("");
  const [width, setWidth] = useState("");
  const [season, setSeason] = useState("Summer");
  const [gender, setGender] = useState("Men");
  const [notes, setNotes] = useState("");

  const [imageFile, setImageFile] = useState<any>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);

  function handleImage(e: any) {
    const file = e.target.files[0];

    if (!file) return;

    setImageFile(file);

    setImagePreview(URL.createObjectURL(file));
  }

  async function uploadToCloudinary(file: any) {
    const formData = new FormData();

    formData.append("file", file);

    formData.append(
      "upload_preset",
      CLOUDINARY_UPLOAD_PRESET
    );

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    return data.secure_url;
  }

  async function handleSave() {
    try {
      setLoading(true);

      let imageUrl = "";

      if (imageFile) {
        imageUrl = await uploadToCloudinary(imageFile);
      }

      await addDoc(collection(db, "styles"), {
        styleNumber,
        buyer,
        category,
        fabricType,
        gsm,
        width,
        season,
        gender,
        notes,
        imageUrl,
        createdAt: serverTimestamp(),
      });

      alert("Style Saved Successfully");

      setStyleNumber("");
      setBuyer("");
      setCategory("T-Shirt");
      setFabricType("");
      setGsm("");
      setWidth("");
      setSeason("Summer");
      setGender("Men");
      setNotes("");
      setImageFile(null);
      setImagePreview(null);

    } catch (error: any) {
      console.error(error);

      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          Style Master
        </h1>

        <p className="text-slate-400 mt-2">
          AI Powered Garment Style Management
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8">

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

          <h2 className="text-2xl font-bold mb-8">
            Style Details
          </h2>

          <div className="grid grid-cols-2 gap-5">

            <div>
              <label className="text-slate-400 text-sm">
                Style Number
              </label>

              <input
                type="text"
                value={styleNumber}
                onChange={(e) => setStyleNumber(e.target.value)}
                className="w-full mt-2 p-4 rounded-2xl bg-slate-800 border border-slate-700"
              />
            </div>

            <div>
              <label className="text-slate-400 text-sm">
                Buyer Name
              </label>

              <input
                type="text"
                value={buyer}
                onChange={(e) => setBuyer(e.target.value)}
                className="w-full mt-2 p-4 rounded-2xl bg-slate-800 border border-slate-700"
              />
            </div>

            <div>
              <label className="text-slate-400 text-sm">
                Garment Category
              </label>

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full mt-2 p-4 rounded-2xl bg-slate-800 border border-slate-700"
              >
                <option>T-Shirt</option>
                <option>Polo</option>
                <option>Hoodie</option>
                <option>Jogger</option>
                <option>Shirt</option>
              </select>
            </div>

            <div>
              <label className="text-slate-400 text-sm">
                Fabric Type
              </label>

              <input
                type="text"
                value={fabricType}
                onChange={(e) => setFabricType(e.target.value)}
                className="w-full mt-2 p-4 rounded-2xl bg-slate-800 border border-slate-700"
              />
            </div>

            <div>
              <label className="text-slate-400 text-sm">
                GSM
              </label>

              <input
                type="number"
                value={gsm}
                onChange={(e) => setGsm(e.target.value)}
                className="w-full mt-2 p-4 rounded-2xl bg-slate-800 border border-slate-700"
              />
            </div>

            <div>
              <label className="text-slate-400 text-sm">
                Fabric Width
              </label>

              <input
                type="number"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                className="w-full mt-2 p-4 rounded-2xl bg-slate-800 border border-slate-700"
              />
            </div>

          </div>

          <div className="mt-8">
            <label className="text-slate-400 text-sm">
              Notes
            </label>

            <textarea
              rows={5}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full mt-2 p-4 rounded-2xl bg-slate-800 border border-slate-700"
            />
          </div>

          <button
            onClick={handleSave}
            disabled={loading}
            className="mt-8 bg-emerald-500 hover:bg-emerald-600 px-8 py-4 rounded-2xl font-bold flex items-center gap-3"
          >
            {loading && (
              <Loader2 className="animate-spin" size={20} />
            )}

            {loading ? "Saving..." : "Save Style"}
          </button>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

          <h2 className="text-2xl font-bold mb-8">
            Style Image
          </h2>

          <label className="border-2 border-dashed border-slate-700 rounded-3xl h-[400px] flex flex-col items-center justify-center cursor-pointer hover:border-emerald-500 transition overflow-hidden">

            <input
              type="file"
              hidden
              onChange={handleImage}
            />

            {imagePreview ? (
              <img
                src={imagePreview}
                alt="preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <>
                <Upload
                  size={60}
                  className="text-slate-500 mb-4"
                />

                <p className="text-slate-400 text-lg">
                  Upload Garment Image
                </p>
              </>
            )}

          </label>

        </div>

      </div>
    </div>
  );
}