import DashboardLayout from "../layouts/DashboardLayout";

const users = [
  {
    name: "Naveen Kumar",
    role: "Admin",
    plan: "Enterprise",
  },
  {
    name: "Sarah Lee",
    role: "Manager",
    plan: "Professional",
  },
  {
    name: "John Carter",
    role: "User",
    plan: "Starter",
  },
];

const AdminDashboard = () => {
  return (
    <DashboardLayout>

      <div>

        <div className="flex items-center justify-between mb-8">

          <div>

            <h1 className="text-4xl font-bold text-white">
              Admin Dashboard
            </h1>

            <p className="text-zinc-400 mt-2">
              SaaS platform management
            </p>

          </div>

          <button className="bg-white text-black px-5 py-3 rounded-xl font-bold">
            Add User
          </button>

        </div>

        <div className="bg-zinc-900 rounded-2xl overflow-hidden">

          <table className="w-full">

            <thead className="bg-black">

              <tr>

                <th className="text-left p-5 text-zinc-400">
                  User
                </th>

                <th className="text-left p-5 text-zinc-400">
                  Role
                </th>

                <th className="text-left p-5 text-zinc-400">
                  Plan
                </th>

                <th className="text-left p-5 text-zinc-400">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {users.map((user, index) => (

                <tr
                  key={index}
                  className="border-t border-zinc-800"
                >

                  <td className="p-5 text-white">
                    {user.name}
                  </td>

                  <td className="p-5 text-zinc-300">
                    {user.role}
                  </td>

                  <td className="p-5 text-white">
                    {user.plan}
                  </td>

                  <td className="p-5">

                    <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                      Remove
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </DashboardLayout>
  );
};

export default AdminDashboard;