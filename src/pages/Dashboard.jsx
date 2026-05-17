import { useEffect, useState } from "react";
import api from "../services/api";

const Dashboard = () => {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const res = await api.get("/dashboard");
      setDashboard(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-white text-center mt-10">
        Loading Dashboard...
      </div>
    );
  }

  if (!dashboard) {
    return (
      <div className="text-red-500 text-center mt-10">
        Failed To Load Dashboard
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-xl mb-2">Users</h2>
          <p className="text-3xl font-bold">{dashboard.users || 0}</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-xl mb-2">Revenue</h2>
          <p className="text-3xl font-bold">
            ₹{dashboard.revenue || 0}
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-xl mb-2">Orders</h2>
          <p className="text-3xl font-bold">{dashboard.orders || 0}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;