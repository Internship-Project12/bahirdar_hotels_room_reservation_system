import { GrUserManager } from "react-icons/gr";
import UsersListModal from "../../ui/UsersListModal";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import UsersListItem from "../../ui/UsersListItem";
// import SpinnerMini from "../../ui/SpinnerMini";

function AddHotelManager() {
  const [showModal, setShowModal] = useState(false);
  const [selectedManager, setSelectedManager] = useState();

  const { setValue } = useFormContext();

  const handleShowModal = (e) => {
    e.preventDefault();
    setShowModal(!showModal);
  };

  const handleSelectManager = (user) => {
    setValue("manager", user._id);
    setShowModal(!showModal);
    setSelectedManager(user);
  };

  return (
    <div className="relative w-full">
      <div className="flex items-center justify-around gap-3">
        <button
          onClick={handleShowModal}
          className="flex items-center gap-2 rounded-full bg-blue-700 px-3 py-2 text-xl text-slate-200 transition-all duration-300 "
        >
          {/* <SpinnerMini/> */}
          <GrUserManager size={30} />
          Add Manager
        </button>
        {setSelectedManager ? (
          <div className="overflow-hidden rounded-full bg-slate-300 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:translate-x-2">
            <UsersListItem user={selectedManager} onClick={() => {}} />{" "}
          </div>
        ) : (
          // this empty div is for styling purpose justify around
          <div></div>
        )}
      </div>
      {showModal && (
        <UsersListModal handleSelectManager={handleSelectManager} />
      )}
    </div>
  );
}

export default AddHotelManager;

/*
{
      _id: '668ce22aa5b16ed846c21a18',
      firstName: 'admin',
      lastName: 'Kassahun',
      email: 'admin@test.com',
      role: 'admin',
      phoneNumber: '0908005801',
      createdAt: '2024-07-09T07:09:30.494Z',
      updatedAt: '2024-07-13T11:38:46.251Z',
      __v: 0,
      photo: 
        'https://res.cloudinary.com/dvp1mjhd9/image/upload/v1714759095/gsqg5uwxwtzc744wy6j5.png'
    },
 */
