// import { FiUpload } from "react-icons/fi";
import { useFormContext } from "react-hook-form";

function ImageSection() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="flex flex-col justify-center gap-3 capitalize">
      <label className="flex w-[50%] items-center gap-3 capitalize">
        upload cover image
        {/* <FiUpload  size={'20px'}/> */}
        <input
          type="file"
          accept="image/*"
          {...register("imageCover", {
            // required: "A hotel must have a cover image",
          })}
        />
      </label>
      {errors.imageCover && (
        <p className="text-sm font-normal text-red-700">
          {errors.imageCover.message}
        </p>
      )}
    </div>
  );
}

export default ImageSection;
