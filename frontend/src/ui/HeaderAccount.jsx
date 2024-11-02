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
        <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-slate-50">
          {user?.photo ? (
            <img
              className="h-full w-full object-cover object-center"
              src={user?.photo}
              alt=""
            />
          ) : (
            <span className="text-black">
              {`${user?.firstName.charAt(0).toUpperCase()}${user?.lastName.charAt(0).toUpperCase()}`}
            </span>
          )}
        </div>
      </div>
      {isOpenModal
        ? createPortal(
            <>
              <div
                ref={menuRef}
                className="absolute right-12 top-16 z-[100] mt-2 w-[13rem] rounded-md border-2 border-black/10 bg-white text-black/50 shadow-lg"
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
