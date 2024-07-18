/* eslint-disable react/prop-types */
import { FormProvider, useForm } from "react-hook-form";

import DetailSection from "./DetailSection";
import ImageSection from "./ImageSection";
import { useEffect } from "react";
import AddHotelManager from "./AddHotelManager";
import Spinner from "../../ui/Spinner";
import { useAuthContext } from "../../context/AuthContext";
import SpinnerMini from "../../ui/SpinnerMini";

function ManageHotelForm({
  isAdding,
  isLoading,
  isUpdating = false,
  onSubmit,
  hotel,
  isInUpdateMode = false,
}) {
  const { role } = useAuthContext();

  const formMethods = useForm();
  const { handleSubmit, reset, setValue } = formMethods;

  // IF IN UPDATE MODE RESET THE HOTEL DATA TO THE FORM
  useEffect(() => {
    // FIXME: SOMETIMES THE FUNCTION NOT TRIGGERED
    if (hotel) {
      reset(hotel);
      setValue("isInUpdateMode", isInUpdateMode);
    }
  }, [reset, hotel, isInUpdateMode, setValue]);

  const onSubmitHandler = handleSubmit((data) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("address", data.address);
    formData.append("hotelStar", data.hotelStar.toString());
    formData.append("summary", data.summary);

    data.facilities.forEach((facility, i) => {
      formData.append(`facilities[${i}]`, facility);
    });

    if (typeof data.manager === "string") {
      formData.append("manager", data.manager);
    }

    if (hotel?.imageCover) {
      formData.append("imageCover", hotel.imageCover);
    }

    if (hotel?.hotelImages) {
      data.hotelImages.forEach((image, i) => {
        formData.append(`hotelImages[${i}]`, image);
      });
    }

    if (data?.imageCoverFile)
      Array.from(data.imageCoverFile).forEach((image) => {
        formData.append(`imageCoverFile`, image);
      });

    if (data?.hotelImagesFiles)
      Array.from(data.hotelImagesFiles).forEach((image) => {
        formData.append(`hotelImagesFiles`, image);
      });

    // if (hotel) {
    //   formData.append("_id", hotel._id);
    // }

    onSubmit(formData);
  });

  return (
    <FormProvider {...formMethods}>
      <div className="flex items-center justify-center p-3">
        <h1 className="min-w-[30rem] cursor-pointer rounded-full bg-blue-600 px-6 py-2 text-center text-2xl font-bold uppercase text-white shadow-xl">
          {isInUpdateMode ? "update hotel" : "Add Hotel"}
        </h1>
      </div>
      {isLoading ? (
        <Spinner />
      ) : isInUpdateMode && !hotel ? (
        <div className="flex items-center justify-center p-6">
          <p className="text-2xl uppercase">there is no hotel to update</p>
        </div>
      ) : (
        <form
          onSubmit={onSubmitHandler}
          className="m-auto flex flex-col gap-8 rounded bg-slate-100 p-10 shadow-lg"
        >
          <div>
            <DetailSection />
            <ImageSection />
            {role === "admin" && <AddHotelManager />}
          </div>
          <button
            type="submit"
            className="w-full rounded bg-blue-800 px-3 py-2 text-white transition-all duration-300 hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-600"
            disabled={isAdding || isUpdating}
          >
            {isAdding || isUpdating ? <SpinnerMini /> : "Save Hotel"}
          </button>
        </form>
      )}
    </FormProvider>
  );
}

export default ManageHotelForm;
