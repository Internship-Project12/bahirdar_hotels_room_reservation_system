import customFetch from "../utils/customFetch";

const getAllBookings = async ({ filter }) => {
  const { status, hotelId } = filter;

  const res = await customFetch.get(
    `/bookings?status=${status}&hotel=${hotelId}`,
  );

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

const apiBookings = {
  getAllBookings,
  createBooking,
  getAllBookingsOnRoom,
};

export default apiBookings;
