/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import QueryKey from "../../constants/QueryKey";
import apiRooms from "../../services/apiRooms";
import { useAuthContext } from "../../context/AuthContext";

export const useRooms = () => {
  // IN THIS CASE IS THE ROLE IS MANAGER THE FIND ALL THE ROOMS AVAILABLE IN THE HOTEL
  const { role, user } = useAuthContext();
  let id = "";
  if (role === "manager") {
    id = user.hotel._id;
  }

  const { data, isLoading } = useQuery({
    queryKey: [QueryKey.ROOMS],
    queryFn: () => apiRooms.getAllRooms(id),
  });

  return { data, isLoading };
};
