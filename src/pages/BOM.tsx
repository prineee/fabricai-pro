import { useState } from "react";

export default function BOM() {
  const [garment, setGarment] =
    useState("Shirt");

  const [result, setResult] =
    useState("");

  const generateBOM = () => {
    if (garment === "Shirt") {
      setResult(`
GARMENT: MEN'S FORMAL SHIRT

==================================

FABRIC:
• Cotton Poplin
• 1.84 meters
• Width: 58"
• GSM: 120

TRIMS:
• Main Label - 1 pc
• Size Label - 1 pc
• Care Label - 1 pc
• Buttons - 8 pcs
• Collar Fusing - 0.12 m
• Cuff Fusing - 0.08 m

THREAD:
• Sewing Thread - 120 meters

PACKING:
• Polybag - 1 pc
• Carton - 0.02 pc

AI NOTES:
• Recommended shrinkage allowance: 5%
• Recommended cutting wastage: 3%
• Suggested efficiency: 91%
      `);
    }

    if (garment === "Trouser") {
      setResult(`
GARMENT: MEN'S TROUSER

==================================

FABRIC:
• Cotton Twill
• 1.27 yards
• Width: 58"

TRIMS:
• Zipper - 1 pc
• Hook - 1 pc
• Waist Button - 1 pc
• Pocketing Fabric - 0.25 m
• Labels - 2 pcs

THREAD:
• Sewing Thread - 160 meters

PACKING:
• Polybag - 1 pc

AI NOTES:
• Add 5% allowance
• Recommended efficiency: 89%
      `);
    }

    if (garment === "Hoodie") {
      setResult(`
GARMENT: FLEECE HOODIE

==================================

FABRIC:
• Fleece Fabric
• 2.4 meters
• Width: 72"

TRIMS:
• Drawcord - 1.5 meters
• Eyelet - 2 pcs
• Rib - 0.45 m
• Main Label - 1 pc

THREAD:
• Overlock Thread - 200 meters

AI NOTES:
• Heavy GSM fabric
• Recommended allowance: 7%
      `);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-5xl font-black">
        AI BOM Generator
      </h1>

      <p className="text-slate-500 text-xl mt-3">
        Generate bill of materials
        instantly.
      </p>

      <div className="bg-white rounded-3xl border p-10 mt-10">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <label className="font-bold text-lg">
              Select Garment
            </label>

            <select
              value={garment}
              onChange={(e) =>
                setGarment(
                  e.target.value
                )
              }
              className="w-full mt-3 border rounded-2xl p-4"
            >
              <option>
                Shirt
              </option>

              <option>
                Trouser
              </option>

              <option>
                Hoodie
              </option>
            </select>
          </div>
        </div>

        <button
          onClick={generateBOM}
          className="mt-8 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl font-bold text-xl"
        >
          Generate AI BOM
        </button>

        {result && (
          <div className="mt-10 bg-slate-50 rounded-3xl p-8 border overflow-auto">
            <pre className="whitespace-pre-wrap text-lg leading-9">
              {result}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}