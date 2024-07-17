/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import ManageHotelForm from "../../forms/manageHotelForm/ManageHotelForm";
import apiHotels from "../../services/apiHotels";
import QueryKey from "../../constants/QueryKey";
import { useUpdateHotel } from "./useUpdateHotel";
import { useNavigate, useParams } from "react-router-dom";

// IF THE MANAGER UPDATES HIS HOTEL, IT IS IN THE MANAGERS DASHBOARD | SETTINGS PART SO THE URL IS `/dashboard/settings` : IN THIS CASE THERE IS NO PARAMS SO WE PASS THE CURRENT HOTELS ID THROUGH PROP BECAUSE WE USE UPDATE HOTEL COMPONENT IN THAT SETTINGS PART
function UpdateHotel({ hotelId }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: { data: { data: hotel } = {} } = {}, isLoading } = useQuery({
    queryKey: [QueryKey.HOTEL, id],
    queryFn: () => apiHotels.getHotel({ id: id || hotelId }),
    retry: false,
  });

  const { mutate, isPending } = useUpdateHotel({ hotelId });

  const handleUpdateHotel = (formData) => {
    mutate(formData, {
      onSuccess: () => {
        if (hotelId) {
          navigate("/dashboard");
        } else {
          navigate("/dashboard/hotels");
        }
      },
    });
  };

  return (
    <ManageHotelForm
      hotel={hotel}
      onSubmit={handleUpdateHotel}
      isUpdating={isPending}
      isLoading={isLoading}
      isInUpdateMode={true}
    />
  );
}

export default UpdateHotel;
