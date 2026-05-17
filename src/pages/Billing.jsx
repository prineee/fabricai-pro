import api from "../services/api";

const Billing = () => {
  const handlePayment = async () => {
    try {
      const order = await api.post("/payment/create-order", {
        amount: 499,
      });

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY,
        amount: order.data.amount,
        currency: "INR",
        name: "FabricAI Pro",
        description: "Premium Subscription",
        order_id: order.data.id,

        handler: async function (response) {
          try {
            await api.post("/payment/verify", response);

            alert("Payment Successful");
          } catch (error) {
            console.error(error);
            alert("Verification Failed");
          }
        },

        theme: {
          color: "#2563eb",
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error(error);
      alert("Payment Failed");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="bg-zinc-900 p-10 rounded-2xl text-center">
        <h1 className="text-4xl font-bold mb-4">
          Upgrade Plan
        </h1>

        <p className="text-zinc-400 mb-8">
          Unlock premium AI features
        </p>

        <button
          onClick={handlePayment}
          className="bg-blue-600 px-8 py-4 rounded-xl text-lg"
        >
          Pay ₹499
        </button>
      </div>
    </div>
  );
};

export default Billing;