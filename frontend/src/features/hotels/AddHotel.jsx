import ManageHotelForm from "../../forms/manageHotelForm/ManageHotelForm";
import { useCreateHotel } from "./useCreateHotel";

function AddHotel() {
  const {mutate, isPending} = useCreateHotel();

  const handleSubmit = (hotel) => {
    mutate(hotel);
  };

  return <ManageHotelForm onSubmit={handleSubmit} isAdding={isPending} />;
}

export default AddHotel;
