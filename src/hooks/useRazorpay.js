import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-hot-toast";

export function useRazorpay() {
  const { token, user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const upgradeToPro = async () => {
    if (isLoading) return;
    setIsLoading(true);
    
    try {
      if (!token) {
        toast.error("Your session has expired. Please log in again.");
        setIsLoading(false);
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
        modal: {
          ondismiss: function() {
            setIsLoading(false);
          }
        },
        handler: async function (response) {
          const verifyRes = await fetch(`${import.meta.env.VITE_API_URL}/payment/verify`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
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
            setIsLoading(false);
          }
        },
        prefill: {
          name: user?.full_name,
          email: user?.email
        },
        theme: { color: "#7c3aed" }
      };

      // 3. Open Razorpay
      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (error) {
      console.error("Payment error:", error);
      toast.error(`Payment failed: ${error.message || "Something went wrong"}`);
      setIsLoading(false);
    }
  };

  return { upgradeToPro, isLoading };
}
