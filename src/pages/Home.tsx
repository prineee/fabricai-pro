import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      style={{
        background: "#020617",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "25px 60px",
          borderBottom: "1px solid #1e293b",
          position: "sticky",
          top: 0,
          background: "#020617",
          zIndex: 1000,
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            color: "#3b82f6",
          }}
        >
          FabricAI Pro
        </h1>

        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <Link
            to="/pricing"
            style={navLink}
          >
            Pricing
          </Link>

          <Link
            to="/login"
            style={navLink}
          >
            Login
          </Link>

          <Link
            to="/register"
            style={{
              background: "#2563eb",
              padding: "12px 22px",
              borderRadius: "10px",
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Start Free
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "120px 20px",
        }}
      >
        <h1
          style={{
            fontSize: "72px",
            maxWidth: "1100px",
            lineHeight: 1.1,
            marginBottom: "30px",
            fontWeight: "bold",
          }}
        >
          The Ultimate AI Platform For
          <span
            style={{
              color: "#3b82f6",
            }}
          >
            {" "}
            Fashion Creators,
          </span>
          Businesses & Marketers
        </h1>

        <p
          style={{
            maxWidth: "900px",
            fontSize: "24px",
            color: "#94a3b8",
            lineHeight: 1.7,
            marginBottom: "50px",
          }}
        >
          Generate AI blogs, AI fashion content,
          ads, emails, landing pages,
          product descriptions and marketing assets
          in seconds using FabricAI Pro.
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Link
            to="/register"
            style={{
              padding: "18px 34px",
              background: "#2563eb",
              color: "white",
              borderRadius: "12px",
              textDecoration: "none",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Start Free Trial
          </Link>

          <Link
            to="/pricing"
            style={{
              padding: "18px 34px",
              border: "1px solid #334155",
              color: "white",
              borderRadius: "12px",
              textDecoration: "none",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            View Pricing
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section
        style={{
          padding: "60px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "52px",
            marginBottom: "60px",
          }}
        >
          Powerful AI Features
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(300px,1fr))",
            gap: "30px",
          }}
        >
          <FeatureCard
            title="AI Blog Generator"
            text="Generate SEO optimized blogs instantly."
          />

          <FeatureCard
            title="AI Fashion Designer"
            text="Create AI powered fashion designs and product ideas."
          />

          <FeatureCard
            title="AI Email Generator"
            text="Generate professional marketing emails."
          />

          <FeatureCard
            title="AI Ad Creator"
            text="Generate Facebook & Instagram ads instantly."
          />

          <FeatureCard
            title="AI Landing Pages"
            text="Create converting landing page content."
          />

          <FeatureCard
            title="AI Marketing Tools"
            text="Full marketing suite powered by AI."
          />
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section
        style={{
          padding: "100px 40px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "54px",
            marginBottom: "70px",
          }}
        >
          Pricing Plans
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: "30px",
          }}
        >
          <PricingCard
            title="FREE"
            price="₹0 / $0"
            features={[
              "5 AI generations daily",
              "Basic AI tools",
              "Limited dashboard",
            ]}
          />

          <PricingCard
            title="PRO"
            price="₹150/mo • $9/mo"
            features={[
              "Unlimited AI blogs",
              "AI fashion generator",
              "Marketing tools",
              "Priority support",
            ]}
          />

          <PricingCard
            title="AGENCY"
            price="₹399/mo • $19/mo"
            features={[
              "Unlimited everything",
              "Team access",
              "Advanced AI suite",
              "Commercial rights",
            ]}
          />
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "120px 30px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "60px",
            marginBottom: "30px",
          }}
        >
          Ready To Scale With AI?
        </h2>

        <p
          style={{
            fontSize: "22px",
            color: "#94a3b8",
            marginBottom: "50px",
          }}
        >
          Join FabricAI Pro today and automate your content business.
        </p>

        <Link
          to="/register"
          style={{
            padding: "22px 40px",
            background: "#2563eb",
            color: "white",
            borderRadius: "14px",
            textDecoration: "none",
            fontSize: "22px",
            fontWeight: "bold",
          }}
        >
          Create Free Account
        </Link>
      </section>
    </div>
  );
}

function FeatureCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div
      style={{
        background: "#0f172a",
        padding: "35px",
        borderRadius: "20px",
        border: "1px solid #1e293b",
      }}
    >
      <h3
        style={{
          fontSize: "28px",
          marginBottom: "15px",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          color: "#94a3b8",
          lineHeight: 1.7,
          fontSize: "18px",
        }}
      >
        {text}
      </p>
    </div>
  );
}

function PricingCard({
  title,
  price,
  features,
}: {
  title: string;
  price: string;
  features: string[];
}) {
  return (
    <div
      style={{
        background: "#0f172a",
        padding: "40px",
        borderRadius: "22px",
        border: "1px solid #1e293b",
      }}
    >
      <h3
        style={{
          fontSize: "34px",
          marginBottom: "20px",
        }}
      >
        {title}
      </h3>

      <h1
        style={{
          fontSize: "46px",
          color: "#3b82f6",
          marginBottom: "30px",
        }}
      >
        {price}
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {features.map((feature) => (
          <div
            key={feature}
            style={{
              color: "#cbd5e1",
              fontSize: "18px",
            }}
          >
            ✓ {feature}
          </div>
        ))}
      </div>

      <Link
        to="/register"
        style={{
          display: "block",
          marginTop: "40px",
          textAlign: "center",
          background: "#2563eb",
          padding: "16px",
          borderRadius: "12px",
          color: "white",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Get Started
      </Link>
    </div>
  );
}

const navLink = {
  color: "white",
  textDecoration: "none",
  fontSize: "18px",
};