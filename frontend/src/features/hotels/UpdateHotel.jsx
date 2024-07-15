import { useQuery } from "@tanstack/react-query";
import ManageHotelForm from "../../forms/manageHotelForm/ManageHotelForm";
import apiHotels from "../../services/apiHotels";
import QueryKey from "../../constants/QueryKey";
import { useUpdateHotel } from "./useUpdateHotel";
import { useNavigate, useParams } from "react-router-dom";

function UpdateHotel() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: { data: { data: hotel } = {} } = {}, isLoading } = useQuery({
    queryKey: [QueryKey.HOTEL, id],
    queryFn: () => apiHotels.getHotel(id),
  });

  const { mutate, isPending } = useUpdateHotel();

  const handleUpdateHotel = (formData) => {
    mutate(formData, {
      onSuccess: () => {
        navigate('/dashboard/hotels')
      }
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
