import customFetch from "../utils/customFetch";

const getAllBookings = async ({ filter }) => {
  const { status, hotelId } = filter;

  const res = await customFetch.get(
    `/bookings?status=${status}&hotel=${hotelId}`,
  );

  return res.data;
};

const getAllMyBookings = async ({ userId }) => {
  const res = await customFetch.get(`/bookings?user=${userId}`);

  return res.data;
};

const getAllBookingsOnRoom = async ({ roomId }) => {
  const res = await customFetch.get(`/rooms/${roomId}/bookings`);

  return res.data;
};

const createBooking = async (data) => {
  const res = await customFetch.post("/bookings", data);

  return res.data;
};

const acceptPaymentChapa = async ({ roomId, checkIn, checkOut }) => {
  const res = await customFetch.post(
    `/bookings/accept-payment-chapa/${roomId}`,
    {
      checkInDate: checkIn,
      checkOutDate: checkOut,
    },
  );

  return res.data;
};

const verifyPaymentChapa = async ({ tx_ref, roomId, checkIn, checkOut }) => {
  const res = await customFetch.post("/bookings/verify-payment-chapa", {
    tx_ref,
    roomId,
    checkInDate: checkIn,
    checkOutDate: checkOut,
  });

  return res.data;
};

const apiBookings = {
  getAllBookings,
  createBooking,
  getAllBookingsOnRoom,
  getAllMyBookings,
  acceptPaymentChapa,
  verifyPaymentChapa,
};

export default apiBookings;
