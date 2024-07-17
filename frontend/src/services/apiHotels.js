import customFetch from "../utils/customFetch";

const addHotel = async (hotel) => await customFetch.post("/hotels", hotel);

const getAllHotels = async ({ filter }) => {
  const { search, hotelStar, sort, selectedStars } = filter;
  let url = `/hotels?search=${search}&sort=${sort}`;

  if (selectedStars?.length) {
    selectedStars.forEach((val) => (url = url + `&hotelStar=${val}`));
  } else if(hotelStar) {
    url = url + `&hotelStar=${hotelStar}`;
  }
  const res = await customFetch.get(url);

  return res.data;
};

const getHotel = async ({ id }) => {
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
