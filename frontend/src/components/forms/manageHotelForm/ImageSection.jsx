// import { FiUpload } from "react-icons/fi";
import { useFormContext } from "react-hook-form";

function ImageSection() {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const existingImageCoverUrl = watch("imageCover");
  const existingHotelImagesUrl = watch("hotelImages");
  const isInUpdateMode = watch("isInUpdateMode");

  const handleDeleteHotelImages = (e, image) => {
    e.preventDefault();

    setValue(
      "hotelImages",
      existingHotelImagesUrl.filter((img) => img !== image),
    );
  };

  return (
    <div className="mb-10">
      <div className="mb-10 flex gap-4">
        {existingImageCoverUrl?.length ? (
          <div className="w-[400px]">
            <h1>Hotel Cover Image </h1>
            <img
              src={existingImageCoverUrl}
              alt=""
              className="min-h-full object-cover"
            />
          </div>
        ) : null}
        {existingHotelImagesUrl?.length > 0 ? (
          <div className="">
            <h1>Hotel Images </h1>
            <div className="grid grid-cols-4 gap-3">
              {existingHotelImagesUrl.map((image, i) => (
                <div key={i} className="group relative bg-gray-200">
                  <img key={i} src={image} alt="" className="w-[200px]" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition duration-300 group-hover:opacity-100">
                    <button
                      onClick={(e) => handleDeleteHotelImages(e, image)}
                      type="button"
                      className="rounded-full bg-red-700 px-2 py-1 text-white"
                    >
                      delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      <div className="flex justify-center gap-3 capitalize">
        <label className="w-[50%] flex-1 items-center capitalize">
          {isInUpdateMode
            ? "Change Hotel Cover Image"
            : "upload hotel cover image"}
          <input
            type="file"
            accept="image/*"
            {...register("imageCoverFile", {
              required: isInUpdateMode
                ? false
                : "A hotel must have a cover image",
            })}
          />
          {errors.imageCoverFile && (
            <p className="text-sm font-normal text-red-700">
              {errors.imageCoverFile.message}
            </p>
          )}
        </label>

        <label className="w-[50%] flex-1 items-center gap-3 capitalize">
          upload hotel images (
          {existingHotelImagesUrl && (
            <span>
              you can add {10 - existingHotelImagesUrl?.length} additional
              images
            </span>
          )}
          )
          <input
            type="file"
            accept="image/*"
            disabled={10 - existingHotelImagesUrl?.length <= 0}
            className='disabled:cursor-not-allowed'
            multiple
            {...register("hotelImagesFiles", {
              validate: (hotelImagesFiles) => {
                const numOfTotalImages =
                  (hotelImagesFiles?.length || 0) +
                  (existingHotelImagesUrl?.length || 0);

                if (numOfTotalImages < 2) {
                  return "A hotel must have at least 2 additional images";
                }

                if (numOfTotalImages > 10) {
                  return "A hotel allowed to have at most 10 additional images";
                }

                return true;
              },
            })}
          />
          {errors.hotelImagesFiles && (
            <p className="text-sm font-normal text-red-700">
              {errors.hotelImagesFiles.message}
            </p>
          )}
        </label>
      </div>
    </div>
  );
}

export default ImageSection;
