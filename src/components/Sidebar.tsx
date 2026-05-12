import {
  LayoutDashboard,
  FolderOpen,
  FileText,
  Calculator,
  DollarSign,
  Factory,
  Settings,
} from "lucide-react";

type Props = {
  active: string;

  setActive: (
    value: string
  ) => void;
};

export default function Sidebar({
  active,
  setActive,
}: Props) {
  const menus = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
    },

    {
      name: "Workspace",
      icon: FolderOpen,
    },

    {
      name: "Library",
      icon: FileText,
    },

    {
      name: "BOM",
      icon: FileText,
    },

    {
      name: "Consumption",
      icon: Calculator,
    },

    {
      name: "Costing",
      icon: DollarSign,
    },

    {
      name: "Production",
      icon: Factory,
    },

    {
      name: "Settings",
      icon: Settings,
    },
  ];

  return (
    <div className="w-72 min-h-screen bg-slate-950 text-white p-6">
      {/* LOGO */}

      <div className="mb-14">
        <div className="w-16 h-16 bg-emerald-600 rounded-3xl flex items-center justify-center text-3xl font-black">
          F
        </div>

        <h1 className="text-4xl font-black mt-5">
          FabricAI
        </h1>

        <p className="text-slate-400 mt-2">
          AI Apparel ERP
        </p>
      </div>

      {/* MENU */}

      <div className="space-y-3">
        {menus.map((menu) => {
          const Icon = menu.icon;

          return (
            <button
              key={menu.name}
              onClick={() =>
                setActive(menu.name)
              }
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all ${
                active === menu.name
                  ? "bg-emerald-600"
                  : "hover:bg-slate-800"
              }`}
            >
              <Icon size={22} />

              <span className="font-semibold text-lg">
                {menu.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* FOOTER */}

      <div className="mt-16 bg-slate-900 rounded-3xl p-5">
        <p className="text-slate-400 text-sm">
          AI Credits
        </p>

        <h2 className="text-5xl font-black text-emerald-400 mt-2">
          2
        </h2>
      </div>
    </div>
  );
}