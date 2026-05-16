// src/pages/Consumption.tsx

export default function Consumption() {
    return (
      <div className="p-10">
        <h1 className="text-5xl font-black mb-4">
          Consumption Engine
        </h1>
  
        <p className="text-slate-500 text-xl mb-10">
          AI fabric consumption
          calculator.
        </p>
  
        <div className="bg-white rounded-3xl border p-10 shadow-sm">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="font-bold text-lg">
                Garment Type
              </label>
  
              <select className="w-full mt-3 border rounded-2xl p-4">
                <option>Shirt</option>
                <option>Trouser</option>
                <option>Dress</option>
              </select>
            </div>
  
            <div>
              <label className="font-bold text-lg">
                Fabric Width
              </label>
  
              <input
                className="w-full mt-3 border rounded-2xl p-4"
                placeholder='58"'
              />
            </div>
  
            <div>
              <label className="font-bold text-lg">
                Quantity
              </label>
  
              <input
                className="w-full mt-3 border rounded-2xl p-4"
                placeholder="1000"
              />
            </div>
  
            <div>
              <label className="font-bold text-lg">
                Fabric Rate
              </label>
  
              <input
                className="w-full mt-3 border rounded-2xl p-4"
                placeholder="₹120"
              />
            </div>
          </div>
  
          <button className="mt-10 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl font-bold text-xl">
            Calculate AI Consumption
          </button>
  
          <div className="mt-10 bg-slate-50 rounded-3xl p-8">
            <h2 className="text-3xl font-black mb-5">
              AI Results
            </h2>
  
            <div className="space-y-4 text-lg">
              <p>
                Fabric Consumption:
                1.84 Meter/Piece
              </p>
  
              <p>
                Total Fabric:
                1840 Meter
              </p>
  
              <p>
                Fabric Cost:
                ₹2,17,120
              </p>
  
              <p>
                Remaining Fabric:
                160 Meter
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }