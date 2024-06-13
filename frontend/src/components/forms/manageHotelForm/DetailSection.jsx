import { useFormContext } from "react-hook-form";

function DetailSection() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800">Add Hotel</h1>

      {/* NAME */}
      <label className="flex-1 text-sm font-bold text-gray-700">
        Name
        <input
          type="text"
          defaultValue="Addis International Hotel"
          className="w-full rounded border border-gray-400 px-3 py-2"
          placeholder="hotel name"
          {...register("name", {
            required: "Hotel name is required",
            maxLength: {
              value: 50,
              message: "Hotel name should not exceed 50 characters",
            },
            minLength: {
              value: 5,
              message: "Hotel name should be at least 5 characters",
            },
          })}
        />
        {errors.name && (
          <p className="text-sm font-normal text-red-700">
            {errors.name.message}
          </p>
        )}
      </label>

      {/* ADDRESS */}
      <label className="flex-1 text-sm font-bold text-gray-700">
        Address
        <input
          type="text"
          defaultValue="Addis Ababa, Ethiopia"
          className="w-full rounded border border-gray-400 px-3 py-2"
          placeholder="hotel address"
          {...register("address", { required: "Hotel address is required" })}
        />
        {errors.address && (
          <p className="text-sm font-normal text-red-700">
            {errors.address.message}
          </p>
        )}
      </label>

      {/* PRICE PER NIGHT
      <label>
        Price per Night
        <input
          type="number"
          defaultValue="200"
          className="w-full rounded border border-gray-400 px-3 py-2"
          placeholder="price per night"
          {...register("price", {
            required: "Price per night is required",
            min: { value: 1, message: "Price per night should be at least 1" },
          })}
        />
        {errors.address && (
          <p className="text-sm font-normal text-red-700">
            {errors.address.message}
          </p>
        )}
      </label> */}

      {/* STAR RATING */}
      <label>
        Start Rating
        <select
          className="w-full rounded border border-gray-400 px-3 py-2"
          {...register("starRating", {
            required: "Star rating is required",
            min: { value: 1, message: "Star rating should be at least 1" },
          })}
        >
          <option value={0}>Select as Rating</option>
          {[1, 2, 3, 4, 5].map((val) => (
            <option key={val} value={val}>
              {val}
            </option>
          ))}
        </select>
        {errors.starRating && (
          <p className="text-sm font-normal text-red-700">
            {errors.starRating.message}
          </p>
        )}
      </label>
    </div>
  );
}

export default DetailSection;
