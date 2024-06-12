import customFetch from "../utils/customFetch";

const addHotel = async (hotel) => {
  try {
    const res = await customFetch.post("/api/v1/hotels", hotel);

    const { data } = res;

    if (data.status !== "success") throw new Error(data.message);

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const getAllHotels = async () => {
  try {
    const res = await customFetch.get("/api/v1/hotels");

    const { data } = res;

    if (data.status !== "success") throw new Error(data.message);

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const getHotel = async (id) => {
  try {
    const res = await customFetch.get(`/api/v1/hotels/${id}`);

    const { data } = res;
    // console.log(data);
    return data;
  } catch (error) {
    // console.log(error.response.data);
    return error.response.data;
  }
};

const apiHotels = {
  addHotel,
  getHotel,
  getAllHotels,
};

export default apiHotels;
