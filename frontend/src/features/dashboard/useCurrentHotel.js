import { useAuthContext } from "../../context/AuthContext";
import { useHotel } from "../hotels/useHotel";

export const useCurrentHotel = () => {
  const { user } = useAuthContext();

  const {
    data: { data: { data: hotel } = {} } = {},
    isLoading,
    isError,
  } = useHotel({ id: user.hotel._id });

  return {hotel,isLoading, isError};
};
