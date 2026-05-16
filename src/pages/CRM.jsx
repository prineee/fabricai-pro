import DashboardLayout from "../layouts/DashboardLayout";

const customers = [
  {
    name: "John Carter",
    company: "Tesla",
    status: "Active",
    revenue: "$12,400",
  },
  {
    name: "Sarah Lee",
    company: "Google",
    status: "Pending",
    revenue: "$8,900",
  },
  {
    name: "Michael Chen",
    company: "Amazon",
    status: "Active",
    revenue: "$21,300",
  },
];

const CRM = () => {
  return (
    <DashboardLayout>

      <div>

        <div className="flex items-center justify-between mb-8">

          <div>
            <h1 className="text-4xl font-bold text-white">
              AI CRM System
            </h1>

            <p className="text-zinc-400 mt-2">
              Customer relationship management
            </p>
          </div>

          <button className="bg-white text-black px-5 py-3 rounded-xl font-bold">
            Add Customer
          </button>

        </div>

        <div className="bg-zinc-900 rounded-2xl overflow-hidden">

          <table className="w-full">

            <thead className="bg-black">

              <tr>

                <th className="text-left p-5 text-zinc-400">
                  Customer
                </th>

                <th className="text-left p-5 text-zinc-400">
                  Company
                </th>

                <th className="text-left p-5 text-zinc-400">
                  Status
                </th>

                <th className="text-left p-5 text-zinc-400">
                  Revenue
                </th>

              </tr>

            </thead>

            <tbody>

              {customers.map((customer, index) => (

                <tr
                  key={index}
                  className="border-t border-zinc-800"
                >

                  <td className="p-5 text-white">
                    {customer.name}
                  </td>

                  <td className="p-5 text-zinc-300">
                    {customer.company}
                  </td>

                  <td className="p-5">

                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                      {customer.status}
                    </span>

                  </td>

                  <td className="p-5 text-white">
                    {customer.revenue}
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

export default CRM;