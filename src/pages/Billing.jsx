import axios from "axios";

export default function Billing() {

  const startPayment = async (
    plan,
    amount,
    duration
  ) => {

    try {

      const response = await axios.post(
        "https://fabricai-backend.onrender.com/api/payment/create-order",
        {
          amount,
        }
      );

      const options = {
        key: "rzp_live_SngV5d3BGmZJ1p",

        amount: response.data.amount,

        currency: response.data.currency,

        name: "FabricAI Pro",

        description: `${plan} - ${duration}`,

        order_id: response.data.id,

        handler: function () {
          alert(
            `${plan} ${duration} Activated Successfully`
          );

          window.location.href = "/dashboard";
        },

        theme: {
          color: "#2563eb",
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.open();

    } catch (error) {

      console.log(error);

      alert("Backend Payment Error");

    }
  };

  return (
    <div
      style={{
        background: "#020617",
        minHeight: "100vh",
        color: "white",
        padding: "60px 20px",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "60px",
          marginBottom: "20px",
        }}
      >
        Choose Your Plan
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#cbd5e1",
          fontSize: "22px",
          marginBottom: "70px",
        }}
      >
        Affordable AI SaaS for creators, marketers & agencies
      </p>

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(350px,1fr))",
          gap: "40px",
        }}
      >

        {/* STARTER */}

        <div
          style={{
            background: "#0f172a",
            borderRadius: "25px",
            padding: "40px",
            border: "1px solid #1e293b",
          }}
        >
          <h2
            style={{
              fontSize: "40px",
              marginBottom: "20px",
            }}
          >
            Starter
          </h2>

          <h1
            style={{
              fontSize: "70px",
              color: "#3b82f6",
            }}
          >
            ₹50
          </h1>

          <p
            style={{
              color: "#94a3b8",
              marginBottom: "30px",
            }}
          >
            Perfect for beginners
          </p>

          <div
            style={{
              display: "grid",
              gap: "15px",
            }}
          >

            <button
              style={buttonStyle}
              onClick={() =>
                startPayment(
                  "Starter",
                  50,
                  "1 Month"
                )
              }
            >
              ₹50 / Month
            </button>

            <button
              style={buttonStyle}
              onClick={() =>
                startPayment(
                  "Starter",
                  120,
                  "3 Months"
                )
              }
            >
              ₹120 / 3 Months
            </button>

            <button
              style={buttonStyle}
              onClick={() =>
                startPayment(
                  "Starter",
                  199,
                  "6 Months"
                )
              }
            >
              ₹199 / 6 Months
            </button>

            <button
              style={buttonStyle}
              onClick={() =>
                startPayment(
                  "Starter",
                  399,
                  "1 Year"
                )
              }
            >
              ₹399 / Year
            </button>
          </div>
        </div>

        {/* PRO */}

        <div
          style={{
            background:
              "linear-gradient(to bottom,#2563eb,#1d4ed8)",
            borderRadius: "25px",
            padding: "40px",
            transform: "scale(1.03)",
            boxShadow:
              "0 0 40px rgba(37,99,235,0.4)",
          }}
        >
          <h2
            style={{
              fontSize: "40px",
              marginBottom: "20px",
            }}
          >
            Pro
          </h2>

          <h1
            style={{
              fontSize: "70px",
            }}
          >
            ₹149
          </h1>

          <p
            style={{
              marginBottom: "30px",
            }}
          >
            Best for professionals
          </p>

          <div
            style={{
              display: "grid",
              gap: "15px",
            }}
          >

            <button
              style={whiteButton}
              onClick={() =>
                startPayment(
                  "Pro",
                  149,
                  "1 Month"
                )
              }
            >
              ₹149 / Month
            </button>

            <button
              style={whiteButton}
              onClick={() =>
                startPayment(
                  "Pro",
                  399,
                  "3 Months"
                )
              }
            >
              ₹399 / 3 Months
            </button>

            <button
              style={whiteButton}
              onClick={() =>
                startPayment(
                  "Pro",
                  699,
                  "6 Months"
                )
              }
            >
              ₹699 / 6 Months
            </button>

            <button
              style={whiteButton}
              onClick={() =>
                startPayment(
                  "Pro",
                  1499,
                  "1 Year"
                )
              }
            >
              ₹1499 / Year
            </button>
          </div>
        </div>

        {/* AGENCY */}

        <div
          style={{
            background: "#0f172a",
            borderRadius: "25px",
            padding: "40px",
            border: "1px solid #1e293b",
          }}
        >
          <h2
            style={{
              fontSize: "40px",
              marginBottom: "20px",
            }}
          >
            Agency
          </h2>

          <h1
            style={{
              fontSize: "70px",
              color: "#3b82f6",
            }}
          >
            ₹499
          </h1>

          <p
            style={{
              color: "#94a3b8",
              marginBottom: "30px",
            }}
          >
            For agencies & teams
          </p>

          <div
            style={{
              display: "grid",
              gap: "15px",
            }}
          >

            <button
              style={buttonStyle}
              onClick={() =>
                startPayment(
                  "Agency",
                  499,
                  "1 Month"
                )
              }
            >
              ₹499 / Month
            </button>

            <button
              style={buttonStyle}
              onClick={() =>
                startPayment(
                  "Agency",
                  1299,
                  "3 Months"
                )
              }
            >
              ₹1299 / 3 Months
            </button>

            <button
              style={buttonStyle}
              onClick={() =>
                startPayment(
                  "Agency",
                  2499,
                  "6 Months"
                )
              }
            >
              ₹2499 / 6 Months
            </button>

            <button
              style={buttonStyle}
              onClick={() =>
                startPayment(
                  "Agency",
                  4999,
                  "1 Year"
                )
              }
            >
              ₹4999 / Year
            </button>
          </div>
        </div>

      </div>

      {/* INTERNATIONAL */}

      <div
        style={{
          marginTop: "120px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "50px",
            marginBottom: "20px",
          }}
        >
          International Pricing
        </h2>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: "50px",
            fontSize: "20px",
          }}
        >
          WarriorPlus & JVZoo Pricing
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >

          <div style={usdCard}>
            <h2>Starter</h2>
            <h1>$2/mo</h1>
            <p>$19/year</p>
          </div>

          <div style={usdCard}>
            <h2>Pro</h2>
            <h1>$5/mo</h1>
            <p>$49/year</p>
          </div>

          <div style={usdCard}>
            <h2>Agency</h2>
            <h1>$17/mo</h1>
            <p>$149/year</p>
          </div>

        </div>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: "16px",
  border: "none",
  borderRadius: "12px",
  background: "#2563eb",
  color: "white",
  fontSize: "18px",
  cursor: "pointer",
  fontWeight: "bold",
};

const whiteButton = {
  padding: "16px",
  border: "none",
  borderRadius: "12px",
  background: "white",
  color: "#2563eb",
  fontSize: "18px",
  cursor: "pointer",
  fontWeight: "bold",
};

const usdCard = {
  background: "#0f172a",
  padding: "40px",
  borderRadius: "20px",
  width: "280px",
  border: "1px solid #1e293b",
};