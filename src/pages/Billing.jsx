import axios from "axios";

export default function Billing() {

  const startPayment = async (plan, amount) => {
    try {

      const response = await axios.post(
        "https://fabricai-backend.onrender.com/api/payment/create-order",
        {
          amount,
          plan,
        }
      );

      if (response.data.success) {
        alert(plan + " Plan Activated Successfully");
      } else {
        alert("Payment Failed");
      }

    } catch (error) {
      console.log(error);
      alert("Backend Payment Error");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "52px",
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
            marginBottom: "60px",
            fontSize: "20px",
          }}
        >
          Unlock premium AI tools for your business
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "30px",
          }}
        >

          {/* STARTER */}
          <div
            style={{
              background: "#0f172a",
              padding: "40px",
              borderRadius: "24px",
              textAlign: "center",
              border: "1px solid #1e293b",
            }}
          >
            <h2 style={{ fontSize: "32px" }}>Starter</h2>

            <h1
              style={{
                fontSize: "56px",
                margin: "20px 0",
              }}
            >
              ₹499
            </h1>

            <p style={{ color: "#94a3b8" }}>
              Perfect for beginners
            </p>

            <div
              style={{
                marginTop: "30px",
                lineHeight: "2",
                color: "#cbd5e1",
              }}
            >
              <p>✓ AI Chat</p>
              <p>✓ 10,000 Tokens</p>
              <p>✓ Email Support</p>
            </div>

            <button
              onClick={() => startPayment("Starter", 499)}
              style={{
                marginTop: "35px",
                width: "100%",
                padding: "16px",
                borderRadius: "12px",
                border: "none",
                background: "#2563eb",
                color: "white",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              Get Starter
            </button>
          </div>

          {/* PRO */}
          <div
            style={{
              background: "#2563eb",
              padding: "40px",
              borderRadius: "24px",
              textAlign: "center",
              transform: "scale(1.05)",
            }}
          >
            <h2 style={{ fontSize: "32px" }}>Pro</h2>

            <h1
              style={{
                fontSize: "56px",
                margin: "20px 0",
              }}
            >
              ₹1499
            </h1>

            <p>
              Most popular plan
            </p>

            <div
              style={{
                marginTop: "30px",
                lineHeight: "2",
              }}
            >
              <p>✓ Unlimited AI Chat</p>
              <p>✓ Marketing Tools</p>
              <p>✓ Fast Responses</p>
              <p>✓ Priority Support</p>
            </div>

            <button
              onClick={() => startPayment("Pro", 1499)}
              style={{
                marginTop: "35px",
                width: "100%",
                padding: "16px",
                borderRadius: "12px",
                border: "none",
                background: "white",
                color: "#2563eb",
                fontSize: "18px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Upgrade To Pro
            </button>
          </div>

          {/* AGENCY */}
          <div
            style={{
              background: "#0f172a",
              padding: "40px",
              borderRadius: "24px",
              textAlign: "center",
              border: "1px solid #1e293b",
            }}
          >
            <h2 style={{ fontSize: "32px" }}>Agency</h2>

            <h1
              style={{
                fontSize: "56px",
                margin: "20px 0",
              }}
            >
              ₹4999
            </h1>

            <p style={{ color: "#94a3b8" }}>
              For businesses & teams
            </p>

            <div
              style={{
                marginTop: "30px",
                lineHeight: "2",
                color: "#cbd5e1",
              }}
            >
              <p>✓ Team Access</p>
              <p>✓ White Label</p>
              <p>✓ API Access</p>
              <p>✓ Premium Support</p>
            </div>

            <button
              onClick={() => startPayment("Agency", 4999)}
              style={{
                marginTop: "35px",
                width: "100%",
                padding: "16px",
                borderRadius: "12px",
                border: "none",
                background: "#2563eb",
                color: "white",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              Get Agency
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}