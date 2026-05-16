import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[260px] min-h-screen bg-zinc-900 p-6 border-r border-zinc-800">
      
      <h1 className="text-2xl font-bold text-white mb-10">
        FabricAI Pro
      </h1>

      <div className="flex flex-col gap-5 text-lg">

        <Link
          to="/dashboard"
          className="text-zinc-300 hover:text-white transition"
        >
          Dashboard
        </Link>

        <Link
          to="/ai"
          className="text-zinc-300 hover:text-white transition"
        >
          AI Chat
        </Link>

        <Link
          to="/billing"
          className="text-zinc-300 hover:text-white transition"
        >
          Billing
        </Link>

        <Link
          to="/analytics"
          className="text-zinc-300 hover:text-white transition"
        >
          Analytics
        </Link>

        <Link
          to="/admin"
          className="text-zinc-300 hover:text-white transition"
        >
          Admin
        </Link>

      </div>

    </div>
  );
};

export default Sidebar;