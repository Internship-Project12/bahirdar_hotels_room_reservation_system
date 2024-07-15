import { useFormContext } from "react-hook-form";

function RoomPricePerNight() {
    const {
      register,
      formState: { errors },
    } = useFormContext();

  return (
    <label className="">
      Price Per Night
      <input
        type="number"
        defaultValue={350}
        className="w-full rounded-full border bg-slate-200 px-3 py-2 hover:outline-none focus:outline-none"
        placeholder="350"
        {...register("pricePerNight", {
          required: "price per night is required",
        })}
      />
      {errors.pricePerNight && (
        <p className="text-sm font-normal text-red-700">
          {errors.pricePerNight.message}
        </p>
      )}
    </label>
  );
}

export default RoomPricePerNight
