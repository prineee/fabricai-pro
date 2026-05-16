import DashboardLayout from "../layouts/DashboardLayout";

const AITools = () => {
  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-8">
        AI Business Tools
      </h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-zinc-900 p-6 rounded-xl">
          AI Marketing Generator
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          AI Sales Funnel Builder
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          AI Business Planner
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          AI ERP Assistant
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          AI Financial Forecast
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          AI Ad Copy Generator
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AITools;