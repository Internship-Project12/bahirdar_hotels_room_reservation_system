/* eslint-disable react/prop-types */

import { useState } from "react";
import HeaderAccountMenu from "./HeaderAccountMenu";
import { useAuthContext } from "../context/AuthContext";

function HeaderAccount() {
  const [isOpenModal, setIsOpenModal] = useState(false);
    const { user } = useAuthContext();


  const handleOpenModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  return (
    <div className="relative z-50">
      <div
        onClick={handleOpenModal}
        className="flex items-center justify-center gap-2 hover:cursor-pointer"
      >
        <p className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-orange-600 text-4xl text-slate-900 shadow-md transition duration-300 hover:cursor-pointer">
          {user?.firstName[0]}
        </p>
        <p className="tracking-widest text-white underline underline-offset-4">
          {" "}
          {user?.firstName}
        </p>
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
