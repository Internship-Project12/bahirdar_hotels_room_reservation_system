/* eslint-disable react/prop-types */
import { useFormContext } from "react-hook-form";
import { useRooms } from "../../features/rooms/useRooms";

function RoomNumber() {
  // we use this array of room numbers to validate the room number on submit
  const { data: { data: { rooms } = {} } = {}, isLoading } = useRooms();

  const roomNumbers = rooms?.map((room) => room.roomNumber);

  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();
  const inUpdateMode = watch("isInUpdateMode");

  return (
    <label className="">
      Room Number
      <input
        type="number"
        defaultValue={101}
        disabled={isLoading}
        className="w-full rounded-full border bg-slate-200 px-3 py-2 hover:outline-none focus:outline-none"
        placeholder="101"
        {...register("roomNumber", {
          validate: (num) => {
            if (roomNumbers.includes(num) && !inUpdateMode) {
              return "please assign a unique room number";
            }

            if (!num) return "roomNumber is required";

            return true;
          },
        })}
      />
      {errors.roomNumber && (
        <p className="text-sm font-normal text-red-700">
          {errors.roomNumber.message}
        </p>
      )}
    </label>
  );
}

export default RoomNumber;
