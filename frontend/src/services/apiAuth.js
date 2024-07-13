import customFetch from "../utils/customFetch";

// /users
const signup = async (data) => await customFetch.post("/users/signup", data);

const login = async (data) => await customFetch.post("/users/login", data);

const getCurrentUser = async () => await customFetch.get("/users/me");

const logout = async () => await customFetch.post("/users/logout", {});

const apiAuth = {
  signup,
  login,
  getCurrentUser,
  logout,
};

export default apiAuth;
