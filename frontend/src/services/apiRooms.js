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

const updateRoom = async ({ id, data }) => {
  const res = await customFetch.patch(`/rooms/${id}`, data);

  return res.data;
};

const getRoom = async ({ id }) => {
  const res = await customFetch.get(`/rooms/${id}`);
  return res.data;
};

const deleteRoom = async ({ id }) => {
  const res = await customFetch.delete(`/rooms/${id}`);
  return res.data;
};

const apiRooms = { getAllRooms, createRoom, updateRoom, getRoom , deleteRoom};

export default apiRooms;
