import { useState } from "react";

type PlanType = {
  monthly: string;
  quarterly: string;
  yearly: string;
  features: string[];
};

export default function PricingSwitcher() {
  const [country, setCountry] = useState<"india" | "international">(
    "india"
  );

  const indiaPlans: Record<string, PlanType> = {
    FREE: {
      monthly: "₹0",
      quarterly: "₹0",
      yearly: "₹0",
      features: [
        "10 AI generations/day",
        "Basic AI tools",
        "Limited templates",
        "Community support",
      ],
    },

    PRO: {
      monthly: "₹150",
      quarterly: "₹399",
      yearly: "₹1499",
      features: [
        "Unlimited AI generations",
        "AI Blog Generator",
        "AI Email Generator",
        "AI Ad Generator",
        "AI Landing Page Generator",
        "Priority Support",
      ],
    },

    AGENCY: {
      monthly: "₹399",
      quarterly: "₹999",
      yearly: "₹3499",
      features: [
        "Everything in PRO",
        "Multi-user access",
        "Client management",
        "Commercial rights",
        "Advanced AI tools",
        "Affiliate system",
        "Priority AI queue",
      ],
    },
  };

  const internationalPlans: Record<string, PlanType> = {
    FREE: {
      monthly: "$0",
      quarterly: "$0",
      yearly: "$0",
      features: [
        "10 AI generations/day",
        "Basic AI tools",
        "Limited templates",
        "Community support",
      ],
    },

    PRO: {
      monthly: "$9",
      quarterly: "$24",
      yearly: "$79",
      features: [
        "Unlimited AI generations",
        "AI Blog Generator",
        "AI Email Generator",
        "AI Ad Generator",
        "AI Landing Page Generator",
        "Priority Support",
      ],
    },

    AGENCY: {
      monthly: "$19",
      quarterly: "$49",
      yearly: "$149",
      features: [
        "Everything in PRO",
        "Multi-user access",
        "Client management",
        "Commercial rights",
        "Advanced AI tools",
        "Affiliate system",
        "Priority AI queue",
      ],
    },
  };

  const currentPlans =
    country === "india"
      ? indiaPlans
      : internationalPlans;

  return (
    <div
      style={{
        background: "#020617",
        minHeight: "100vh",
        padding: "60px 20px",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            textAlign: "center",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          Choose Your Plan
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#94a3b8",
            marginBottom: "50px",
            fontSize: "20px",
          }}
        >
          Scale your AI business with FabricAI Pro
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginBottom: "50px",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => setCountry("india")}
            style={{
              padding: "14px 30px",
              borderRadius: "12px",
              border: "none",
              cursor: "pointer",
              background:
                country === "india"
                  ? "#2563eb"
                  : "#0f172a",
              color: "white",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            🇮🇳 India Pricing
          </button>

          <button
            onClick={() =>
              setCountry("international")
            }
            style={{
              padding: "14px 30px",
              borderRadius: "12px",
              border: "none",
              cursor: "pointer",
              background:
                country === "international"
                  ? "#2563eb"
                  : "#0f172a",
              color: "white",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            🌍 International Pricing
          </button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: "30px",
          }}
        >
          {Object.entries(currentPlans).map(
            ([name, plan]: [string, PlanType]) => (
              <div
                key={name}
                style={{
                  background: "#0f172a",
                  borderRadius: "25px",
                  padding: "40px",
                  border:
                    name === "PRO"
                      ? "2px solid #2563eb"
                      : "1px solid #1e293b",
                  position: "relative",
                }}
              >
                {name === "PRO" && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-15px",
                      right: "20px",
                      background: "#2563eb",
                      padding: "8px 16px",
                      borderRadius: "30px",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    MOST POPULAR
                  </div>
                )}

                <h2
                  style={{
                    fontSize: "40px",
                    marginBottom: "20px",
                  }}
                >
                  {name}
                </h2>

                <div
                  style={{
                    marginBottom: "30px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "48px",
                      color: "#3b82f6",
                    }}
                  >
                    {plan.monthly}
                    <span
                      style={{
                        fontSize: "18px",
                        color: "#94a3b8",
                      }}
                    >
                      /month
                    </span>
                  </h3>

                  <p
                    style={{
                      color: "#94a3b8",
                      marginTop: "10px",
                    }}
                  >
                    Quarterly: {plan.quarterly}
                  </p>

                  <p
                    style={{
                      color: "#94a3b8",
                    }}
                  >
                    Yearly: {plan.yearly}
                  </p>
                </div>

                <div
                  style={{
                    marginBottom: "30px",
                  }}
                >
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      style={{
                        marginBottom: "15px",
                        display: "flex",
                        gap: "10px",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          color: "#22c55e",
                          fontSize: "20px",
                        }}
                      >
                        ✓
                      </span>

                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  style={{
                    width: "100%",
                    padding: "16px",
                    background: "#2563eb",
                    border: "none",
                    borderRadius: "12px",
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    marginTop: "20px",
                  }}
                >
                  Choose Plan
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}