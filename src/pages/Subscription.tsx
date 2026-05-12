// src/pages/Subscription.tsx

import {
    Check,
    Crown,
    Zap,
    Rocket,
  } from "lucide-react";
  
  import { useEffect, useState } from "react";
  
  import { initializePayment } from "../services/payment";
  
  export default function Subscription() {
    const [activePlan, setActivePlan] =
      useState("Demo");
  
    useEffect(() => {
      const savedPlan =
        localStorage.getItem(
          "fabricai-plan"
        );
  
      if (savedPlan) {
        setActivePlan(savedPlan);
      }
    }, []);
  
    const plans = [
      {
        name: "Demo",
  
        price: "Free",
  
        amount: 0,
  
        icon: Zap,
  
        color: "bg-slate-900",
  
        features: [
          "2 AI Credits",
          "Basic ERP",
          "Workspace",
        ],
      },
  
      {
        name: "Professional",
  
        price: "₹4,999/month",
  
        amount: 4999,
  
        icon: Crown,
  
        color: "bg-emerald-600",
  
        features: [
          "Unlimited AI",
          "BOM Generator",
          "Consumption Engine",
          "AI Costing",
          "Production Planning",
          "Priority Support",
        ],
      },
  
      {
        name: "Enterprise",
  
        price: "₹24,999/month",
  
        amount: 24999,
  
        icon: Rocket,
  
        color: "bg-blue-600",
  
        features: [
          "Multi Factory ERP",
          "Admin Panel",
          "Buyer Portal",
          "Advanced Analytics",
          "Cloud Storage",
          "Dedicated Support",
        ],
      },
    ];
  
    return (
      <div className="p-10">
        {/* HEADER */}
  
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-6xl font-black">
              Subscription Plans
            </h1>
  
            <p className="text-slate-500 text-2xl mt-4">
              Upgrade your AI ERP
              experience.
            </p>
          </div>
  
          <div className="bg-white border rounded-3xl px-8 py-5">
            <p className="text-slate-500">
              Active Plan
            </p>
  
            <h2 className="text-4xl font-black text-emerald-600 mt-2">
              {activePlan}
            </h2>
          </div>
        </div>
  
        {/* PLANS */}
  
        <div className="grid lg:grid-cols-3 gap-8 mt-14">
          {plans.map((plan) => {
            const Icon = plan.icon;
  
            const isActive =
              activePlan === plan.name;
  
            return (
              <div
                key={plan.name}
                className={`bg-white rounded-[32px] border overflow-hidden transition-all ${
                  isActive
                    ? "scale-105 shadow-2xl border-emerald-500"
                    : "shadow-sm"
                }`}
              >
                {/* TOP */}
  
                <div
                  className={`${plan.color} text-white p-10`}
                >
                  <div className="w-20 h-20 rounded-3xl bg-white/20 flex items-center justify-center">
                    <Icon size={40} />
                  </div>
  
                  <h2 className="text-5xl font-black mt-8">
                    {plan.name}
                  </h2>
  
                  <p className="text-3xl font-bold mt-5">
                    {plan.price}
                  </p>
                </div>
  
                {/* FEATURES */}
  
                <div className="p-10">
                  <div className="space-y-5">
                    {plan.features.map(
                      (feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-4"
                        >
                          <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                            <Check
                              size={18}
                              className="text-emerald-600"
                            />
                          </div>
  
                          <span className="text-lg font-medium">
                            {feature}
                          </span>
                        </div>
                      )
                    )}
                  </div>
  
                  {/* BUTTON */}
  
                  {isActive ? (
                    <button className="w-full mt-10 bg-slate-900 text-white py-5 rounded-2xl font-black text-xl">
                      Active Plan
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        if (
                          plan.amount === 0
                        ) {
                          setActivePlan(
                            plan.name
                          );
  
                          localStorage.setItem(
                            "fabricai-plan",
                            plan.name
                          );
                        } else {
                          initializePayment(
                            plan.amount,
                            plan.name
                          );
                        }
                      }}
                      className="w-full mt-10 bg-emerald-600 hover:bg-emerald-700 transition-all text-white py-5 rounded-2xl font-black text-xl"
                    >
                      Activate Plan
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
  
        {/* BILLING */}
  
        <div className="bg-white rounded-[32px] border p-10 mt-14">
          <h2 className="text-4xl font-black">
            Billing Information
          </h2>
  
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div className="bg-slate-50 rounded-3xl p-8">
              <p className="text-slate-500">
                Active Users
              </p>
  
              <h3 className="text-5xl font-black text-emerald-600 mt-5">
                12
              </h3>
            </div>
  
            <div className="bg-slate-50 rounded-3xl p-8">
              <p className="text-slate-500">
                AI Credits Used
              </p>
  
              <h3 className="text-5xl font-black text-blue-600 mt-5">
                932
              </h3>
            </div>
  
            <div className="bg-slate-50 rounded-3xl p-8">
              <p className="text-slate-500">
                Current Invoice
              </p>
  
              <h3 className="text-5xl font-black text-orange-500 mt-5">
                ₹0
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }