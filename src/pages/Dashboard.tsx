import { useEffect, useState } from "react";
import api from "../services/api";

export default function Dashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await api.get("/api/admin/stats");
      setStats(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="text-white p-10">
      <h1 className="text-4xl font-bold mb-10">
        Dashboard
      </h1>

      {stats && (
        <div className="grid grid-cols-2 gap-5">
          <div className="bg-zinc-900 p-6 rounded-xl">
            Users: {stats.totalUsers}
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            AI Usage: {stats.totalAIUsage}
          </div>
        </div>
      )}
    </div>
  );
}