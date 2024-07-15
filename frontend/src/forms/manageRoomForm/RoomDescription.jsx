import { useFormContext } from "react-hook-form";

function RoomDescription() {
  const {register, formState: {errors}} = useFormContext();
  
  return (
    <label>
      Description
      <textarea
        rows={2}
        className="w-full rounded-lg border bg-slate-200 px-3 py-2 hover:outline-none"
        placeholder="The room is cozy, with a comfortable bed and a view of the city skyline."
        defaultValue="The room is cozy, with a comfortable bed and a view of the city skyline."
        {...register("description", {
          required: "A room must have a description",
          minLength: {
            value: 50,
            message:
              "A room description must have more or equal then 50 characters",
          },
        })}
      />
      {errors.description && (
        <p className="text-sm font-normal text-red-700">
          {errors.description.message}
        </p>
      )}
    </label>
  );
}

export default RoomDescription
