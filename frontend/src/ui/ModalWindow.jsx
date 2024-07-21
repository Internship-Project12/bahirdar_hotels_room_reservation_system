import { useAuthContext } from "../context/AuthContext";

/* eslint-disable react/prop-types */
function ModalWindow({ children }) {
  const { openModalWindow, handleOpenModalWindow } = useAuthContext();

  if (!openModalWindow) return;

  return (
    <div className="absolute inset-0 left-0 top-0 z-[100] flex items-center justify-center">
      <div
        onClick={handleOpenModalWindow}
        className="absolute inset-0 left-0 top-0 bg-black opacity-[0.2] hover:cursor-pointer"
      ></div>
      <div className="max-w-[40vw] -translate-y-12 translate-x-4 overflow-hidden rounded-xl border bg-slate-50 shadow-xl">
        {children}
      </div>
    </div>
  );
}

export default ModalWindow;
