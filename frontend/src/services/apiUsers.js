import customFetch from "../utils/customFetch";

const getAllUsers = async ({ filter }) => {
  const { search, role } = filter;

  const res = await customFetch(`/users?search=${search}&role=${role}`);

  return res.data;
};

const updateMe = async ({ data }) => {
  const res = await customFetch.patch("/users/updateMe", data);

  return res.data;
};

const apiUsers = {
  getAllUsers,
  updateMe,
};

export default apiUsers;
