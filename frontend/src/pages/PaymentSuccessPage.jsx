import {
  Navigate,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import MaxWidthWrapper from "../ui/MaxWidthWrapper";
import { useMutation } from "@tanstack/react-query";
import apiBookings from "../services/apiBookings";
import { useEffect } from "react";
import toast from "react-hot-toast";

import Spinner from "../ui/Spinner";
function PaymentSuccessPage() {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const hotelId = searchParams.get("hotelId");
  const tx_ref = searchParams.get("tx_ref");
  const checkIn = searchParams.get("amp;checkIn");
  const checkOut = searchParams.get("amp;checkOut");

  const { mutate, isPending } = useMutation({
    mutationFn: () =>
      apiBookings.verifyPaymentChapa({ tx_ref, roomId, checkIn, checkOut }),
    onSuccess: () => {
      toast.success("Payment successful. You have successfully booked a room");
    },
    onError: (error) => {
      console.log(error);
      navigate(`/hotels/${hotelId}/rooms/${roomId}`);
    },
  });

  useEffect(() => {
    if (tx_ref && !isPending) {
      searchParams.set("tx_ref", "");
      setSearchParams(searchParams);
    }
    if (tx_ref) {
      mutate();
    }
  }, [isPending]);

  if (isPending)
    return (
      <section className="min-h-screen">
        <MaxWidthWrapper>
          <div className="mx-auto min-h-screen w-3/4 space-y-10 rounded border p-5 text-center lg:text-left">
            <Spinner />
          </div>
        </MaxWidthWrapper>
      </section>
    );

  return <Navigate to={`/account/bookings`} replace={true} />;
}

export default PaymentSuccessPage;
