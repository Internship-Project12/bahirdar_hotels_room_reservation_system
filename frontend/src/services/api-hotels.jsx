import customFetch from "../utils/customFetch";

const addHotel = async (hotel) => {
  try {
    const res = await customFetch.post("/api/v1/hotels", hotel);

    const { data } = res;

    return data;
  } catch (error) {
    console.log(error);
    return error?.response?.data;
  }
};

const getAllHotels = async () => {
  try {
    const res = await customFetch.get("/api/v1/hotels");

    const { data } = res;
    // console.log(data);

    if (data.status !== "success") throw new Error(data.message);

    return data;
  } catch (error) {
    return error?.response?.data;
  }
};

const getHotel = async (id) => {
  try {
    const res = await customFetch.get(`/api/v1/hotels/${id}`);
    const { data } = res;

    return data;
  } catch (error) {
    return error?.response?.data;
  }
};

const updateHotel = async ({ updatedHotelData, id }) => {
  try {
    const res = await customFetch.patch(
      `/api/v1/hotels/${id}`,
      updatedHotelData,
    );

    console.log(res);

    return res.data;
  } catch (error) {
    return error?.response?.data;
  }
};

const deleteHotel = async (id) => {
  try {
    const res = await customFetch.delete(`/api/v1/hotels/${id}`);

    const { data } = res;
    return data;
  } catch (error) {
    return error?.response?.data;
  }
};

const apiHotels = {
  addHotel,
  getHotel,
  getAllHotels,
  deleteHotel,
  updateHotel,
};

export default apiHotels;
