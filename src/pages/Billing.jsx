import axios from "axios";

export default function Billing() {

  const startPayment = async () => {

    try {

      const { data } = await axios.post(
        "https://fabricai-backend.onrender.com/api/payment/create-order"
      );

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,

        amount: data.amount,
        currency: data.currency,
        name: "FabricAI Pro",
        description: "Premium AI Subscription",
        order_id: data.id,

        handler: function (response) {

          alert("Payment Successful");

          console.log(response);
        },

        prefill: {
          name: "Customer",
          email: "customer@example.com",
        },

        theme: {
          color: "#2563eb",
        },
      };

      const razor = new window.Razorpay(options);

      razor.open();

    } catch (error) {

      console.log(error);

      alert("Payment Failed");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "450px",
          padding: "50px",
          background: "#111",
          borderRadius: "20px",
          textAlign: "center",
          border: "1px solid #222",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "42px",
          }}
        >
          Upgrade To Pro
        </h1>

        <h2
          style={{
            color: "#2563eb",
            fontSize: "60px",
          }}
        >
          ₹499
        </h2>

        <p
          style={{
            color: "#aaa",
            lineHeight: "1.7",
            marginBottom: "30px",
          }}
        >
          Unlock premium AI features, advanced dashboard access,
          business automation tools and commercial license.
        </p>

        <button
          onClick={startPayment}
          style={{
            width: "100%",
            padding: "18px",
            background: "#2563eb",
            border: "none",
            borderRadius: "12px",
            color: "white",
            fontSize: "22px",
            cursor: "pointer",
          }}
        >
          Upgrade Now
        </button>
      </div>
    </div>
  );
}