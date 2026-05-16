import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FabricAIProLanding() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-slate-100">
      {/* NAVBAR */}

      <div className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold text-2xl">
            F
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              FabricAI Pro
            </h1>

            <p className="text-sm text-slate-500">
              AI Apparel ERP Platform
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <button className="bg-white border border-slate-300 px-6 py-3 rounded-2xl font-semibold">
            Pricing
          </button>

          <button className="bg-emerald-600 hover:bg-emerald-700 transition-all text-white px-6 py-3 rounded-2xl font-semibold">
            Book Demo
          </button>
        </div>
      </div>

      {/* HERO */}

      <div className="px-12 py-10">
        <div className="bg-white rounded-[40px] border border-slate-200 p-14 shadow-sm">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full inline-flex font-semibold text-sm mb-6">
                AI COSTING ENGINE
              </div>

              <h1 className="text-7xl leading-tight font-bold text-slate-900">
                Know what a garment should cost.
              </h1>

              <p className="text-slate-600 text-2xl leading-10 mt-8">
                AI-powered BOM creation,
                garment costing, SMV,
                consumption and production ERP.
              </p>

              <div className="flex gap-5 mt-10">
                <button
                  onClick={() => navigate("/dashboard")}
                  className="bg-emerald-600 hover:bg-emerald-700 transition-all text-white px-10 py-5 rounded-2xl text-xl font-bold"
                >
                  Start Free Demo
                </button>

                <button className="bg-white border border-slate-300 px-10 py-5 rounded-2xl text-xl font-semibold">
                  View Platform
                </button>
              </div>
            </div>

            {/* REGISTER CARD */}

            <div>
              <div className="bg-slate-50 rounded-[40px] border border-slate-200 p-10">
                <h2 className="text-4xl font-bold text-slate-900">
                  Register Demo Account
                </h2>

                <p className="text-slate-500 text-lg leading-8 mt-4">
                  Get 2 free AI credits and explore
                  the full operational ERP system.
                </p>

                <div className="mt-10">
                  <label className="text-sm font-semibold text-slate-600">
                    Business Email
                  </label>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    placeholder="you@company.com"
                    className="w-full h-16 mt-3 rounded-2xl border border-slate-300 px-5 text-lg outline-none focus:border-emerald-500"
                  />

                  <button
                    onClick={() => navigate("/dashboard")}
                    className="w-full h-16 mt-8 bg-emerald-600 hover:bg-emerald-700 transition-all text-white rounded-2xl text-lg font-bold"
                  >
                    Send Verification Email
                  </button>

                  <div className="mt-8 bg-emerald-50 border border-emerald-100 rounded-2xl p-5">
                    <h3 className="font-bold text-emerald-700">
                      Demo Includes
                    </h3>

                    <ul className="mt-4 space-y-3 text-slate-700">
                      <li>
                        • AI Consumption Engine
                      </li>

                      <li>
                        • BOM Generation
                      </li>

                      <li>
                        • SMV Calculation
                      </li>

                      <li>
                        • Garment Costing
                      </li>

                      <li>
                        • Marker Intelligence
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FEATURES */}

          <div className="grid grid-cols-4 gap-6 mt-12">
            {[
              {
                title: "AI Accuracy",
                value: "96.4%",
              },
              {
                title: "Styles Processed",
                value: "24K+",
              },
              {
                title: "Fabric Saved",
                value: "180KM",
              },
              {
                title: "Factories",
                value: "124",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-200"
              >
                <p className="text-slate-500">
                  {item.title}
                </p>

                <h3 className="text-5xl font-bold text-slate-900 mt-4">
                  {item.value}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}