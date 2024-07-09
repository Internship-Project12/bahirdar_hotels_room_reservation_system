/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
// import { useQuery } from "@tanstack/react-query";
// import apiAuth from "../services/apiAuth";
// import QueryKey from "../constants/QueryKey";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  // const {
  //   data: res,
  //   isLoading,
  //   isError,
  // } = useQuery({
  //   queryKey: [QueryKey.USER],
  //   queryFn: apiAuth.getCurrentUser,
  //   retry: false,
  // });

  // if (isLoading) return;

  // const user = res?.data?.data.user || null;

  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  const [user, setUser] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phoneNumber: "+1234567890",
    photo: "/user1.jpeg", // Placeholder image
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <AuthContext.Provider
      value={{
        // isLoggedIn: !isError,
        isOpenModal,
        handleOpenModal,
        user,
        role: user?.role || null,
        handleChange,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within a AuthContextProvider");
  }
  return context;
};

export { AuthContextProvider, useAuthContext };
