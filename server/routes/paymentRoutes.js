app.post("/api/payment/create-order", async (req, res) => {
  try {

    console.log("PAYMENT API HIT");

    console.log("KEY ID:", process.env.RAZORPAY_KEY_ID);

    const options = {
      amount: 49900,
      currency: "INR",
      receipt: "receipt_order_1",
    };

    const order = await razorpay.orders.create(options);

    console.log(order);

    res.json(order);

  } catch (error) {

    console.log("FULL PAYMENT ERROR:");
    console.log(error);

    res.status(500).json({
      error: "Payment backend failed",
      details: error.message,
    });
  }
});