import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "../../context/AuthContext";
import formatDate from "../../utils/formatDate";
import QueryKey from "../../constants/QueryKey";
import apiBookings from "../../services/apiBookings";
import Spinner from "../../ui/Spinner";

function MyBookings() {
  const { user } = useAuthContext();

  const { data: { data: { bookings } = {} } = {}, isLoading } = useQuery({
    queryKey: [QueryKey.BOOKINGS, user._id],
    queryFn: () => apiBookings.getAllMyBookings({ userId: user._id }),
  });

  if (isLoading) return <Spinner />;
  // console.log(user.bookings.length);

  if (bookings?.length < 1) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <span className="text-4xl font-medium text-gray-500 uppercase">You have no bookings yet.</span>
          <span className="border-4 rounded-full border-slate-500 w-1/2"></span>
          {/* <span className="text-9xl text-white">🤷</span> */}
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <div className="mb-2 grid grid-cols-10 items-center gap-2 border-b border-slate-200 bg-slate-200 p-3">
        <div className="col-span-2 col-start-1">Hotel</div>
        <div className="col-span-1 col-start-3">Room</div>
        <div className="col-span-2 col-start-5">checkInDate</div>
        <div className="col-span-2 col-start-7">pricePerNight</div>
        <div className="col-span-1 col-start-9">totalPrice</div>
        <div className="col-span-1 col-start-10"></div>
      </div>

      {bookings.map((booking, i) => (
        <div
          key={i}
          className="mb-1 grid grid-cols-10 items-center gap-3 border-b border-slate-200 p-3 text-sm shadow"
        >
          {/* HOTEL NAME */}
          <div className="col-span-2 col-start-1 flex items-center gap-2">
            <img
              className="h-12 w-12 object-cover"
              src={booking.hotel.imageCover}
              alt="image"
            />
            <span className="w-[65%] whitespace-pre-line text-sm font-bold">
              {booking.hotel.name}
            </span>
          </div>

          {/* ROOM */}
          <div className="col-span-1 col-start-3 flex items-center gap-2">
            <img
              className="h-12 w-12 object-cover"
              src={booking.room.images[0]}
              alt="image"
            />
            <div className="">
              <p className="">{`# ${booking.room.roomNumber}`}</p>
              <p className="text-[10px] font-thin tracking-tight">
                {booking.room.roomType}
              </p>
            </div>
          </div>

          {/* CHECKIN DATE */}
          <div className="col-span-2 col-start-5">
            {formatDate(booking.checkInDate)}
          </div>

          <div className="col-span-2 col-start-7 flex flex-col">
            <p className="">{`${booking.pricePerNight}`}</p>
            <span className="">ETB / Night</span>
          </div>

          {/* TOTAL PRICE */}
          <div className="col-span-1 col-start-9">{`${booking.totalPrice} ETB`}</div>

          {/* PAYMENT STATUS */}
          <div
            className="col-span-1 col-start-10 flex justify-self-center rounded px-2 py-[2px] text-white"
            style={{
              backgroundColor:
                booking.status === "confirmed"
                  ? "green"
                  : booking.status === "pending"
                    ? "orange"
                    : booking.status === "cancelled"
                      ? "red"
                      : null,
            }}
          >
            {booking.status}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyBookings;
