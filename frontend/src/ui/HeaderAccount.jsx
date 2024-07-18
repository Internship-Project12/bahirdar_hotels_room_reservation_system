/* eslint-disable react/prop-types */

// import { useState } from "react";
import HeaderAccountMenu from "./HeaderAccountMenu";
import { useAuthContext } from "../context/AuthContext";

function HeaderAccount() {
  const { user, isOpenModal, handleOpenModal } = useAuthContext();

  return (
    <div className="relative z-50">
      <div
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
      {isOpenModal ? (
        <>
          <div
            // onClick={handleOpenModal}
            className="top-15 absolute right-[-30px] z-50 mt-2 w-[13rem] rounded-md bg-slate-900 text-slate-50"
          >
            <HeaderAccountMenu />
          </div>
        </>
      ) : null}
    </div>
  );
}

export default HeaderAccount;
