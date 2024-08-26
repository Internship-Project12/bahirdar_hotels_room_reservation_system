/* eslint-disable react/prop-types */

// import { useState } from "react";
import HeaderAccountMenu from "./HeaderAccountMenu";
import { useAuthContext } from "../context/AuthContext";
import { useRef } from "react";
import { useOnClickOutside } from "../hooks/useOnClickOutside";
import { createPortal } from "react-dom";

function HeaderAccount() {
  const { user, isOpenModal, handleOpenModal } = useAuthContext();
  const menuRef = useRef(null);
  const iconRef = useRef(null);

  useOnClickOutside({ handler: handleOpenModal, refs: [menuRef, iconRef] });

  return (
    <div className="relative z-50">
      <div
        ref={iconRef}
        onClick={handleOpenModal}
        className="flex items-center justify-center gap-2 hover:cursor-pointer"
      >
        <div>
          <img
            className="h-10 w-10 rounded-full object-cover"
            src={user?.photo}
            alt="user photo"
          />
        </div>
      </div>
      {isOpenModal
        ? createPortal(
            <>
              <div
                ref={menuRef}
                className="top-14 absolute right-[20px] z-[998] mt-2 w-[13rem] rounded-md bg-slate-900 text-slate-50"
              >
                <HeaderAccountMenu />
              </div>
            </>,
            document.querySelector("#modal"),
          )
        : null}
    </div>
  );
}

export default HeaderAccount;
