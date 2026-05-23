import DashboardLayout from "../../layouts/DashboardLayout";

export default function Billing() {

  function openProPlan() {

    window.open(
      "https://rzp.io/i/pl_SsumgmrUy4SzWi",
      "_blank"
    );
  }

  function openAgencyPlan() {

    window.open(
      "https://rzp.io/i/pl_SsupC4qEXwuWhT",
      "_blank"
    );
  }

  return (
    <DashboardLayout>

      <h1
        style={{
          fontSize: "48px",
          marginBottom: "35px",
        }}
      >
        Billing & Plans
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
          gap: "30px",
        }}
      >

        {/* FREE PLAN */}

        <div style={cardStyle}>

          <h2 style={planTitle}>
            FREE
          </h2>

          <h1 style={priceStyle}>
            ₹0
          </h1>

          <p style={featureStyle}>
            ✅ 5 AI generations/day
          </p>

          <p style={featureStyle}>
            ✅ Blog Generator
          </p>

          <p style={featureStyle}>
            ✅ Email Generator
          </p>

          <p style={featureStyle}>
            ❌ Export Features
          </p>

          <button
            style={disabledButton}
          >
            Current Plan
          </button>

        </div>

        {/* PRO PLAN */}

        <div style={cardStyle}>

          <h2 style={planTitle}>
            PRO
          </h2>

          <h1 style={priceStyle}>
            ₹150 / month
          </h1>

          <p style={featureStyle}>
            ✅ Unlimited AI
          </p>

          <p style={featureStyle}>
            ✅ Premium Outputs
          </p>

          <p style={featureStyle}>
            ✅ Download Exports
          </p>

          <p style={featureStyle}>
            ✅ Priority Support
          </p>

          <button
            onClick={openProPlan}
            style={upgradeButton}
          >
            Upgrade To PRO
          </button>

        </div>

        {/* AGENCY PLAN */}

        <div style={cardStyle}>

          <h2 style={planTitle}>
            AGENCY
          </h2>

          <h1 style={priceStyle}>
            ₹399 / month
          </h1>

          <p style={featureStyle}>
            ✅ Unlimited AI
          </p>

          <p style={featureStyle}>
            ✅ Agency Dashboard
          </p>

          <p style={featureStyle}>
            ✅ Client Projects
          </p>

          <p style={featureStyle}>
            ✅ Commercial License
          </p>

          <button
            onClick={openAgencyPlan}
            style={upgradeButton}
          >
            Upgrade To Agency
          </button>

        </div>

      </div>

    </DashboardLayout>
  );
}

const cardStyle = {
  background: "#0f172a",
  padding: "35px",
  borderRadius: "20px",
  border: "1px solid #1e293b",
};

const planTitle = {
  fontSize: "32px",
  marginBottom: "10px",
  color: "white",
};

const priceStyle = {
  fontSize: "42px",
  color: "#3b82f6",
  marginBottom: "25px",
};

const featureStyle = {
  color: "#cbd5e1",
  marginBottom: "14px",
  fontSize: "16px",
};

const disabledButton = {
  width: "100%",
  padding: "16px",
  background: "#334155",
  color: "white",
  border: "none",
  borderRadius: "12px",
  fontSize: "18px",
};

const upgradeButton = {
  width: "100%",
  padding: "16px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "12px",
  fontSize: "18px",
  cursor: "pointer",
};