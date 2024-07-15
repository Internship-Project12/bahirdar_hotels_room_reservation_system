import { useFormContext } from "react-hook-form";

function RoomCapacity() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <label className="">
      capacity (maximum amount of persons it can hold)
      <input
        type="number"
        defaultValue={3}
        className="w-full rounded-full border bg-slate-200 px-3 py-2 hover:outline-none focus:outline-none"
        placeholder="3"
        {...register("capacity", {
          required: "price per night is required",
          min: {
            value: 1,
            message: "a room should at-least hold one person",
          },
        })}
      />
      {errors.capacity && (
        <p className="text-sm font-normal text-red-700">
          {errors.capacity.message}
        </p>
      )}
    </label>
  );
}

export default RoomCapacity;
