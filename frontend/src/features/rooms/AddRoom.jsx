import { FormProvider, useForm } from "react-hook-form";
import SpinnerMini from "../../ui/SpinnerMini";
import { useCreateRoom } from "./useCreateRoom";

import {
  RoomAmenities,
  RoomImages,
  RoomDescription,
  RoomCapacity,
  RoomPricePerNight,
  RoomType,
  RoomNumber,
} from "../../forms/manageRoomForm";
import { useRooms } from "./useRooms";
import Spinner from "../../ui/Spinner";

/*
  {
    roomNumber: '101',
    roomType: 'single',
    pricePerNight: '350',
    capacity: '3',
    description: 
      'The room is cozy, with a comfortable bed and a view of the city skyline.',
    amenities: [ 'Wi-Fi', 'Room Service', 'Desk and Chair' ],
    RoomImageFiles: FileList {
      0: File {
        name: 'bed-2.jpg',
        lastModified: 1721063667219,
        webkitRelativePath: '',
        size: 75426,
        type: 'image/jpeg'
      },
      1: File {
        name: 'bed-1.jpg',
        lastModified: 1721063566820,
        webkitRelativePath: '',
        size: 74462,
        type: 'image/jpeg'
      },
      length: 2
    }
  }
*/

function AddRoom() {
  const { mutate, isPending } = useCreateRoom();
  const { data: {data: {rooms} = {}} = {}, isLoading } = useRooms();

  const formMethods = useForm();
  const { handleSubmit } = formMethods;

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

    mutate(formData);
  });

  if (isLoading) return <Spinner />;

  return (
    <FormProvider {...formMethods}>
      <div className="flex items-center justify-center p-3">
        <h1 className="min-w-[30rem] cursor-pointer rounded-full bg-blue-600 px-6 py-2 text-center text-2xl font-bold text-white shadow-xl">
          {"Add Room"}
          {/* {isInUpdateMode ? "update hotel" : "Add Hotel"} */}
        </h1>
      </div>
      <form
        onSubmit={onSubmitHandler}
        className="m-auto flex flex-col gap-8 rounded bg-slate-100 p-10 shadow-lg"
      >
        <div className="flex flex-col gap-4">
          {/* ROOM NUMBER */}
          <RoomNumber rooms={rooms}/>

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
          disabled={isPending}
        >
          {isPending ? <SpinnerMini /> : "Save Room"}
        </button>
      </form>
    </FormProvider>
  );
}

export default AddRoom;
