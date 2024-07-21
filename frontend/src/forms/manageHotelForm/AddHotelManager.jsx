/* eslint-disable react/prop-types */
import { GrUserManager } from "react-icons/gr";
import UsersListModal from "../../ui/UsersListModal";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import UsersListItem from "../../ui/UsersListItem";
// import SpinnerMini from "../../ui/SpinnerMini";

function AddHotelManager({handleSelectedManager}) {
  const [showModal, setShowModal] = useState(false);
  const [selectedManager, setSelectedManager] = useState();

  // the manager is not registered using react hook form so their is no way to validate if it is empty or not 
  // so i use this state to manually check if manager is selected or not and then display a warning
  // const [firstRender, setFirstRender] = useState(true);

  const { setValue, watch } = useFormContext();

  const handleShowModal = (e) => {
    e.preventDefault();
    setShowModal(!showModal);
  };

  const isInUpdateMode = watch("isInUpdateMode");
  const currentManager = watch("manager");

  const handleSelectManager = (user) => {
    setValue("manager", user._id);
    setShowModal(!showModal);
    setSelectedManager(user);

    // from the upper comp to check if the manager is selected or not | because of the two ways of adding a manger to the hotel
    handleSelectedManager(user)
  };

  return (
    <div className="relative w-full">
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={handleShowModal}
          className="flex items-center gap-2 rounded-full bg-blue-700 px-6 py-2 text-xl text-slate-200 transition-all duration-300 hover:scale-105"
        >
          {/* <SpinnerMini/> */}
          <GrUserManager size={30} />
          {`${!isInUpdateMode ? "Add Manager" : "Change Manger of Hotel"}`}
        </button>
        {selectedManager || isInUpdateMode ? (
          <div className="overflow-hidden rounded-full bg-slate-300 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:translate-x-2">
            <UsersListItem
              user={selectedManager || currentManager}
              onClick={() => {}}
            />
          </div>
        ) : !currentManager ? (
          <p className="text-sm font-normal text-red-400">
            Please select the manager of the hotel. a hotel must have a manager
          </p>
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
