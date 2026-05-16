import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex bg-black text-white min-h-screen">
      <Sidebar />

      <div className="flex-1 p-8">
        <Navbar />

        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;