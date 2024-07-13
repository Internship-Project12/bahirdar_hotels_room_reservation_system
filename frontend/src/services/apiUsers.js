import customFetch from "../utils/customFetch";

const getAllUsers = async () => {
  const res = await customFetch("/users");

  return res.data;
};

const apiUsers = {
  getAllUsers,
};

export default apiUsers;
