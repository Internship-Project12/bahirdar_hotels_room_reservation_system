import customFetch from "../utils/customFetch";

const getAllBookings = async () => {
  const res = await customFetch("/bookings");

  return res.data;
};

const apiBookings = {
  getAllBookings,
};

export default apiBookings;
