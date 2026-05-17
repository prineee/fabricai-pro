import { useEffect, useState } from "react";
import api from "../services/api";

interface DashboardStats {
  totalUsers: number;
  totalAIUsage: number;
  totalRevenue: number;
}

const Dashboard = () => {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const res = await api.get("/dashboard");
      setStats(res.data);
    } catch (error) {
      console.error("Dashboard Error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading Dashboard...
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="min-h-screen bg-black text-red-500 flex items-center justify-center">
        Failed To Load Dashboard
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-10">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-zinc-400 mb-2">
            Users
          </h2>

          <p className="text-4xl font-bold">
            {stats.totalUsers}
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-zinc-400 mb-2">
            AI Usage
          </h2>

          <p className="text-4xl font-bold">
            {stats.totalAIUsage}
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-zinc-400 mb-2">
            Revenue
          </h2>

          <p className="text-4xl font-bold">
            ₹{stats.totalRevenue}
          </p>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;