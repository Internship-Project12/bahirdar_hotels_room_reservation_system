import customFetch from "../utils/customFetch";

const getAllUsers = async ({filter}) => {
  const {search, role} = filter;

  const res = await customFetch(`/users?search=${search}&role=${role}`);

  return res.data;
};

const apiUsers = {
  getAllUsers,
};

export default apiUsers;
