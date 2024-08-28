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

const createUser = async ({ data }) => {
  const res = await customFetch.post("/users", data);

  return res.data;
};

const updateMyPassword = async ({ data }) => {
  const res = await customFetch.patch("/users/updateMyPassword", data);

  return res.data;
};

const forgotMyPassword = async (email) => {
  const res = await customFetch.post("/users/forgotPassword", { email });

  return res.data;
};

const apiUsers = {
  getAllUsers,
  updateMe,
  createUser,
  updateMyPassword,
  forgotMyPassword,
};

export default apiUsers;
