import DashboardLayout from "../layouts/DashboardLayout";

const modules = [
  "Inventory Management",
  "HR Management",
  "Finance Tracking",
  "AI Sales Forecasting",
  "Production Analytics",
  "Supply Chain Management",
];

const ERP = () => {
  return (
    <DashboardLayout>

      <div>

        <h1 className="text-4xl font-bold text-white mb-2">
          AI ERP Dashboard
        </h1>

        <p className="text-zinc-400 mb-8">
          Enterprise resource planning modules
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {modules.map((module, index) => (

            <div
              key={index}
              className="bg-zinc-900 p-8 rounded-2xl hover:bg-zinc-800 transition"
            >

              <h2 className="text-2xl font-bold text-white">
                {module}
              </h2>

              <p className="text-zinc-400 mt-4">
                AI-powered enterprise module
              </p>

              <button className="mt-6 bg-white text-black px-5 py-2 rounded-xl font-bold">
                Open Module
              </button>

            </div>

          ))}

        </div>

      </div>

    </DashboardLayout>
  );
};

export default ERP;