/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Spinner from "../../ui/Spinner";
import SpinnerMini from "../../ui/SpinnerMini";
import {
  RoomAmenities,
  RoomCapacity,
  RoomDescription,
  RoomImages,
  RoomNumber,
  RoomPricePerNight,
  RoomType,
} from "./index";
import { FormProvider, useForm } from "react-hook-form";

function ManageRoomForm({
  onSubmit,
  room,
  isLoading,
  isAdding,
  isUpdating,
  isInUpdateMode = false,
}) {
  const formMethods = useForm();
  const { handleSubmit, reset, setValue } = formMethods;

  // RESET THE ROOM TO BE UPDATED
  useEffect(() => {
    if (room) {
      reset(room);
      setValue("isInUpdateMode", isInUpdateMode);
    }
  }, [reset, room, isInUpdateMode, setValue]);

  const onSubmitHandler = handleSubmit((data) => {
    const formData = new FormData();

    formData.append("roomNumber", data.roomNumber);
    formData.append("roomType", data.roomType);
    formData.append("pricePerNight", data.pricePerNight);
    formData.append("capacity", data.capacity);
    formData.append("description", data.description);

    data.amenities.forEach((amenity, i) => {
      formData.append(`amenities[${i}]`, amenity);
    });

    if (data?.RoomImageFiles) {
      Array.from(data.RoomImageFiles).forEach((image) => {
        formData.append("RoomImageFiles", image);
      });
    }

    if (data?.images) {
      data.images.forEach((image, i) => {
        formData.append(`images[${i}]`, image);
      });
    }

    onSubmit(formData);
  });

  return (
    <FormProvider {...formMethods}>
      <div className="flex items-center justify-center p-3">
        <h1 className="min-w-[30rem] cursor-pointer rounded-full bg-blue-600 px-6 py-2 text-center text-2xl font-bold text-white shadow-xl">
          {isInUpdateMode ? "Update Add" : "Add Room"}
        </h1>
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        <form
          onSubmit={onSubmitHandler}
          className="m-auto flex flex-col gap-8 rounded bg-slate-100 p-10 shadow-lg"
        >
          <div className="flex flex-col gap-4">
            {/* ROOM NUMBER */}
            <RoomNumber />

            {/* ROOM TYPE */}
            <RoomType />

            {/* PRICE PER NIGHT */}
            <RoomPricePerNight />

            {/* CAPACITY */}
            <RoomCapacity />

            {/* ROOM DESCRIPTION */}
            <RoomDescription />

            {/* ROOM AMENITIES */}
            <RoomAmenities />

            {/* ROOM IMAGES */}
            <RoomImages />
          </div>

          <button
            type="submit"
            className="w-full rounded bg-blue-800 px-3 py-2 text-white transition-all duration-300 hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-600"
            disabled={isAdding || isUpdating}
          >
            {isAdding || isUpdating ? <SpinnerMini /> : "Save Room"}
          </button>
        </form>
      )}
    </FormProvider>
  );
}

export default ManageRoomForm;
