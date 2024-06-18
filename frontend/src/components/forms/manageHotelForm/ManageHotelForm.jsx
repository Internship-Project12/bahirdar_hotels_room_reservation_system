/* eslint-disable react/prop-types */
import { FormProvider, useForm } from "react-hook-form";

import DetailSection from "./DetailSection";
import ImageSection from "./ImageSection";
import SummarySection from "./SummarySection";

function ManageHotelForm({ isPending, onSubmit }) {
  const formMethods = useForm();
  const { handleSubmit } = formMethods;

  const onSubmitHandler = handleSubmit((data) => {
    console.log(data);

    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("address", data.address);
    formData.append("starRating", data.starRating);
    formData.append("summary", data.summary);
    formData.append("pricePerNight", data.pricePerNight);
    formData.append("numOfRooms", data.numOfRooms);

    Array.from(data.imageCover).forEach((image) => {
      formData.append(`imageCover`, image);
    });

    Array.from(data.hotelImages).forEach((image) => {
      formData.append(`hotelImages`, image);
    });

    console.log(formData);

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
        <SummarySection />
        <ImageSection />
        <button
          type="submit"
          className="w-full rounded bg-blue-800 px-3 py-2 text-white disabled:cursor-not-allowed disabled:bg-gray-400"
          disabled={isPending}
        >
          {isPending ? "Adding Hotel..." : "Add Hotel"}
        </button>
      </form>
    </FormProvider>
  );
}

export default ManageHotelForm;
