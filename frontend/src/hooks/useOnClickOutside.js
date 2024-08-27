import { useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";

export const useOnClickOutside = ({ handler, refs }) => {
  const { isOpenModal } = useAuthContext();

  useEffect(() => {
    const handleClick = (e) => {
      if (
        refs.every((ref) => !ref.current?.contains(e.target)) &&
        isOpenModal
      ) {
        handler();
      }
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [handler, refs, isOpenModal]);
};
