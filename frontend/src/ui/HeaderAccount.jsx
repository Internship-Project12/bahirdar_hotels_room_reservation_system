/* eslint-disable react/prop-types */

import { useState } from "react";

function HeaderAccount({ user, children }) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  return (
    <div className="relative">
      <div
        onClick={handleOpenModal}
        className="flex items-center justify-center gap-2 hover:cursor-pointer"
      >
        <p className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-orange-600 text-4xl text-slate-900 shadow-md transition duration-300 hover:cursor-pointer">
          {user?.firstName[0]}
        </p>
      </div>
      {isOpenModal ? (
        <div className="top-15 absolute right-[-30px] mt-2 w-[13rem] rounded-md bg-slate-900 p-4 text-slate-50">
          {children}
        </div>
      ) : null}
    </div>
  );
}

export default HeaderAccount;
