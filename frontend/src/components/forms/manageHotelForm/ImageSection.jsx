// import { FiUpload } from "react-icons/fi";

function ImageSection() {
  return (
    <>
      <label className="flex items-center gap-3  capitalize w-[50%]">
        upload cover image
        {/* <FiUpload  size={'20px'}/> */}
        <input type="file" accept="image/*" />
      </label>
    </>
  );
}

export default ImageSection;
