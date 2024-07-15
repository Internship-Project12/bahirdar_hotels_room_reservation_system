import { useFormContext } from "react-hook-form";

function RoomImages() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex justify-center gap-3">
      <div className="flex-1 p-3">
        <label className="mx-auto flex w-[40%] flex-col rounded-md border-2 bg-slate-200 p-2 hover:cursor-pointer">
          upload room images - at-least 2 images
          {/* {existingHotelImagesUrl && (
                  <span>
                    ( you can add {10 - existingHotelImagesUrl?.length}{" "}
                    additional images )
                  </span>
                )} */}
          <input
            type="file"
            accept="image/*"
            // disabled={10 - existingHotelImagesUrl?.length <= 0}
            className="hover:cursor-pointer"
            multiple
            {...register("RoomImageFiles", {
              validate: (RoomImageFiles) => {
                const numOfTotalImages = RoomImageFiles?.length || 0;
                // + (existingHotelImagesUrl?.length || 0);

                if (numOfTotalImages < 2) {
                  return "A room must have at least 2 additional images";
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
  );
}

export default RoomImages;
