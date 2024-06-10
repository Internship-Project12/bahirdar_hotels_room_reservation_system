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

const apiHotels = {
  addHotel,
};

export default apiHotels;
