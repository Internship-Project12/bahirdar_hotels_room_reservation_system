import { useEffect } from "react";

export const useOnClickOutside = ({ handler, refs }) => {
  useEffect(() => {
    const handleClick = (e) => {
      if (refs.every((ref) => !ref.current?.contains(e.target))) {
        handler();
      }
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [handler, refs]);
};
