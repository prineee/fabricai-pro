import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div
      style={{
        background: "#020617",
        color: "white",
        fontFamily: "Arial",
        overflowX: "hidden",
      }}
    >
      {/* HERO SECTION */}

      <section
        style={{
          minHeight: "100vh",
          padding: "80px 8%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background:
            "linear-gradient(to bottom right,#020617,#081028,#0f172a)",
        }}
      >
        <div
          style={{
            background: "#2563eb",
            color: "white",
            display: "inline-block",
            padding: "10px 20px",
            borderRadius: "50px",
            fontWeight: "bold",
            marginBottom: "30px",
            width: "fit-content",
          }}
        >
          🔥 AI SaaS Platform For Marketers, Agencies & Creators
        </div>

        <h1
          style={{
            fontSize: "78px",
            lineHeight: "1.1",
            fontWeight: "bold",
            maxWidth: "1000px",
            marginBottom: "30px",
          }}
        >
          Create High-Converting AI Content In Seconds &
          Grow Your Online Business Faster
        </h1>

        <p
          style={{
            fontSize: "28px",
            color: "#cbd5e1",
            maxWidth: "900px",
            lineHeight: "1.7",
            marginBottom: "50px",
          }}
        >
          FabricAI Pro helps marketers, agencies, freelancers and
          business owners generate blogs, ads, emails, scripts,
          landing pages and product descriptions instantly using AI.
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            marginBottom: "40px",
          }}
        >
          <Link to="/register">
            <button
              style={{
                background: "#2563eb",
                color: "white",
                border: "none",
                padding: "22px 50px",
                borderRadius: "18px",
                fontSize: "22px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              🚀 Start Free Trial
            </button>
          </Link>

          <Link to="/billing">
            <button
              style={{
                background: "transparent",
                color: "white",
                border: "2px solid #2563eb",
                padding: "22px 50px",
                borderRadius: "18px",
                fontSize: "22px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              View Pricing
            </button>
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            gap: "30px",
            flexWrap: "wrap",
            color: "#94a3b8",
            fontSize: "18px",
          }}
        >
          <span>✅ No Coding Needed</span>
          <span>✅ Instant AI Content</span>
          <span>✅ Commercial License</span>
          <span>✅ Agency Ready</span>
        </div>
      </section>

      {/* VIDEO DEMO */}

      <section
        style={{
          padding: "100px 8%",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "60px",
            marginBottom: "20px",
          }}
        >
          Watch FabricAI Pro In Action
        </h2>

        <p
          style={{
            color: "#cbd5e1",
            fontSize: "24px",
            marginBottom: "50px",
          }}
        >
          Generate complete marketing content in under 30 seconds
        </p>

        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            borderRadius: "30px",
            overflow: "hidden",
            boxShadow: "0 0 40px rgba(37,99,235,0.3)",
          }}
        >
          <iframe
            width="100%"
            height="560"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="FabricAI Demo"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* FEATURES */}

      <section
        style={{
          padding: "100px 8%",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "64px",
            marginBottom: "70px",
          }}
        >
          Powerful AI Tools Included
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "30px",
          }}
        >
          {features.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#081028",
                padding: "40px",
                borderRadius: "24px",
                border: "1px solid #1e293b",
              }}
            >
              <h3
                style={{
                  fontSize: "32px",
                  marginBottom: "20px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#cbd5e1",
                  lineHeight: "1.8",
                  fontSize: "20px",
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* AI EXAMPLES */}

      <section
        style={{
          padding: "100px 8%",
          background: "#081028",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "64px",
            marginBottom: "70px",
          }}
        >
          AI Generated Examples
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(450px,1fr))",
            gap: "30px",
          }}
        >
          {examples.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#020617",
                padding: "35px",
                borderRadius: "20px",
              }}
            >
              <h3
                style={{
                  color: "#2563eb",
                  marginBottom: "20px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#cbd5e1",
                  lineHeight: "1.8",
                }}
              >
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}

      <section
        style={{
          padding: "100px 8%",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "64px",
            marginBottom: "70px",
          }}
        >
          Why Businesses Love FabricAI
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "30px",
          }}
        >
          {benefits.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#081028",
                padding: "40px",
                borderRadius: "24px",
              }}
            >
              <h3
                style={{
                  marginBottom: "20px",
                  fontSize: "28px",
                }}
              >
                {item}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}

      <section
        style={{
          padding: "100px 8%",
          background: "#081028",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "64px",
            marginBottom: "70px",
          }}
        >
          Real User Success Stories
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))",
            gap: "30px",
          }}
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#020617",
                padding: "40px",
                borderRadius: "24px",
              }}
            >
              <p
                style={{
                  lineHeight: "1.8",
                  color: "#cbd5e1",
                  marginBottom: "30px",
                }}
              >
                "{item.review}"
              </p>

              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* URGENCY */}

      <section
        style={{
          padding: "100px 8%",
          textAlign: "center",
        }}
      >
        <div
          style={{
            background: "#dc2626",
            padding: "50px",
            borderRadius: "30px",
          }}
        >
          <h2
            style={{
              fontSize: "60px",
              marginBottom: "20px",
            }}
          >
            ⚠ Limited Founder Pricing Ending Soon
          </h2>

          <p
            style={{
              fontSize: "28px",
              marginBottom: "40px",
            }}
          >
            Get lifetime early access pricing before prices increase.
          </p>

          <Link to="/billing">
            <button
              style={{
                background: "white",
                color: "#dc2626",
                border: "none",
                padding: "24px 60px",
                borderRadius: "18px",
                fontSize: "24px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Claim Discount Now
            </button>
          </Link>
        </div>
      </section>

      {/* FAQ */}

      <section
        style={{
          padding: "100px 8%",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "64px",
            marginBottom: "70px",
          }}
        >
          Frequently Asked Questions
        </h2>

        {faq.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#081028",
              padding: "35px",
              borderRadius: "20px",
              marginBottom: "20px",
            }}
          >
            <h3
              style={{
                marginBottom: "15px",
                fontSize: "28px",
              }}
            >
              {item.q}
            </h3>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.8",
              }}
            >
              {item.a}
            </p>
          </div>
        ))}
      </section>

      {/* FINAL CTA */}

      <section
        style={{
          padding: "120px 8%",
          textAlign: "center",
          background:
            "linear-gradient(to right,#2563eb,#1d4ed8)",
        }}
      >
        <h2
          style={{
            fontSize: "70px",
            marginBottom: "30px",
          }}
        >
          Ready To Scale Faster With AI?
        </h2>

        <p
          style={{
            fontSize: "28px",
            marginBottom: "50px",
          }}
        >
          Join FabricAI Pro today and start generating
          high-converting content instantly.
        </p>

        <Link to="/register">
          <button
            style={{
              background: "white",
              color: "#2563eb",
              border: "none",
              padding: "26px 70px",
              borderRadius: "20px",
              fontSize: "28px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            🚀 Create Free Account
          </button>
        </Link>
      </section>
    </div>
  );
}

