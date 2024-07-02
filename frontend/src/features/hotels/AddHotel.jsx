import { useMutation, useQueryClient } from "@tanstack/react-query";
import ManageHotelForm from "../../forms/manageHotelForm/ManageHotelForm";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import apiHotels from "../../services/apiHotels";

function AddHotel() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: apiHotels.addHotel,
    onSuccess: () => {
      toast.success("Hotel added successfully");
      queryClient.invalidateQueries("hotels");

      navigate("/hotels");
    },
    onError: (err) => {
      toast.error(
        err?.response?.data.message ||
          "Something went wrong: unable to add a hotel",
      );
    },
  });

  const handleSubmit = (hotel) => {
    mutate(hotel);
  };

  return <ManageHotelForm onSubmit={handleSubmit} isPending={isPending} />;
}

export default AddHotel;
