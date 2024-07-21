import { useFormContext } from "react-hook-form";

function RoomImages() {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const existingImageUrls = watch("images");

  const handleDeleteHotelImages = (e, image) => {
    e.preventDefault();

    setValue(
      "images",
      existingImageUrls.filter((img) => img !== image),
    );
  };

  return (
    <div>
      <div className="mb-10">
        {existingImageUrls?.length > 0 ? (
          <div>
            <h2>Rooms Images</h2>
            <div className="grid grid-cols-4 gap-3">
              {existingImageUrls.map((image, i) => (
                <div key={i} className="group relative bg-gray-200">
                  <img
                    key={i}
                    src={image}
                    alt={`image-${i + 1}`}
                    className="h-[200px] w-[300px] object-center"
                  />
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

      <div className="flex justify-center gap-3">
        <div className="flex-1 p-3">
          <label className="mx-auto flex w-[40%] flex-col rounded-md border-2 bg-slate-200 p-2 hover:cursor-pointer">
            upload room images - at-least 1 images
            {existingImageUrls?.length && (
              <span>
                ( you can add {10 - existingImageUrls?.length} additional images
                )
              </span>
            )}
            <input
              type="file"
              accept="image/*"
              disabled={10 - existingImageUrls?.length <= 0}
              className="hover:cursor-pointer"
              multiple
              {...register("RoomImageFiles", {
                validate: (RoomImageFiles) => {
                  const numOfTotalImages =
                    (RoomImageFiles?.length || 0) +
                    (existingImageUrls?.length || 0);

                  if (numOfTotalImages < 1) {
                    return "A room must have at least 1 additional images";
                  }

                  if (numOfTotalImages > 10) {
                    return "A room allowed to have at most 10 additional images";
                  }

                  return true;
                },
              })}
            />
            {errors.RoomImageFiles && (
              <p className="text-sm font-normal text-red-700">
                {errors.RoomImageFiles.message}
              </p>
            )}
          </label>
        </div>
      </div>
    </div>
  );
}

export default RoomImages;
