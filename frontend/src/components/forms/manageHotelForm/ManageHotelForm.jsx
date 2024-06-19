/* eslint-disable react/prop-types */
import { FormProvider, useForm } from "react-hook-form";

import DetailSection from "./DetailSection";
import ImageSection from "./ImageSection";
import SummarySection from "./SummarySection";
import FacilitiesSection from "./FacilitiesSection";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ManageHotelForm({ isPending, onSubmit, hotel }) {
  const isInUpdateMode = !!hotel;
  const navigate = useNavigate();

  const formMethods = useForm();
  const { handleSubmit, reset, setValue, watch } = formMethods;

  useEffect(() => {
    // console.log("effect");
    // FIXME: SOMETIMES THE FUNCTION NOT TRIGGERED
    if (hotel) {
      reset(hotel);
      setValue("isInUpdateMode", isInUpdateMode);
    }
  }, [reset, hotel, isInUpdateMode, setValue]);

  // To fix the issue of the form not being reset when the user navigates to the form
  // useEffect does not run if so navigate to the hotels page
  if (hotel && !watch("isInUpdateMode")) {
    return navigate("/hotels");
  }

  const onSubmitHandler = handleSubmit((data) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("address", data.address);
    formData.append("starRating", data.starRating.toString());
    formData.append("summary", data.summary);
    formData.append("pricePerNight", data.pricePerNight.toString());
    formData.append("numOfRooms", data.numOfRooms.toString());

    data.facilities.forEach((facility, i) => {
      formData.append(`facilities[${i}]`, facility);
    });

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

    if (hotel) {
      formData.append("_id", hotel._id);
    }

    onSubmit(formData);
  });

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={onSubmitHandler}
        className="m-auto flex max-w-[85%] flex-col gap-8 rounded bg-slate-100 p-10 shadow-lg"
      >
        <div className="max-w-[50%]">
          <DetailSection />
        </div>
        <FacilitiesSection />
        <SummarySection />
        <ImageSection />
        <button
          type="submit"
          className="w-full rounded bg-blue-800 px-3 py-2 text-white disabled:cursor-not-allowed disabled:bg-gray-400"
          disabled={isPending}
        >
          {isPending ? "Saving Hotel..." : "Save Hotel"}
        </button>
      </form>
    </FormProvider>
  );
}

export default ManageHotelForm;
