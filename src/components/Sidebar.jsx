import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[250px] min-h-screen bg-zinc-900 text-white p-5">
      <h1 className="text-2xl font-bold mb-10">
        FabricAI Pro
      </h1>

      <div className="flex flex-col gap-4">
        <Link to="/">Home</Link>

        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/billing">
          Billing
        </Link>

        <Link to="/crm">
          CRM
        </Link>

        <Link to="/erp">
          ERP
        </Link>

        <Link to="/admin">
          Admin
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;