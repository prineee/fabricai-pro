import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div
      style={{
        background: "#020617",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      {/* HERO */}

      <section
        style={{
          padding: "120px 20px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "80px",
            marginBottom: "20px",
          }}
        >
          FabricAI Pro
        </h1>

        <p
          style={{
            fontSize: "24px",
            color: "#cbd5e1",
            maxWidth: "900px",
            margin: "0 auto",
            marginBottom: "40px",
          }}
        >
          AI SaaS platform for marketers,
          agencies, creators and businesses.
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link to="/register">
            <button
              style={{
                padding: "18px 40px",
                borderRadius: "12px",
                border: "none",
                background: "#2563eb",
                color: "white",
                fontSize: "20px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Get Instant Access
            </button>
          </Link>

          <Link to="/billing">
            <button
              style={{
                padding: "18px 40px",
                borderRadius: "12px",
                border: "1px solid #2563eb",
                background: "transparent",
                color: "white",
                fontSize: "20px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              View Pricing
            </button>
          </Link>
        </div>
      </section>

      {/* FEATURES */}

      <section
        style={{
          padding: "80px 20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "50px",
            marginBottom: "60px",
          }}
        >
          AI Features
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(280px,1fr))",
            gap: "30px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {[
            "AI Blog Generator",
            "AI Ad Generator",
            "AI Email Generator",
            "AI Script Generator",
            "AI Product Description",
            "AI Landing Pages",
          ].map((feature, index) => (
            <div
              key={index}
              style={{
                background: "#0f172a",
                padding: "40px",
                borderRadius: "20px",
                border: "1px solid #1e293b",
              }}
            >
              <h3>{feature}</h3>

              <p
                style={{
                  color: "#94a3b8",
                  marginTop: "20px",
                }}
              >
                Generate high quality AI content instantly.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}

      <section
        style={{
          padding: "100px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "50px",
            marginBottom: "20px",
          }}
        >
          Affordable Pricing
        </h2>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: "60px",
          }}
        >
          Start from just ₹50/month
        </p>

        <Link to="/billing">
          <button
            style={{
              padding: "18px 50px",
              borderRadius: "12px",
              border: "none",
              background: "#2563eb",
              color: "white",
              fontSize: "20px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Choose Your Plan
          </button>
        </Link>
      </section>

      {/* FOOTER */}

      <footer
        style={{
          borderTop: "1px solid #1e293b",
          padding: "40px",
          textAlign: "center",
          color: "#94a3b8",
        }}
      >
        © 2026 FabricAI Pro
      </footer>
    </div>
  );
}