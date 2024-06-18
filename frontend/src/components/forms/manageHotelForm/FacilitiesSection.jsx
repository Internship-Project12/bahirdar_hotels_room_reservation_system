import { useFormContext } from "react-hook-form";

const hotelFacilities = [
  "Free parking",
  "Free wifi",
  "Pool",
  "Pet friendly",
  "Playground",
  "Restaurant",
  "Bar",
  "Gym",
  "Spa",
  "Beachfront",
  "Airport shuttle",
  "Family rooms",
  "Facilities for disabled guests",
  "Non-smoking rooms",
  "Room service",
  "Air conditioning",
  "Daily housekeeping",
  "Private bathroom",
  "Flat-screen TV",
  "Balcony",
  "Terrace",
  "Mountain view",
  "City view",
  "Sea view",
  "Coffee maker",
  "Kitchen",
];

function FacilitiesSection() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <h1 className="text-xl font-bold">Hotel Facilities</h1>
      <div className="grid grid-cols-5 gap-4">
        {hotelFacilities.map((facility) => (
          <label key={facility} className="flex flex-1 items-center gap-2">
            <input
              type="checkbox"
              value={facility}
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
  );
}

export default FacilitiesSection;
