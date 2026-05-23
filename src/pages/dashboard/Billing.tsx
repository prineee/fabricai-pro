import DashboardLayout from "../../layouts/DashboardLayout";

export default function Billing() {

  return (
    <DashboardLayout>

      <h1
        style={{
          fontSize: "42px",
          marginBottom: "30px",
        }}
      >
        Billing Plans
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
          gap: "30px",
        }}
      >

        <PlanCard
          title="FREE"
          price="₹0"
          features={[
            "5 AI generations/day",
            "Basic AI tools",
          ]}
        />

        <PlanCard
          title="PRO"
          price="₹150/month"
          features={[
            "Unlimited AI",
            "Premium tools",
            "Exports",
          ]}
          link="https://rzp.io/l/demo"
        />

        <PlanCard
          title="AGENCY"
          price="₹399/month"
          features={[
            "Everything in PRO",
            "Commercial license",
            "Client access",
          ]}
          link="https://rzp.io/l/demo"
        />

      </div>

    </DashboardLayout>
  );
}

function PlanCard({
  title,
  price,
  features,
  link,
}: any) {

  return (
    <div
      style={{
        background: "#0f172a",
        padding: "35px",
        borderRadius: "20px",
        border: "1px solid #1e293b",
      }}
    >

      <h2>{title}</h2>

      <h1
        style={{
          margin: "20px 0",
          fontSize: "42px",
          color: "#3b82f6",
        }}
      >
        {price}
      </h1>

      {
        features.map(
          (feature: string) => (
            <p
              key={feature}
              style={{
                marginBottom: "15px",
              }}
            >
              ✅ {feature}
            </p>
          )
        )
      }

      {
        link && (
          <a
            href={link}
            target="_blank"
          >

            <button
              style={{
                marginTop: "30px",
                width: "100%",
                padding: "16px",
                border: "none",
                borderRadius: "12px",
                background: "#2563eb",
                color: "white",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              Upgrade
            </button>

          </a>
        )
      }

    </div>
  );
}