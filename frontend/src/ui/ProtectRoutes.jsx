/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

function ProtectRoutes({ children }) {
  const { role, isLoggedIn } = useAuthContext();
  const navigate = useNavigate();

  // IF NOT LOGGED IN NAVIGATE TO THE SIGN IN PAGE
  if (!isLoggedIn) navigate("/login");

  // IF IT IS LOGGED IN AND ROLE == USER, NAVIGATE THE HOME PAGE // BAD REQUEST
  if (isLoggedIn && role === "user") {
    toast.error("you do not have permission");
    return navigate("/");
  }

  return children;
}

export default ProtectRoutes;