/* ======================================
   DATA
====================================== */

const features = [
  {
    title: "AI Blog Generator",
    desc:
      "Generate SEO optimized blogs and articles instantly for any niche.",
  },

  {
    title: "AI Ad Generator",
    desc:
      "Create high converting Facebook, Instagram and Google ads using AI.",
  },

  {
    title: "AI Email Writer",
    desc:
      "Generate sales emails, newsletters and marketing campaigns instantly.",
  },

  {
    title: "AI Landing Pages",
    desc:
      "Create persuasive landing page copy for products and services.",
  },

  {
    title: "AI Product Descriptions",
    desc:
      "Generate ecommerce descriptions that increase conversions.",
  },

  {
    title: "AI Video Scripts",
    desc:
      "Create engaging video scripts for YouTube, VSLs and ads.",
  },
];

const examples = [
  {
    title: "AI Blog Example",
    content:
      "10 Proven Ways To Increase Ecommerce Sales Using AI Marketing Automation...",
  },

  {
    title: "AI Ad Example",
    content:
      "Stop wasting money on ads! Discover the AI tool helping businesses increase conversions by 300%...",
  },

  {
    title: "AI Email Example",
    content:
      "Subject: Your competitors are already using AI. Are you?",
  },

  {
    title: "AI Landing Page Example",
    content:
      "Generate stunning AI-powered landing pages that convert visitors into paying customers...",
  },
];

const benefits = [
  "Save 10+ hours every week",
  "Generate content instantly",
  "Increase marketing conversions",
  "Scale your business faster",
  "Perfect for agencies & freelancers",
  "Commercial usage included",
];

const testimonials = [
  {
    name: "Michael T.",
    review:
      "FabricAI helped me generate content for 12 clients in one day. Absolutely insane productivity.",
  },

  {
    name: "Sarah J.",
    review:
      "This is one of the best AI marketing tools I have used. The landing page generator alone is worth it.",
  },

  {
    name: "David K.",
    review:
      "My agency now creates ads and emails 5x faster using FabricAI.",
  },
];

const faq = [
  {
    q: "Do I need technical skills?",
    a:
      "No. FabricAI is beginner friendly and works with simple prompts.",
  },

  {
    q: "Can I use generated content commercially?",
    a:
      "Yes. All paid plans include commercial rights.",
  },

  {
    q: "Does FabricAI support agencies?",
    a:
      "Yes. Agency plans allow client usage and scaling.",
  },

  {
    q: "Is there a refund policy?",
    a:
      "Yes. We offer a 7-day refund policy for eligible purchases.",
  },
];