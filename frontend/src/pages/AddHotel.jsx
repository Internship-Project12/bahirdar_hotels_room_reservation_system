import { useMutation } from "@tanstack/react-query";
import ManageHotelForm from "../components/forms/manageHotelForm/ManageHotelForm";
import apiHotels from "../services/api-hotels";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function AddHotel() {
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: apiHotels.addHotel,
    onSettled: (data) => {
      if (data.status !== "success") {
        return toast.error(
          data.message || "something went wrong: unable to add a hotel",
        );
      }
      toast.success("Hotel added successfully");
      navigate("/hotels");
    },
  });

  const handleSubmit = (hotel) => {
    mutate(hotel);
  };

  return <ManageHotelForm onSubmit={handleSubmit} isPending={isPending} />;
}

export default AddHotel;
