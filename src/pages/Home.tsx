import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      style={{
        background: "#020617",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "25px 8%",
          borderBottom: "1px solid #1e293b",
          position: "sticky",
          top: 0,
          background: "#020617",
          zIndex: 999,
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "bold",
          }}
        >
          FabricAI
        </h1>

        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <Link
            to="/login"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            Login
          </Link>

          <Link
            to="/register"
            style={{
              background: "#2563eb",
              padding: "12px 24px",
              borderRadius: "10px",
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        style={{
          padding: "120px 8%",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "72px",
            fontWeight: "bold",
            lineHeight: 1.2,
            marginBottom: "30px",
          }}
        >
          AI SaaS Platform
          <br />
          For Marketers & Agencies
        </h1>

        <p
          style={{
            fontSize: "24px",
            color: "#94a3b8",
            maxWidth: "900px",
            margin: "auto",
            lineHeight: 1.8,
          }}
        >
          Generate AI blogs, ads, landing pages, emails,
          scripts and marketing assets in seconds.
        </p>

        <div
          style={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <Link
            to="/register"
            style={{
              background: "#2563eb",
              color: "white",
              padding: "18px 40px",
              borderRadius: "12px",
              textDecoration: "none",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Start Free Trial
          </Link>

          <a
            href="#demo"
            style={{
              border: "1px solid #334155",
              color: "white",
              padding: "18px 40px",
              borderRadius: "12px",
              textDecoration: "none",
              fontSize: "20px",
            }}
          >
            Watch Demo
          </a>
        </div>
      </section>

      {/* VIDEO DEMO */}
      <section
        id="demo"
        style={{
          padding: "80px 8%",
        }}
      >
        <div
          style={{
            background: "#0f172a",
            borderRadius: "20px",
            padding: "40px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "42px",
              marginBottom: "30px",
            }}
          >
            Watch FabricAI In Action
          </h2>

          <div
            style={{
              background: "#000",
              borderRadius: "20px",
              height: "500px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#94a3b8",
              fontSize: "28px",
            }}
          >
            VIDEO DEMO HERE
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section
        style={{
          padding: "80px 8%",
        }}
      >
        <h2
          style={{
            fontSize: "52px",
            textAlign: "center",
            marginBottom: "70px",
          }}
        >
          Powerful AI Tools
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(300px,1fr))",
            gap: "30px",
          }}
        >
          {[
            "AI Blog Generator",
            "AI Ad Generator",
            "AI Email Writer",
            "AI Landing Pages",
            "AI Product Description",
            "AI Script Generator",
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "#0f172a",
                padding: "40px",
                borderRadius: "20px",
                border: "1px solid #1e293b",
              }}
            >
              <h3
                style={{
                  fontSize: "28px",
                  marginBottom: "20px",
                }}
              >
                {item}
              </h3>

              <p
                style={{
                  color: "#94a3b8",
                  lineHeight: 1.7,
                }}
              >
                Generate professional marketing content
                instantly using powerful AI models.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        style={{
          padding: "80px 8%",
        }}
      >
        <h2
          style={{
            fontSize: "52px",
            textAlign: "center",
            marginBottom: "70px",
          }}
        >
          What Users Say
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(300px,1fr))",
            gap: "30px",
          }}
        >
          {[
            "This AI tool saves me 10+ hours weekly.",
            "Perfect for affiliate marketers.",
            "I replaced expensive copywriters.",
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "#0f172a",
                padding: "40px",
                borderRadius: "20px",
              }}
            >
              <p
                style={{
                  color: "#cbd5e1",
                  lineHeight: 1.8,
                  fontSize: "18px",
                }}
              >
                "{item}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "120px 8%",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "58px",
            marginBottom: "30px",
          }}
        >
          Start Your AI Business Today
        </h2>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "22px",
            marginBottom: "40px",
          }}
        >
          Join thousands using FabricAI to scale faster.
        </p>

        <Link
          to="/register"
          style={{
            background: "#2563eb",
            color: "white",
            padding: "20px 50px",
            borderRadius: "12px",
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