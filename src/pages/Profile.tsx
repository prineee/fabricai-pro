// src/pages/Profile.tsx

export default function Profile() {
    return (
      <div className="p-10">
        <h1 className="text-5xl font-black">
          My Profile
        </h1>
  
        <p className="text-slate-500 text-xl mt-3">
          Manage your ERP profile.
        </p>
  
        <div className="bg-white rounded-3xl border p-10 mt-10">
          <div className="flex items-center gap-8">
            <div className="w-32 h-32 rounded-3xl bg-emerald-600 text-white flex items-center justify-center text-5xl font-black">
              N
            </div>
  
            <div>
              <h2 className="text-4xl font-black">
                Naveen Kumar
              </h2>
  
              <p className="text-slate-500 text-xl mt-2">
                Founder & Admin
              </p>
  
              <p className="text-slate-500 mt-2">
                naveen@fabricai.com
              </p>
            </div>
          </div>
  
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div>
              <label className="font-bold text-lg">
                Full Name
              </label>
  
              <input
                defaultValue="Naveen Kumar"
                className="w-full mt-3 border rounded-2xl p-4"
              />
            </div>
  
            <div>
              <label className="font-bold text-lg">
                Business Email
              </label>
  
              <input
                defaultValue="naveen@fabricai.com"
                className="w-full mt-3 border rounded-2xl p-4"
              />
            </div>
  
            <div>
              <label className="font-bold text-lg">
                Company
              </label>
  
              <input
                defaultValue="FabricAI Pro"
                className="w-full mt-3 border rounded-2xl p-4"
              />
            </div>
  
            <div>
              <label className="font-bold text-lg">
                Role
              </label>
  
              <input
                defaultValue="Administrator"
                className="w-full mt-3 border rounded-2xl p-4"
              />
            </div>
          </div>
  
          <button className="mt-10 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl font-bold text-xl">
            Save Profile
          </button>
        </div>
      </div>
    );
  }