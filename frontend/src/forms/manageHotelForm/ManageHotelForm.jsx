/* eslint-disable react/prop-types */
import { FormProvider, useForm } from "react-hook-form";

import DetailSection from "./DetailSection";
import ImageSection from "./ImageSection";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddHotelManager from "./AddHotelManager";

/*
{
    name: 'Addis International Hotel',
    address: 'Bahir Dar, Amhara, 16km from the main straight',
    hotelStar: '1',
    facilities: [ 'Free wifi', 'Bar', 'Family rooms', 'Daily housekeeping' ],
    summary: '5-star hotel located in the heart of Addis , Ethiopia',
    description: 
      'Addis International Hotel is a 5-star hotel located in the heart of Addis, Ethiopia. The hotel offers a luxurious experience with its spacious rooms, modern amenities, and exceptional service. Whether you are traveling for business or pleasure, Addis International Hotel is the perfect choice for your stay in Addis Ababa.',
    imageCoverFile: FileList {
      0: File {
        name: 'Screenshot 2024-01-05 033656.png',
        lastModified: 1704454623517,
        webkitRelativePath: '',
        size: 23147,
        type: 'image/png'
      },
      length: 1
    },
    hotelImagesFiles: FileList {
      0: File {
        name: '20221026_090015-COLLAGE.jpg',
        lastModified: 1697973572000,
        webkitRelativePath: '',
        size: 164566,
        type: 'image/jpeg'
      },
      1: File {
        name: 'Screenshot 2024-01-01 043201.png',
        lastModified: 1704112335133,
        webkitRelativePath: '',
        size: 135249,
        type: 'image/png'
      },
      2: File {
        name: 'Screenshot 2024-01-05 033656.png',
        lastModified: 1704454623517,
        webkitRelativePath: '',
        size: 23147,
        type: 'image/png'
      },
      length: 3
    },
    manager: '668ce22aa5b16ed846c21a18'
  }
 */

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
    formData.append("hotelStar", data.hotelStar.toString());
    formData.append("summary", data.summary);
    formData.append("manager", data.manager);

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
      <div className="flex items-center justify-center p-3">
        <h1 className="min-w-[30rem] cursor-pointer rounded-full bg-blue-600 px-6 py-2 text-center text-2xl font-bold text-white shadow-xl">
          {isInUpdateMode ? "update hotel" : "Add Hotel"}
        </h1>
      </div>
      <form
        onSubmit={onSubmitHandler}
        className="m-auto flex flex-col gap-8 rounded bg-slate-100 p-10 shadow-lg"
      >
        <div>
          <DetailSection />
          <ImageSection />
          <AddHotelManager />
        </div>
        <button
          type="submit"
          className="w-full rounded bg-blue-800 px-3 py-2 text-white transition-all duration-300  hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-600"
          disabled={isPending}
        >
          {isPending ? "Saving Hotel..." : "Save Hotel"}
        </button>
      </form>
    </FormProvider>
  );
}

export default ManageHotelForm;
