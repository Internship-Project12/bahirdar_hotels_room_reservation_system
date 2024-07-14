import customFetch from "../utils/customFetch";

const getAllBookings = async ({ filter }) => {
  const { status } = filter;
  const res = await customFetch(`/bookings?status=${status}`);

  return res.data;
};

const apiBookings = {
  getAllBookings,
};

export default apiBookings;
