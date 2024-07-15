import { useFormContext } from "react-hook-form";

function RoomType() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <label>
      Room Type
      <select
        className="w-full rounded-full border bg-slate-200 px-3 py-2 hover:outline-none"
        {...register("roomType", {
          required: "room type is required",
        })}
      >
        {/* <option value={0}>Select Hotel Star</option> */}
        {["single", "double", "twin", "triple", "quad", "twin-double"].map(
          (val) => (
            <option key={val} value={val}>
              {val}
            </option>
          ),
        )}
      </select>
      {errors.roomType && (
        <p className="text-sm font-normal text-red-700">
          {errors.roomType.message}
        </p>
      )}
    </label>
  );
}

export default RoomType;
