import { useMutation } from "@tanstack/react-query";
import ManageHotelForm from "../components/forms/manageHotelForm/ManageHotelForm";
import apiHotels from "../services/api-hotels";
import toast from "react-hot-toast";

function AddHotel() {
  const { mutate, isPending } = useMutation({
    mutationFn: apiHotels.addHotel,
    onSuccess: () => {
      toast.success("Hotel added successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleSubmit = (hotel) => {
    mutate(hotel);
  };

  return <ManageHotelForm onSubmit={handleSubmit} isPending={isPending} />;
}

export default AddHotel;
