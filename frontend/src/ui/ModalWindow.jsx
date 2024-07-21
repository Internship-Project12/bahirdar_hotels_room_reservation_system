import { useAuthContext } from "../context/AuthContext";
import { MdCancel } from "react-icons/md";

/* eslint-disable react/prop-types */
function ModalWindow({ children }) {
  const { handleOpenModalWindow } = useAuthContext();

  return (
    <div className="absolute inset-0 left-0 top-0 z-[100] flex items-center justify-center">
      <div
        onClick={handleOpenModalWindow}
        className="absolute inset-0 left-0 top-0 bg-black/30 backdrop-blur-3xl hover:cursor-pointer"
      ></div>
      <div className="relative max-h-[90vh] max-w-[70vw] translate-x-4 overflow-y-auto overflow-x-hidden rounded-xl border bg-slate-100 shadow-xl">
        <button
          className="absolute right-3 top-2 rounded-full shadow"
          onClick={handleOpenModalWindow}
        >
          <MdCancel
            size="25"
            className="text-slate-600 transition-all duration-300 hover:scale-110"
          />
        </button>

        {children}
      </div>
    </div>
  );
}

export default ModalWindow;
