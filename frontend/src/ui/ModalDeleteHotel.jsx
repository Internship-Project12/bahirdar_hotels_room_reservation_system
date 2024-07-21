/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { useDeleteHotel } from "../features/hotels/useDeleteHotel";
import SpinnerMini from "./SpinnerMini";
import { useAuthContext } from "../context/AuthContext";

function ModalDeleteHotel({ hotel }) {
  const { handleOpenModalWindow } = useAuthContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  let { mutate, isPending } = useDeleteHotel();

  const handleDelete = handleSubmit((data) => {
    if (data?.name.trim() !== `delete hotel ${hotel.name.trim()}`) {
      return setError("name", {
        type: "custom",
        message: "Please write the correct name of the hotel",
      });
    }
    mutate(hotel._id, {
      onSuccess: () => {
        handleOpenModalWindow();
      },
    });
  });

  return (
    <div className="w-[30rem]">
      <h2 className="mx-5 mb-5 p-3 text-center text-xl font-bold text-red-500">
        Delete Hotel
      </h2>
      <p className="m-5 border-b-2 border-red-300 py-3 text-center leading-6 tracking-wide text-slate-700">
        Caution: deleting a hotel cause all the related data to be deleted also.
        are you sure to delete the hotel? If you are, Write the name of of the
        hotel on the input
      </p>
      <p className="mx-auto w-[50%] py-3 text-center text-xs text-slate-700">
        Write (delete hotel {hotel.name}) on the input and confirm if you want
        to delete
      </p>
      <form
        onSubmit={handleDelete}
        className="flex flex-col items-center justify-center gap-4"
      >
        <label className="flex w-[60%] flex-col items-center justify-center gap-4">
          <input
            disabled={isPending}
            type="text"
            {...register("name", {
              required: "Please confirm by writing the name of the hotel",
            })}
            className="w-full rounded-xl bg-red-100 px-4 py-3 shadow-lg focus:outline-1 focus:outline-red-400 disabled:cursor-not-allowed disabled:bg-slate-300"
          />
          {errors.name && (
            <p className="text-sm font-normal text-red-700">
              {errors?.name?.message}
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
    </div>
  );
}

export default ModalDeleteHotel;
