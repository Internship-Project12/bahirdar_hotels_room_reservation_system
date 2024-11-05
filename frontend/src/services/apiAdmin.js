import customFetch from "../utils/customFetch";

const getCountDocs = async () => {
  const res = await customFetch("/admin-stats/count-all-docs");
  const data = res.data;

  return data;
};

const getHotelStats = async (hotelId) => {
  const res = await customFetch(`/admin-stats/hotel-stats/${hotelId}`);

  return res.data;
};

export const apiAdmin = { getCountDocs, getHotelStats };
