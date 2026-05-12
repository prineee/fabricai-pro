// src/pages/Settings.tsx

export default function Settings() {
    return (
      <div className="p-10">
        <h1 className="text-5xl font-black mb-4">
          Settings
        </h1>
  
        <p className="text-slate-500 text-xl mb-10">
          Manage FabricAI Pro
          configuration.
        </p>
  
        <div className="bg-white rounded-3xl border p-10 shadow-sm space-y-8">
          <div>
            <label className="font-bold text-lg">
              Company Name
            </label>
  
            <input
              className="w-full mt-3 border rounded-2xl p-4"
              placeholder="FabricAI"
            />
          </div>
  
          <div>
            <label className="font-bold text-lg">
              Factory Location
            </label>
  
            <input
              className="w-full mt-3 border rounded-2xl p-4"
              placeholder="India"
            />
          </div>
  
          <div>
            <label className="font-bold text-lg">
              Currency
            </label>
  
            <select className="w-full mt-3 border rounded-2xl p-4">
              <option>INR ₹</option>
  
              <option>USD $</option>
            </select>
          </div>
  
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl font-bold text-xl">
            Save Settings
          </button>
        </div>
      </div>
    );
  }