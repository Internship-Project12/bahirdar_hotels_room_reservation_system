// import { FiUpload } from "react-icons/fi";
import { useFormContext } from "react-hook-form";

function ImageSection() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="flex justify-center gap-3 capitalize">
      <label className="w-[50%] flex-1 items-center gap-3 capitalize">
        upload hotel cover image
        {/* <FiUpload  size={'20px'}/> */}
        <input
          type="file"
          accept="image/*"
          {...register("imageCover", {
            required: "A hotel must have a cover image",
          })}
        />
        {errors.imageCover && (
          <p className="text-sm font-normal text-red-700">
            {errors.imageCover.message}
          </p>
        )}
      </label>

      <label className="w-[50%] flex-1 items-center gap-3 capitalize">
        upload hotel images
        <input
          type="file"
          accept="image/*"
          multiple
          {...register("hotelImages", {
            validate: (hotelImages) => {
              if (hotelImages.length < 2) {
                return "A hotel must have at least 2 additional images";
              }

              if (hotelImages.length > 10) {
                return "A hotel allowed to have at most 10 additional images";
              }

              return true;
            },
          })}
        />
        {errors.hotelImages && (
          <p className="text-sm font-normal text-red-700">
            {errors.hotelImages.message}
          </p>
        )}
      </label>
    </div>
  );
}

export default ImageSection;
