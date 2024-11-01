/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import apiAuth from "../services/apiAuth";
import QueryKey from "../constants/QueryKey";
import { createContext, useContext, useState } from "react";
import Spinner from "../ui/Spinner";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [currentHotel, setCurrentHotel] = useState({});
  const [openModalWindow, setOpenModalWindow] = useState(false);

  // TODO: send request to the '/auth/validateToken' route to check if user is loggedIn or not.
  // and then get user
  const {
    data: res,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [QueryKey.USER],
    queryFn: apiAuth.getCurrentUser,
    retry: false,
  });

  if (isLoading)
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <Spinner />
      </div>
    );

  let user = res?.data?.data.user || null;

  const handleSetUserOnLogout = () => {
    user = null;
  };

  const handleOpenModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  const handleOpenModalWindow = () => {
    setOpenModalWindow(!openModalWindow);
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
        handleOpenModalWindow,
        openModalWindow,
        handleSetUserOnLogout,
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
