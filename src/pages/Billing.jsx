import { useEffect, useState } from "react";
import axios from "axios";

const Billing = () => {
  const [user, setUser] =
    useState(null);

  useEffect(() => {
    loadUser();
  }, []);

  const token =
    localStorage.getItem(
      "fabricaiToken"
    );

  const loadUser = () => {
    const storedUser =
      localStorage.getItem(
        "fabricaiUser"
      );

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  };

  const upgradeToPro =
    async () => {
      try {
        const { data } =
          await axios.post(
            "http://localhost:5000/api/payment/create-order",
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

        const options = {
          key: "YOUR_RAZORPAY_KEY_ID",

          amount:
            data.order.amount,

          currency:
            data.order.currency,

          name: "FabricAI Pro",

          description:
            "Enterprise AI Subscription",

          order_id:
            data.order.id,

          handler: async (
            response
          ) => {
            await axios.post(
              "http://localhost:5000/api/payment/verify",
              response,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );

            const updatedUser = {
              ...user,
              plan: "pro",
              subscriptionStatus:
                "active",
            };

            localStorage.setItem(
              "fabricaiUser",
              JSON.stringify(
                updatedUser
              )
            );

            setUser(updatedUser);

            alert(
              "PRO Activated Successfully"
            );
          },

          theme: {
            color: "#2563eb",
          },
        };

        const razor =
          new window.Razorpay(
            options
          );

        razor.open();
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-6xl font-bold mb-12">
        Billing & Plans
      </h1>

      <div className="grid grid-cols-2 gap-8">

        <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">

          <h2 className="text-4xl font-bold mb-4">
            Free Plan
          </h2>

          <p className="text-zinc-400 mb-6">
            Perfect for testing FabricAI
          </p>

          <h3 className="text-5xl font-bold mb-8">
            ₹0
          </h3>

          <ul className="space-y-4 text-lg">

            <li>
              ✓ 20 AI Requests
            </li>

            <li>
              ✓ Basic Dashboard
            </li>

            <li>
              ✓ AI Chat Access
            </li>

            <li>
              ✓ Community Support
            </li>

          </ul>

        </div>

        <div className="bg-blue-600 p-8 rounded-3xl relative overflow-hidden">

          <div className="absolute top-4 right-4 bg-white text-blue-600 px-4 py-1 rounded-full font-bold">
            MOST POPULAR
          </div>

          <h2 className="text-4xl font-bold mb-4">
            PRO Plan
          </h2>

          <p className="mb-6 text-blue-100">
            Enterprise-grade AI SaaS
          </p>

          <h3 className="text-5xl font-bold mb-2">
            ₹499
          </h3>

          <p className="mb-8">
            per month
          </p>

          <ul className="space-y-4 text-lg mb-10">

            <li>
              ✓ Unlimited AI Usage
            </li>

            <li>
              ✓ Admin Dashboard
            </li>

            <li>
              ✓ Analytics
            </li>

            <li>
              ✓ Priority AI Speed
            </li>

            <li>
              ✓ Premium Support
            </li>

            <li>
              ✓ Enterprise Access
            </li>

          </ul>

          {user?.plan === "pro" ? (
            <button className="w-full bg-green-500 text-white py-4 rounded-2xl text-xl font-bold">

              PRO ACTIVE

            </button>
          ) : (
            <button
              onClick={
                upgradeToPro
              }
              className="w-full bg-white text-blue-600 py-4 rounded-2xl text-xl font-bold hover:bg-zinc-100 transition"
            >

              Upgrade To PRO

            </button>
          )}

        </div>

      </div>

      <div className="mt-12 bg-zinc-900 p-8 rounded-3xl">

        <h2 className="text-3xl font-bold mb-6">
          Subscription Status
        </h2>

        <div className="grid grid-cols-3 gap-6">

          <div>
            <p className="text-zinc-400">
              Current Plan
            </p>

            <h3 className="text-3xl font-bold capitalize">
              {user?.plan || "free"}
            </h3>
          </div>

          <div>
            <p className="text-zinc-400">
              Subscription
            </p>

            <h3 className="text-3xl font-bold capitalize">
              {user?.subscriptionStatus ||
                "inactive"}
            </h3>
          </div>

          <div>
            <p className="text-zinc-400">
              AI Usage
            </p>

            <h3 className="text-3xl font-bold">
              {user?.aiUsage || 0}
            </h3>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Billing;