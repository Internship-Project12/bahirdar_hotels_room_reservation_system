import customFetch from "../utils/customFetch";

const getAllRooms = async (id) => {
  let url = `/rooms`;
  if (id) {
    url = `/hotels/${id}/rooms`;
  }
  const res = await customFetch.get(url);

  return res.data;
};

const getAllRoomsOnHotel = async ({ hotelId, selectedRoomTypes }) => {
  let url = `/hotels/${hotelId}/rooms?`;

  if (selectedRoomTypes?.length > 0) {
    selectedRoomTypes.forEach((type) => (url = url + `&roomType=${type}`));
  }
  const res = await customFetch.get(url);

  return res.data;
};

const getRoomOnHotel = async ({ hotelId, roomId }) => {
  const res = await customFetch.get(`/hotels/${hotelId}/rooms/${roomId}`);

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

const apiRooms = {
  getAllRooms,
  createRoom,
  updateRoom,
  getRoom,
  deleteRoom,
  getAllRoomsOnHotel,
  getRoomOnHotel,
};

export default apiRooms;
