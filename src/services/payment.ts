declare global {
  interface Window {
    Razorpay: any;
  }
}

export const initializePayment = async (
  amount: number,
  plan: string
) => {
  try {
    // CREATE ORDER
    const orderResponse = await fetch(
      "http://localhost:5000/api/payment/create-order",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          amount,
        }),
      }
    );

    const orderData = await orderResponse.json();

    // RAZORPAY OPTIONS
    const options = {
      key: "rzp_test_Snl0fOSSYhWZhl",

      amount: orderData.amount,

      currency: orderData.currency,

      name: "FabricAI Pro",

      description: `${plan} Subscription`,

      order_id: orderData.id,

      handler: async function (response: any) {
        try {
          // VERIFY PAYMENT
          const verifyResponse = await fetch(
            "http://localhost:5000/api/payment/verify-payment",
            {
              method: "POST",

              headers: {
                "Content-Type": "application/json",
              },

              body: JSON.stringify({
                razorpay_order_id:
                  response.razorpay_order_id,

                razorpay_payment_id:
                  response.razorpay_payment_id,

                razorpay_signature:
                  response.razorpay_signature,
              }),
            }
          );

          const verifyData =
            await verifyResponse.json();

          // PAYMENT SUCCESS
          if (verifyData.success) {
            alert("Payment Successful!");

            // SAVE PLAN
            localStorage.setItem(
              "fabricai_plan",
              plan
            );

            localStorage.setItem(
              "payment_success",
              "true"
            );

            // REDIRECT
            window.location.href = "/";
          } else {
            alert(
              "Payment Verification Failed"
            );
          }
        } catch (error) {
          console.log(error);

          alert("Verification Error");
        }
      },

      prefill: {
        name: "Naveen Kumar",

        email: "demo@fabricai.com",

        contact: "9999999999",
      },

      theme: {
        color: "#059669",
      },
    };

    // OPEN PAYMENT WINDOW
    const paymentObject =
      new window.Razorpay(options);

    paymentObject.open();
  } catch (error) {
    console.log(error);

    alert("Payment Failed");
  }
};

export {};