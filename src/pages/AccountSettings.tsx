// src/pages/AccountSettings.tsx

export default function AccountSettings() {
    return (
      <div className="p-10">
        <h1 className="text-5xl font-black">
          Account Settings
        </h1>
  
        <p className="text-slate-500 text-xl mt-3">
          Configure your ERP account.
        </p>
  
        <div className="bg-white rounded-3xl border p-10 mt-10">
          <div className="space-y-8">
            <div>
              <label className="font-bold text-lg">
                Change Password
              </label>
  
              <input
                type="password"
                placeholder="New Password"
                className="w-full mt-3 border rounded-2xl p-4"
              />
            </div>
  
            <div>
              <label className="font-bold text-lg">
                Confirm Password
              </label>
  
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full mt-3 border rounded-2xl p-4"
              />
            </div>
  
            <div>
              <label className="font-bold text-lg">
                Language
              </label>
  
              <select className="w-full mt-3 border rounded-2xl p-4">
                <option>
                  English
                </option>
  
                <option>
                  Hindi
                </option>
              </select>
            </div>
  
            <div>
              <label className="font-bold text-lg">
                Theme
              </label>
  
              <select className="w-full mt-3 border rounded-2xl p-4">
                <option>
                  Light
                </option>
  
                <option>
                  Dark
                </option>
              </select>
            </div>
  
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl font-bold text-xl">
              Save Settings
            </button>
          </div>
        </div>
      </div>
    );
  }