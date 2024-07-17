import customFetch from "../utils/customFetch";

const addHotel = async (hotel) => await customFetch.post("/hotels", hotel);

const getAllHotels = async ({ filter }) => {
  const { search, hotelStar, sort } = filter;

  const res = await customFetch.get(
    `/hotels?search=${search}&hotelStar=${hotelStar}&sort=${sort}`,
  );

  return res.data;
};

const getHotel = async ({id}) => {
  const res = await customFetch.get(`/hotels/${id}`);
  return res.data;
};

const updateHotel = async ({ updatedHotelData, id }) => {
  const res = await customFetch.patch(`/hotels/${id}`, updatedHotelData);
  return res.data;
};

const deleteHotel = async (id) => {
  const res = await customFetch.delete(`/hotels/${id}`);
  return res.data;
};

const apiHotels = {
  addHotel,
  getHotel,
  getAllHotels,
  deleteHotel,
  updateHotel,
};

export default apiHotels;
