/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import SpinnerMini from "./SpinnerMini";
import { useAuthContext } from "../context/AuthContext";
import { useDeleteRoom } from "../features/rooms/useDeleteRoom";
import { useBookingsOnRoom } from "../features/bookings/useBookingsOnRoom";
import Spinner from "./Spinner";
import { useEffect, useState } from "react";

function ModalDeleteRoom({ room }) {
  const { handleOpenModalWindow } = useAuthContext();
  const [isRoomAlreadyBooked, setIsRoomAlreadyBooked] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  let { mutate, isPending } = useDeleteRoom();

  const {
    data: { data: { bookings: allBookingsOnThisRoom = [] } = {} } = {},
    isLoading,
  } = useBookingsOnRoom({ roomId: room._id });

  useEffect(() => {
    if (!isLoading)
      setIsRoomAlreadyBooked(
        allBookingsOnThisRoom.filter(
          (book) => new Date(book.checkOutDate) > new Date(),
        ).length > 0,
      );
  }, [allBookingsOnThisRoom, isLoading]);

  if (isLoading)
    return (
      <div className="w-[25rem]">
        <Spinner />
      </div>
    );

  const handleDelete = handleSubmit((data) => {
    if (data?.roomNumber.trim() !== `delete room # ${room.roomNumber}`) {
      return setError("roomNumber", {
        type: "custom",
        message: "Please write the correct name of the hotel",
      });
    }
    mutate(room._id, {
      onSuccess: () => {
        handleOpenModalWindow();
      },
    });
  });

  return (
    <div className="w-[25rem]">
      {!isRoomAlreadyBooked ? (
        <>
          <h2 className="mx-5 p-3 text-center text-xl font-bold text-red-500">
            Delete Room
          </h2>

          <p className="mx-5 border-b-2 border-red-300 mb-4 pb-2 text-center leading-6 tracking-wide text-slate-700">
            Caution: deleting a room causes all the related data to be deleted
            also. are you sure to delete the room?
          </p>

          <p className="mx-auto mb-3 w-[80%] text-center text-slate-700">
            Write this text `delete room # {room.roomNumber}` on the input and confirm if
            you want to delete
          </p>

          <form
            onSubmit={handleDelete}
            className="flex flex-col items-center justify-center gap-4"
          >
            <label className="flex w-[60%] flex-col items-center justify-center gap-4">
              <input
                disabled={isPending}
                type="text"
                {...register("roomNumber", {
                  required:
                    "Please confirm by writing the text mentioned above to delete a room",
                })}
                className="w-full rounded-xl bg-red-100 px-4 py-3 shadow-lg focus:outline-1 focus:outline-red-400 disabled:cursor-not-allowed disabled:bg-slate-300"
              />
              {errors.roomNumber && (
                <p className="text-sm font-normal text-red-700">
                  {errors?.roomNumber?.message}
                </p>
              )}
            </label>
            <div className="m-4 flex w-full flex-1 justify-center gap-12">
              <button
                disabled={isPending}
                type="submit"
                className="mx-3 flex items-center justify-center gap-4 rounded-full bg-red-600 px-8 py-2 text-lg text-slate-200 transition-all duration-300 hover:scale-110 hover:text-slate-200 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500 disabled:hover:scale-100"
              >
                Delete {isPending && <SpinnerMini color="text-slate-600" />}
              </button>
              <button
                type="button"
                disabled={isPending}
                onClick={(e) => {
                  e.preventDefault();
                  handleOpenModalWindow();
                }}
                className="mx-3 rounded-full bg-blue-600 px-8 py-2 text-lg text-slate-200 transition-all duration-300 hover:scale-110 hover:text-slate-200 disabled:cursor-not-allowed disabled:bg-blue-400 disabled:hover:scale-100"
              >
                Cancel
              </button>
            </div>
          </form>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="m-4 text-2xl font-bold tracking-wide text-blue-700">
            Room Booked Already
          </h2>
          <div className="flex items-center justify-center">
            <p className="mx-4 mb-3 flex items-center justify-center rounded-xl bg-blue-500 p-4 text-center text-xl leading-10 text-slate-200 shadow-2xl">
              The room with room number # {room.roomNumber} is already booked.
              Please contact the user who booked the room or wait until the book
              passes
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalDeleteRoom;
