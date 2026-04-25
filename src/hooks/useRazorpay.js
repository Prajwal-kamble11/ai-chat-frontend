import { useAuth, useUser } from "@clerk/clerk-react";
import { toast } from "react-hot-toast";

export function useRazorpay() {
  const { getToken } = useAuth();
  const { user } = useUser();

  const upgradeToPro = async () => {
    try {
      const token = await getToken();
      if (!token) {
        toast.error("Your session has expired. Please log in again.");
        return;
      }

      // 1. Create Order on Backend
      const orderRes = await fetch(`${import.meta.env.VITE_API_URL}/payment/create-order`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` }
      });
      const orderData = await orderRes.json();
      if (!orderRes.ok) {
        throw new Error(orderData.message || orderData.detail || "Order creation failed");
      }

      // 2. Configure Razorpay Options
      const options = {
        key: orderData.razorpay_key,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "AMI Pro Plan",
        description: "Unlock 500 messages/day & smarter memory for just ₹99",
        order_id: orderData.order_id,
        handler: async function (response) {
          // Fetch a fresh token for verification as payment might have taken time
          const freshToken = await getToken();

          const verifyRes = await fetch(`${import.meta.env.VITE_API_URL}/payment/verify`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${freshToken}`
            },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature
            })
          });

          if (verifyRes.ok) {
            toast.success("Congratulations! You are now a Pro Member! 🚀", { duration: 5000 });
            setTimeout(() => window.location.reload(), 1500);
          } else {
            toast.error("Verification failed. Please contact support.");
          }
        },
        prefill: {
          name: user?.fullName,
          email: user?.primaryEmailAddress?.emailAddress
        },
        theme: { color: "#7c3aed" }
      };

      // 3. Open Razorpay
      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (error) {
      console.error("Payment error:", error);
      toast.error(`Payment failed: ${error.message || "Something went wrong"}`);
    }
  };

  return { upgradeToPro };
}
