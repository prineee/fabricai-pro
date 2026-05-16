import { Link } from "react-router-dom";
import {
  FaRobot,
  FaChartBar,
  FaMoneyBill,
  FaUsers,
  FaCogs,
  FaUserShield,
  FaHome,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-[260px] min-h-screen bg-zinc-900 p-6 border-r border-zinc-800">
      <h1 className="text-3xl font-bold mb-10 text-blue-400">
        FabricAI Pro
      </h1>

      <div className="flex flex-col gap-5 text-lg">
        <Link
          to="/dashboard"
          className="flex items-center gap-3 hover:text-blue-400 transition"
        >
          <FaHome /> Dashboard
        </Link>

        <Link
          to="/ai-chat"
          className="flex items-center gap-3 hover:text-blue-400 transition"
        >
          <FaRobot /> AI Chat
        </Link>

        <Link
          to="/billing"
          className="flex items-center gap-3 hover:text-blue-400 transition"
        >
          <FaMoneyBill /> Billing
        </Link>

        <Link
          to="/analytics"
          className="flex items-center gap-3 hover:text-blue-400 transition"
        >
          <FaChartBar /> Analytics
        </Link>

        <Link
          to="/crm"
          className="flex items-center gap-3 hover:text-blue-400 transition"
        >
          <FaUsers /> CRM
        </Link>

        <Link
          to="/erp"
          className="flex items-center gap-3 hover:text-blue-400 transition"
        >
export default Sidebar;