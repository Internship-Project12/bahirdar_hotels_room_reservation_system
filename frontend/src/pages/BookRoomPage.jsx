import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import MaxWidthWrapper from "../ui/MaxWidthWrapper";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../ui/Spinner";
import { useBookingContext } from "../context/BookingContext";
import { useEffect, useState } from "react";
import apiBookings from "../services/apiBookings";

function BookRoomPage() {
  const { checkIn, checkOut } = useBookingContext();
  const [paymentData, setPaymentData] = useState();
  const navigate = useNavigate();

  const { roomId } = useParams();

  const { mutate, isPending } = useMutation({
    mutationFn: () =>
      apiBookings.acceptPaymentChapa({
        roomId,
        checkIn,
        checkOut,
      }),
    onSuccess: (data) => {
      // console.log("paymentData: ", data);
      setPaymentData(data);
    },
    onError: (error) => {
      console.log(error);
      toast.error("An error occurred when proceeding to payment");
      navigate(-1);
    },
  });

  useEffect(() => {
    if (!checkIn || !checkOut) {
      return navigate(-1);
    }

    if (checkIn && checkOut) {
      mutate();
    }
  }, [checkIn, checkOut, mutate, navigate]);

  if (isPending) return <Spinner />;

  if (!paymentData) return null;

  const {
    checkInDate,
    checkOutDate,
    numOfNights,
    totalPrice,
    chapa,
    room,
    hotel,
  } = paymentData;

  if (!chapa || !room || !hotel) return null;

  const {
    roomNumber,
    roomType,
    pricePerNight,
    capacity,
    images: roomImages,
  } = room;
  const { name, imageCover, address, summary } = hotel;
  const {
    data: { checkout_url },
  } = chapa;

  return (
    <section className="min-h-screen">
      <MaxWidthWrapper>
        <div className="mx-auto min-h-screen w-3/4 space-y-10 rounded border p-5 text-center lg:text-left">
          <div className="flex flex-col text-center md:flex-row md:text-left">
            <div>
              <img
                src={imageCover}
                alt="hotel image"
                className="mx-auto h-[14rem] w-[16rem] object-cover"
              />
            </div>
            <div className="space-3 ml-5 md:mt-4">
              <h1 className="text-xl font-semibold">Book a Room In {name}</h1>
              <p className="text-sm">{summary}</p>
              <p className="text-sm"> {address}</p>
            </div>
          </div>

          <div>
            <div className="mx-auto mt-5 grid flex-1 grid-cols-1 items-center justify-start gap-4 lg:grid-cols-2">
              <p className="w-full space-x-3 rounded bg-slate-200 px-5 py-1 text-sm">
                Room Number: <span className="text-sm">{roomNumber}</span>
              </p>
              <p className="w-full space-x-3 rounded bg-slate-200 px-5 py-1 text-sm">
                Room Type: <span className="ml-2 text-sm">{roomType}</span>
              </p>
              <p className="w-full space-x-3 rounded bg-slate-200 px-5 py-1 text-sm">
                Price Per Night:{" "}
                <span className="ml-2 text-sm">${pricePerNight}</span>
              </p>
              <p className="w-full space-x-3 rounded bg-slate-200 px-5 py-1 text-sm">
                Number of nights:{" "}
                <span className="ml-2 text-sm">{numOfNights}</span>
              </p>
              <p className="w-full space-x-3 rounded bg-slate-200 px-5 py-1 text-sm">
                total price: <span className="ml-2 text-sm">${totalPrice}</span>
              </p>
              <p className="w-full space-x-3 rounded bg-slate-200 px-5 py-1 text-sm">
                Number of People:{" "}
                <span className="ml-2 text-sm">{capacity}</span>
              </p>
              <p className="w-full space-x-3 rounded bg-slate-200 px-5 py-1 text-sm">
                Check In Date:{" "}
                <span className="ml-2 text-sm">
                  {new Date(checkInDate).toDateString()}
                </span>
              </p>
              <p className="w-full space-x-3 rounded bg-slate-200 px-5 py-1 text-sm">
                Check Out Date:{" "}
                <span className="ml-2 text-sm">
                  {new Date(checkOutDate).toDateString()}
                </span>
              </p>
            </div>

            <div className="my-5 grid grid-cols-1 place-items-center gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[...roomImages, ...roomImages].map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="room"
                  className="h-[13rem] w-[16rem] object-cover"
                />
              ))}
            </div>

            {/* PAYMENT METHODS TO BOOK A ROOM */}
            <div>
              <h2 className="my-3 text-center text-xl font-semibold">
                Payment Methods
              </h2>
              <div className="flex items-center justify-center">
                <div>
                  <a href="https://chapa.co/" target="_blank">
                    <img
                      src="/chapa.png"
                      alt="chapa image"
                      className="h-16 w-36"
                    />
                  </a>
                </div>
                <a
                  href={checkout_url}
                  className="rounded bg-lime-500 px-5 py-3 text-white transition duration-300 hover:bg-lime-600"
                >
                  continue paying with chapa
                </a>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default BookRoomPage;

// TODO: Add a button to continue paying with stripe
