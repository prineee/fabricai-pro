// src/pages/Costing.tsx

export default function Costing() {
    return (
      <div className="p-10">
        <h1 className="text-5xl font-black mb-4">
          AI Costing Engine
        </h1>
  
        <p className="text-slate-500 text-xl mb-10">
          AI apparel costing &
          profitability analysis.
        </p>
  
        <div className="bg-white rounded-3xl border p-10 shadow-sm">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="font-bold text-lg">
                Fabric Cost
              </label>
  
              <input
                placeholder="₹220"
                className="w-full mt-3 border rounded-2xl p-4"
              />
            </div>
  
            <div>
              <label className="font-bold text-lg">
                CM Cost
              </label>
  
              <input
                placeholder="₹48"
                className="w-full mt-3 border rounded-2xl p-4"
              />
            </div>
  
            <div>
              <label className="font-bold text-lg">
                Trim Cost
              </label>
  
              <input
                placeholder="₹22"
                className="w-full mt-3 border rounded-2xl p-4"
              />
            </div>
  
            <div>
              <label className="font-bold text-lg">
                Quantity
              </label>
  
              <input
                placeholder="1000"
                className="w-full mt-3 border rounded-2xl p-4"
              />
            </div>
          </div>
  
          <button className="mt-10 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl font-bold text-xl">
            Generate AI Costing
          </button>
  
          <div className="mt-10 bg-slate-50 rounded-3xl p-8">
            <h2 className="text-3xl font-black mb-6">
              AI Costing Results
            </h2>
  
            <div className="space-y-4 text-lg">
              <p>
                Fabric Cost:
                ₹2,20,000
              </p>
  
              <p>
                CM Cost:
                ₹48,000
              </p>
  
              <p>
                Trim Cost:
                ₹22,000
              </p>
  
              <p>
                Total Cost:
                ₹2,90,000
              </p>
  
              <p>
                Cost/Piece:
                ₹290
              </p>
  
              <p>
                Suggested FOB:
                ₹420
              </p>
  
              <p>
                Estimated Profit:
                ₹130/Piece
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }