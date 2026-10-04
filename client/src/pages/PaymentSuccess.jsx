import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { axios, getToken } = useAppContext();

  useEffect(() => {
    const verifyPayment = async () => {
      const reference = searchParams.get("reference");

      if (!reference) {
        toast.error("Invalid payment reference.");
        return navigate("/MyBookings");
      }

      try {
        const token = await getToken();

        const { data } = await axios.get(
          `/api/bookings/verify/${reference}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (data.success) {
          toast.success("Payment successful!");
        } else {
          toast.error(data.message || "Payment verification failed.");
        }

        navigate("/MyBookings");
      } catch (error) {
        toast.error(
          error.response?.data?.message || "Payment verification failed."
        );
        navigate("/MyBookings");
      }
    };

    verifyPayment();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent"></div>

      <h2 className="mt-6 text-2xl font-semibold">
        Verifying Payment...
      </h2>

      <p className="text-gray-500 mt-2">
        Please wait while we confirm your payment.
      </p>
    </div>
  );
};

export default PaymentSuccess;