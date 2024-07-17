/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import apiAuth from "../services/apiAuth";
import QueryKey from "../constants/QueryKey";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [currentHotel, setCurrentHotel] = useState({});

  const {
    data: res,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [QueryKey.USER],
    queryFn: apiAuth.getCurrentUser,
    retry: false,
  });

  if (isLoading) return;

  const user = res?.data?.data.user || null;

  const handleOpenModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  const setCurrentHotelHandler = (hotel) => {
    setCurrentHotel(hotel);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !isError,
        isOpenModal,
        handleOpenModal,
        user,
        role: user?.role || null,
        currentHotel,
        setCurrentHotelHandler,
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
