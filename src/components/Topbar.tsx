import {
    Bell,
    Search,
    ChevronDown,
    User,
    Settings,
    LogOut,
    CreditCard,
  } from "lucide-react";
  
  import { useState } from "react";
  
  type Props = {
    setActivePage: (
      value: string
    ) => void;
  };
  
  export default function Topbar({
    setActivePage,
  }: Props) {
    const [open, setOpen] =
      useState(false);
  
    return (
      <div className="h-24 bg-white border-b px-10 flex items-center justify-between relative">
        {/* LEFT */}
  
        <div>
          <h1 className="text-4xl font-black text-slate-900">
            FabricAI Pro
          </h1>
  
          <p className="text-slate-500">
            AI Apparel ERP Platform
          </p>
        </div>
  
        {/* RIGHT */}
  
        <div className="flex items-center gap-5 relative">
          {/* SEARCH */}
  
          <div className="bg-slate-100 px-5 py-3 rounded-2xl flex items-center gap-3">
            <Search
              size={20}
              className="text-slate-400"
            />
  
            <input
              placeholder="Search ERP..."
              className="bg-transparent outline-none w-56"
            />
          </div>
  
          {/* NOTIFICATION */}
  
          <button className="w-14 h-14 rounded-2xl bg-slate-100 hover:bg-slate-200 transition-all flex items-center justify-center">
            <Bell size={22} />
          </button>
  
          {/* USER */}
  
          <div className="relative">
            <button
              onClick={() =>
                setOpen(!open)
              }
              className="flex items-center gap-4 bg-slate-100 hover:bg-slate-200 transition-all px-4 py-2 rounded-2xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-xl font-black">
                N
              </div>
  
              <div className="hidden md:block text-left">
                <h3 className="font-bold text-slate-900">
                  Naveen Kumar
                </h3>
  
                <p className="text-sm text-slate-500">
                  Admin
                </p>
              </div>
  
              <ChevronDown
                size={20}
                className={`transition-all ${
                  open
                    ? "rotate-180"
                    : ""
                }`}
              />
            </button>
  
            {/* DROPDOWN */}
  
            {open && (
              <div className="absolute right-0 top-20 w-80 bg-white border shadow-xl rounded-3xl overflow-hidden z-50">
                {/* HEADER */}
  
                <div className="p-6 border-b bg-slate-50">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-2xl font-black">
                      N
                    </div>
  
                    <div>
                      <h2 className="text-xl font-black">
                        Naveen Kumar
                      </h2>
  
                      <p className="text-slate-500">
                        naveen@fabricai.com
                      </p>
                    </div>
                  </div>
                </div>
  
                {/* PROFILE */}
  
                <button
                  onClick={() => {
                    setActivePage(
                      "Profile"
                    );
  
                    setOpen(false);
                  }}
                  className="w-full flex items-center gap-4 px-5 py-4 hover:bg-slate-100 transition-all"
                >
                  <User size={20} />
  
                  <span className="font-semibold">
                    My Profile
                  </span>
                </button>
  
                {/* SUBSCRIPTION */}
  
                <button
                  onClick={() => {
                    setActivePage(
                      "Subscription"
                    );
  
                    setOpen(false);
                  }}
                  className="w-full flex items-center gap-4 px-5 py-4 hover:bg-slate-100 transition-all"
                >
                  <CreditCard
                    size={20}
                  />
  
                  <span className="font-semibold">
                    Subscription
                  </span>
                </button>
  
                {/* ACCOUNT SETTINGS */}
  
                <button
                  onClick={() => {
                    setActivePage(
                      "Account Settings"
                    );
  
                    setOpen(false);
                  }}
                  className="w-full flex items-center gap-4 px-5 py-4 hover:bg-slate-100 transition-all"
                >
                  <Settings
                    size={20}
                  />
  
                  <span className="font-semibold">
                    Account Settings
                  </span>
                </button>
  
                {/* LOGOUT */}
  
                <button className="w-full flex items-center gap-4 px-5 py-4 hover:bg-red-50 text-red-600 transition-all">
                  <LogOut size={20} />
  
                  <span className="font-semibold">
                    Logout
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }