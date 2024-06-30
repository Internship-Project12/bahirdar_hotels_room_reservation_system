import customFetch from "../utils/customFetch";

// /users
const signup = async (data) => await customFetch.post("/users/signup", data);

const login = async (data) => await customFetch.post("/users/login", data);

const apiAuth = {
  signup,
  login
};

export default apiAuth;
