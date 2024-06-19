import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import apiHotels from "../services/api-hotels";
import ManageHotelForm from "../components/forms/manageHotelForm/ManageHotelForm";
import toast from "react-hot-toast";

function UpdateHotel() {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["hotel", id],
    queryFn: () => apiHotels.getHotel(id),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (updatedHotelData) =>
      apiHotels.updateHotel({ updatedHotelData, id }),
    onSettled: (data) => {
      if (data.status !== "success") {
        return toast.error(
          data.message || "something went wrong: unable to update a hotel",
        );
      }
      queryClient.invalidateQueries(["hotel", id]);
      toast.success("Hotel updated successfully");
    },
  });

  /*
  data = {
    status: 'success',
    message: 'Get a hotel',
    data: {
      data: { .... }
    }
  }
  */

  if (isLoading) return <div>Loading...</div>;

  const hotel = data?.data?.data;

  if (!hotel) return null;

  const handleUpdateHotel = (formData) => {
    mutate(formData);
  };

  return (
    <ManageHotelForm
      hotel={hotel}
      onSubmit={handleUpdateHotel}
      isPending={isLoading || isPending}
    />
  );
}

export default UpdateHotel;
