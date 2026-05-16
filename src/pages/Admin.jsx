import { useEffect, useState } from "react";
import axios from "axios";

const Admin = () => {
  const [stats, setStats] = useState(null);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchStats();
    fetchUsers();
  }, []);

  const token =
    localStorage.getItem("fabricaiToken");

  const fetchStats = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/admin/stats",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setStats(response.data.stats);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/admin/users",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUsers(response.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  const upgradeUser = async (id) => {
    try {
      await axios.put(
        `http://localhost:5000/api/admin/upgrade/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchUsers();
      fetchStats();

      alert("User upgraded to PRO");
    } catch (error) {
      console.log(error);
    }
  };

  const resetUsage = async (id) => {
    try {
      await axios.put(
        `http://localhost:5000/api/admin/reset/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchUsers();

      alert("Usage reset successful");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/admin/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchUsers();
      fetchStats();

      alert("User deleted");
    } catch (error) {
      console.log(error);
    }
  };

  if (!stats) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center text-3xl">
        Loading Admin Dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-6xl font-bold mb-10">
        Enterprise Admin Panel
      </h1>

      <div className="grid grid-cols-4 gap-6 mb-12">

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-xl">
            Total Users
          </h2>

          <p className="text-5xl mt-4">
            {stats.totalUsers}
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-xl">
            Free Users
          </h2>

          <p className="text-5xl mt-4">
            {stats.freeUsers}
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-xl">
            Pro Users
          </h2>

          <p className="text-5xl mt-4">
            {stats.proUsers}
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-xl">
            Total AI Usage
          </h2>

          <p className="text-5xl mt-4">
            {stats.totalAIUsage}
          </p>
        </div>

      </div>

      <div className="bg-zinc-900 rounded-2xl p-6 overflow-x-auto">

        <h2 className="text-3xl font-bold mb-6">
          Users Management
        </h2>

        <table className="w-full">

          <thead>
            <tr className="border-b border-zinc-700">

              <th className="text-left p-4">
                Name
              </th>

              <th className="text-left p-4">
                Email
              </th>

              <th className="text-left p-4">
                Plan
              </th>

              <th className="text-left p-4">
                AI Usage
              </th>

              <th className="text-left p-4">
                Actions
              </th>

            </tr>
          </thead>

          <tbody>

            {users.map((user) => (
              <tr
                key={user._id}
                className="border-b border-zinc-800"
              >

                <td className="p-4">
                  {user.name}
                </td>

                <td className="p-4">
                  {user.email}
                </td>

                <td className="p-4 capitalize">
                  {user.plan}
                </td>

                <td className="p-4">
                  {user.aiUsage}
                </td>

                <td className="p-4 flex gap-2">

                  <button
                    onClick={() =>
                      upgradeUser(user._id)
                    }
                    className="bg-blue-600 px-4 py-2 rounded-lg"
                  >
                    Upgrade
                  </button>

                  <button
                    onClick={() =>
                      resetUsage(user._id)
                    }
                    className="bg-yellow-600 px-4 py-2 rounded-lg"
                  >
                    Reset
                  </button>

                  <button
                    onClick={() =>
                      deleteUser(user._id)
                    }
                    className="bg-red-600 px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Admin;