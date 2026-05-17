import axios from "axios";

const API =
  "https://fabricai-backend.onrender.com";

export default function Billing() {
  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script =
        document.createElement("script");

      script.src =
        "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    try {
      const loaded =
        await loadRazorpay();

      if (!loaded) {
        alert(
          "Razorpay SDK failed to load"
        );
        return;
      }

      const orderResponse =
        await axios.post(
          `${API}/api/payment/create-order`
        );

      const order =
        orderResponse.data;

      const options = {
        key: "rzp_live_SngV5d3BGmZJ1p",

        amount: order.amount,

        currency: order.currency,

        name: "FabricAI Pro",

        description:
          "Premium AI Subscription",

        order_id: order.id,

        handler: async function (
          response
        ) {
          try {
            const verifyRes =
              await axios.post(
                `${API}/api/payment/verify-payment`,
                response
              );

            if (
              verifyRes.data.success
            ) {
              alert(
                "Payment Successful"
              );
            } else {
              alert(
                "Payment Verification Failed"
              );
            }
          } catch (err) {
            console.log(err);

            alert(
              "Verification Error"
            );
          }
        },

        theme: {
          color: "#2563eb",
        },
      };

      const paymentObject =
        new window.Razorpay(options);

      paymentObject.open();
    } catch (error) {
      console.log(error);

      alert("Payment Failed");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "#111",
          padding: "40px",
          borderRadius: "20px",
          width: "400px",
          textAlign: "center",
        }}
      >
        <h1>Upgrade Plan</h1>

        <p>
          Unlock premium AI features
        </p>

        <button
          onClick={handlePayment}
          style={{
            marginTop: "20px",
            padding: "15px 30px",
            border: "none",
            borderRadius: "10px",
            background: "#2563eb",
            color: "#fff",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Pay ₹499
        </button>
      </div>
    </div>
  );
}