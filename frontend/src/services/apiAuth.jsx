import customFetch from "../utils/customFetch";

// /users
const signup = async (data) => await customFetch.post("/users/signup", data);

const apiAuth = {
  signup,
};

export default apiAuth;
