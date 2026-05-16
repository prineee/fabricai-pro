import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [stats, setStats] = useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const token =
        localStorage.getItem("fabricaiToken");

      const { data } = await axios.get(
        "http://localhost:5000/api/dashboard",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setStats(data.stats);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white text-3xl">
        Loading Dashboard...
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-red-500 text-2xl">
        Failed To Load Dashboard
      </div>
    );
  }

  const usagePercentage =
    stats.plan === "pro"
      ? 100
      : (stats.aiUsage / stats.aiLimit) * 100;

  return (
    <div className="min-h-screen bg-black text-white p-8">

      {/* HEADER */}

      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-5xl font-bold">
            FabricAI Dashboard
          </h1>

          <p className="text-zinc-400 mt-2">
            Enterprise AI SaaS Control Panel
          </p>
        </div>

        <button
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-bold"
          onClick={() =>
            alert(
              "Razorpay subscription integration coming next"
            )
          }
        >
          Upgrade To Pro
        </button>
      </div>

      {/* STATS */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* PLAN */}

        <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
          <p className="text-zinc-400 mb-3">
            Current Plan
          </p>

          <h2 className="text-4xl font-bold capitalize">
            {stats.plan}
          </h2>

          <div className="mt-4">
            <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
              Active
            </span>
          </div>
        </div>

        {/* AI USAGE */}

        <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
          <p className="text-zinc-400 mb-3">
            AI Requests Used
          </p>

          <h2 className="text-4xl font-bold">
            {stats.aiUsage}
          </h2>

          <p className="text-zinc-500 mt-2">
            Requests consumed
          </p>
        </div>

        {/* REMAINING */}

        <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
          <p className="text-zinc-400 mb-3">
            Remaining Requests
          </p>

          <h2 className="text-4xl font-bold">
            {stats.remaining}
          </h2>

          <p className="text-zinc-500 mt-2">
            Remaining daily quota
          </p>
        </div>

        {/* SUBSCRIPTION */}

        <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
          <p className="text-zinc-400 mb-3">
            Subscription
          </p>

          <h2 className="text-3xl font-bold capitalize">
            {stats.subscriptionStatus}
          </h2>

          <p className="text-zinc-500 mt-2">
            Billing status
          </p>
        </div>
      </div>

      {/* AI USAGE PROGRESS */}

      <div className="bg-zinc-900 rounded-2xl p-8 mt-10 border border-zinc-800">

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">
            AI Usage Analytics
          </h2>

          <span className="text-zinc-400">
            {stats.aiUsage} /{" "}
            {stats.plan === "pro"
              ? "Unlimited"
              : stats.aiLimit}
          </span>
        </div>

        <div className="w-full bg-zinc-700 h-6 rounded-full overflow-hidden">

          <div
            className="bg-blue-500 h-6 rounded-full transition-all duration-500"
            style={{
              width:
                stats.plan === "pro"
                  ? "100%"
                  : `${usagePercentage}%`,
            }}
          />

        </div>

        <div className="mt-6 text-zinc-400">

          {stats.plan === "pro" ? (
            <p>
              Unlimited AI access enabled.
            </p>
          ) : (
            <p>
              You have used{" "}
              <span className="text-white font-bold">
                {stats.aiUsage}
              </span>{" "}
              of{" "}
              <span className="text-white font-bold">
                {stats.aiLimit}
              </span>{" "}
              free AI requests.
            </p>
          )}

        </div>
      </div>

      {/* QUICK ACTIONS */}

      <div className="grid md:grid-cols-3 gap-6 mt-10">

        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <h3 className="text-2xl font-bold mb-3">
            AI Chat
          </h3>

          <p className="text-zinc-400 mb-5">
            Access enterprise AI assistant.
          </p>

          <button
            className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl"
            onClick={() =>
              (window.location.href = "/ai")
            }
          >
            Open AI
          </button>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <h3 className="text-2xl font-bold mb-3">
            Billing
          </h3>

          <p className="text-zinc-400 mb-5">
            Manage subscriptions and payments.
          </p>

          <button
            className="bg-purple-600 hover:bg-purple-700 px-5 py-3 rounded-xl"
            onClick={() =>
              (window.location.href =
                "/billing")
            }
          >
            Open Billing
          </button>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <h3 className="text-2xl font-bold mb-3">
            Analytics
          </h3>

          <p className="text-zinc-400 mb-5">
            Monitor AI activity and growth.
          </p>

          <button
            className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-xl"
            onClick={() =>
              (window.location.href =
                "/analytics")
            }
          >
            Open Analytics
          </button>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;