import customFetch from "../utils/customFetch";

const getAllUsers = async ({ filter }) => {
  const { search, role, limit } = filter;

  const res = await customFetch(
    `/users?search=${search}&role=${role}&limit=${limit}`,
  );

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

const forgotPassword = async (email) => {
  const res = await customFetch.post("/users/forgotPassword", { email });

  return res.data;
};

const resetPassword = async ({ resetToken, data }) => {
  const res = await customFetch.post(
    `/users/resetPassword/${resetToken}`,
    data,
  );

  return res.data;
};

const apiUsers = {
  getAllUsers,
  updateMe,
  createUser,
  updateMyPassword,
  forgotPassword,
  resetPassword,
};

export default apiUsers;
