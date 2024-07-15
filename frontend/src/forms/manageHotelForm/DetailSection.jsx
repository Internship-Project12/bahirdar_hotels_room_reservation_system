import { useFormContext } from "react-hook-form";
import { HOTEL_FACILITIES } from "../../constants/HotelFacilities";

function DetailSection() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-4">
      {/* NAME */}
      <label className="">
        Name
        <input
          type="text"
          defaultValue="Addis International Hotel"
          className="w-full rounded-full border bg-slate-200 px-3 py-2 hover:outline-none"
          placeholder="abc international hotel"
          {...register("name", {
            required: "Hotel name is required",

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
      <label className="">
        Address
        <input
          type="text"
          defaultValue="Bahir Dar, Amhara, 16km from the main straight"
          className="w-full rounded-full border bg-slate-200 px-3 py-2 hover:outline-none"
          placeholder="Bahir Dar, Amhara, 16km from the main straight"
          {...register("address", {
            required: "Hotel address is required",
          })}
        />
        {errors.address && (
          <p className="text-sm font-normal text-red-700">
            {errors.address.message}
          </p>
        )}
      </label>

      {/* STAR RATING */}
      <label>
        Hotel Star
        <select
          className="w-full rounded-full border bg-slate-200 px-3 py-2 hover:outline-none"
          {...register("hotelStar", {
            required: "Star rating is required",
            min: { value: 1, message: "Star rating should be at least 1" },
          })}
        >
          <option value={0}>Select Hotel Star</option>
          {[1, 2, 3, 4, 5].map((val) => (
            <option key={val} value={val}>
              {val}
            </option>
          ))}
        </select>
        {errors.hotelStar && (
          <p className="text-sm font-normal text-red-700">
            {errors.hotelStar.message}
          </p>
        )}
      </label>

      {/* HOTEL FACILITIES */}

      <div>
        <h1 className="text-xl font-bold">Hotel Facilities</h1>
        <div className="grid grid-cols-5 gap-4">
          {HOTEL_FACILITIES.map((facility) => (
            <label key={facility} className="flex flex-1 items-center gap-2">
              <input
                type="checkbox"
                value={facility}
                className="p-2 accent-blue-600"
                {...register("facilities", {
                  validate: (facilities) => {
                    if (!facilities || facilities.length < 3) {
                      return "a hotel should have at least 3 facilities";
                    }
                    return true;
                  },
                })}
              />
              <span>{facility}</span>
            </label>
          ))}
        </div>
        {errors.facilities && (
          <p className="text-sm font-normal text-red-700">
            {errors.facilities.message}
          </p>
        )}
      </div>

      {/* HOTEL SUMMARY SECTION */}
      <label>
        Summary
        <input
          type="text"
          defaultValue="5-star hotel located in the heart of Addis Ababa, Ethiopia"
          className="w-full rounded-full border bg-slate-200 px-3 py-2 hover:outline-none"
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

      {/* HOTEL DESCRIPTION SECTION */}
      <label>
        Description
        <textarea
          rows={5}
          className="w-full rounded-lg border bg-slate-200 px-3 py-2 hover:outline-none"
          placeholder="hotel description"
          defaultValue="Addis International Hotel is a 5-star hotel located in the heart of Addis Ababa, Ethiopia. The hotel offers a luxurious experience with its spacious rooms, modern amenities, and exceptional service. Whether you are traveling for business or pleasure, Addis International Hotel is the perfect choice for your stay in Addis Ababa."
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

export default DetailSection;
