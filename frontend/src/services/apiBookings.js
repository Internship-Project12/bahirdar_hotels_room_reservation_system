import customFetch from "../utils/customFetch";

const getAllBookings = async ({ filter }) => {
  const { status, hotelId } = filter;

  const res = await customFetch(`/bookings?status=${status}&hotel=${hotelId}`);

  return res.data;
};

const apiBookings = {
  getAllBookings,
};

export default apiBookings;
