import { useFormContext } from "react-hook-form";

function SummarySection() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label>
        Summary
        <input
          type="text"
          // defaultValue="5-star hotel located in the heart of Addis Ababa, Ethiopia"
          className="w-full rounded border border-gray-400 px-3 py-2"
          placeholder="hotel summary"
          {...register("summary", {
            required: "A hotel must have a summary",
            minLength: {
              value: 50,
              message:
                "A hotel summary must have more or equal then 50 characters",
            },
          })}
        />
        {errors.summary && (
          <p className="text-sm font-normal text-red-700">
            {errors.summary.message}
          </p>
        )}
      </label>
      <label>
        Description
        <textarea
          rows={5}
          className="w-full rounded border border-gray-400 px-3 py-2"
          placeholder="hotel description"
          // defaultValue="Addis International Hotel is a 5-star hotel located in the heart of Addis Ababa, Ethiopia. The hotel offers a luxurious experience with its spacious rooms, modern amenities, and exceptional service. Whether you are traveling for business or pleasure, Addis International Hotel is the perfect choice for your stay in Addis Ababa."
          {...register("description", {
            required: "A hotel must have a description",
            minLength: {
              value: 50,
              message:
                "A hotel description must have more or equal then 50 characters",
            },
          })}
        />
        {errors.description && (
          <p className="text-sm font-normal text-red-700">
            {errors.description.message}
          </p>
        )}
      </label>
    </div>
  );
}

export default SummarySection;
