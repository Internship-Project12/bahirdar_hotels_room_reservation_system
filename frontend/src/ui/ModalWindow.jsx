import { createPortal } from "react-dom";
import { useAuthContext } from "../context/AuthContext";
import { MdCancel } from "react-icons/md";

/* eslint-disable react/prop-types */
function ModalWindow({ children }) {
  const { handleOpenModalWindow } = useAuthContext();

  return createPortal(
    <>
      <div
        onClick={handleOpenModalWindow}
        className="fixed left-0 top-0 z-[999] h-screen w-full backdrop-blur-[.9px] transition-all duration-300 hover:cursor-pointer"
      ></div>

      <div className="fixed left-1/2 top-1/2 z-[1000] -translate-x-1/2 -translate-y-1/2 border bg-white shadow-xl">
        <button
          className="absolute right-3 top-2 rounded-full shadow"
          onClick={handleOpenModalWindow}
        >
          <MdCancel
            size="25"
            className="text-slate-600 transition-all duration-300 hover:scale-110"
          />
        </button>

        <div>{children}</div>
      </div>
    </>,
    document.getElementById("modal"),
  );
}

export default ModalWindow;
