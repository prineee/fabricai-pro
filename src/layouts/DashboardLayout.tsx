import { Link } from "react-router-dom";

export default function DashboardLayout({
  children,
}: any) {

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#020617",
        color: "white",
      }}
    >

      <aside
        style={{
          width: "260px",
          background: "#0f172a",
          padding: "30px",
          borderRight:
            "1px solid #1e293b",
        }}
      >

        <h1
          style={{
            marginBottom: "50px",
            fontSize: "40px",
          }}
        >
          FabricAI
        </h1>

        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "25px",
          }}
        >

          <SidebarLink
            to="/dashboard"
            label="Dashboard"
          />

          <SidebarLink
            to="/dashboard/blog"
            label="Blog Generator"
          />

          <SidebarLink
            to="/dashboard/email"
            label="Email Generator"
          />

          <SidebarLink
            to="/dashboard/ads"
            label="Ad Generator"
          />

          <SidebarLink
            to="/dashboard/history"
            label="History"
          />

          <SidebarLink
            to="/dashboard/billing"
            label="Billing"
          />

          <SidebarLink
            to="/dashboard/settings"
            label="Settings"
          />

        </nav>

      </aside>

      <main
        style={{
          flex: 1,
          padding: "40px",
        }}
      >
        {children}
      </main>

    </div>
  );
}

function SidebarLink({
  to,
  label,
}: any) {

  return (
    <Link
      to={to}
      style={{
        color: "white",
        textDecoration: "none",
        fontSize: "20px",
      }}
    >
      {label}
    </Link>
  );
}