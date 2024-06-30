/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import { createContext, useContext,  } from "react";
import apiAuth from "../services/apiAuth";
import QueryKey from "../constants/QueryKey";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
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

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: !isError, user: res?.data?.data.user || null }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within a AuthContextProvider");
  }
  return context;
};

export default AuthContextProvider;
