import customFetch from "../utils/customFetch";

const getAllRooms = async (id) => {
  let url = `/rooms`;
  if (id) {
    url = `/hotels/${id}/rooms`;
  }
  const res = await customFetch.get(url);

  return res.data;
};

const createRoom = async ({ id, data }) => {
  let url = `/rooms`;
  if (id) {
    url = `/hotels/${id}/rooms`;
  }

  const res = await customFetch.post(url, data);
  return res.data;
};

const apiRooms = { getAllRooms, createRoom };

export default apiRooms;
