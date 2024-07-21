/* eslint-disable react/prop-types */
import { FormProvider, useForm } from "react-hook-form";

import DetailSection from "./DetailSection";
import ImageSection from "./ImageSection";
import { useEffect, useState } from "react";
import AddHotelManager from "./AddHotelManager";
import Spinner from "../../ui/Spinner";
import { useAuthContext } from "../../context/AuthContext";
import SpinnerMini from "../../ui/SpinnerMini";
import ModalWindow from "../../ui/ModalWindow";
import ModalCreateManagerAccount from "../../ui/ModalCreateManagerAccount";
import UsersListItem from "../../ui/UsersListItem";

function ManageHotelForm({
  isAdding,
  isLoading,
  isUpdating = false,
  onSubmit,
  hotel,
  isInUpdateMode = false,
}) {
  const { role, handleOpenModalWindow, openModalWindow } = useAuthContext();

  const [managerHaveAccount, setManagerHaveAccount] = useState(true);
  const [selectedManager, setSelectedManager] = useState({});
  const [createdManager, setCreatedManager] = useState({});

  const [show, setShow] = useState("");

  const formMethods = useForm();
  const { handleSubmit, reset, setValue } = formMethods;

  const handleSelectedManager = (data) => {
    setSelectedManager(data);
  };

  useEffect(() => {
    if (createdManager._id) {
      setSelectedManager(createdManager);
      setValue("manager", createdManager._id);
    } else if(selectedManager?.id) {
      setValue("manager", selectedManager._id);
      setCreatedManager(selectedManager);
    }
  }, [createdManager, openModalWindow, setValue, selectedManager]);

  // IF IN UPDATE MODE RESET THE HOTEL DATA TO THE FORM
  useEffect(() => {
    // FIXME: SOMETIMES THE FUNCTION NOT TRIGGERED
    if (hotel) {
      reset(hotel);
      setValue("isInUpdateMode", isInUpdateMode);
    }
  }, [reset, hotel, isInUpdateMode, setValue]);

  const onSubmitHandler = handleSubmit((data) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("address", data.address);
    formData.append("hotelStar", data.hotelStar.toString());
    formData.append("summary", data.summary);

    data.facilities.forEach((facility, i) => {
      formData.append(`facilities[${i}]`, facility);
    });

    if (typeof data.manager === "string") {
      formData.append("manager", data.manager);
    }

    if (hotel?.imageCover) {
      formData.append("imageCover", hotel.imageCover);
    }

    if (hotel?.hotelImages) {
      data.hotelImages.forEach((image, i) => {
        formData.append(`hotelImages[${i}]`, image);
      });
    }

    if (data?.imageCoverFile)
      Array.from(data.imageCoverFile).forEach((image) => {
        formData.append(`imageCoverFile`, image);
      });

    if (data?.hotelImagesFiles)
      Array.from(data.hotelImagesFiles).forEach((image) => {
        formData.append(`hotelImagesFiles`, image);
      });

    // if (hotel) {
    //   formData.append("_id", hotel._id);
    // }

    onSubmit(formData);
  });

  return (
    <>
      <FormProvider {...formMethods}>
        <div className="flex items-center justify-center p-3">
          <h1 className="min-w-[30rem] cursor-pointer rounded-full bg-blue-600 px-6 py-2 text-center text-2xl font-bold uppercase text-white shadow-xl">
            {isInUpdateMode ? "update hotel" : "Add Hotel"}
          </h1>
        </div>
        {isLoading ? (
          <Spinner />
        ) : isInUpdateMode && !hotel ? (
          <div className="flex items-center justify-center p-6">
            <p className="text-2xl uppercase">there is no hotel to update</p>
          </div>
        ) : (
          <form
            onSubmit={onSubmitHandler}
            className="m-auto flex flex-col gap-8 rounded bg-slate-100 p-10 shadow-lg"
          >
            <div>
              <DetailSection />
              <ImageSection />
              {role === "admin" && isInUpdateMode ? (
                <AddHotelManager
                  handleSelectedManager={handleSelectedManager}
                />
              ) : (
                role === "admin" &&
                managerHaveAccount &&
                show === "haveAccount" && (
                  <AddHotelManager
                    handleSelectedManager={handleSelectedManager}
                  />
                )
              )}
              {role === "admin" &&
                !managerHaveAccount &&
                show === "haveNoAccount" && (
                  <div className="mt-6 flex items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={handleOpenModalWindow}
                      className="flex items-center gap-2 rounded-full bg-blue-700 px-6 py-2 text-xl text-slate-200 transition-all duration-300 hover:scale-105"
                    >
                      Create Manager Account
                    </button>

                    {createdManager?._id ? (
                      <div className="overflow-hidden rounded-full bg-slate-300 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:translate-x-2">
                        <UsersListItem
                          user={createdManager}
                          onClick={() => {}}
                        />
                      </div>
                    ) : !createdManager?._id ? (
                      <p className="text-sm font-normal text-red-400">
                        Please select the manager of the hotel. a hotel must
                        have a manager
                      </p>
                    ) : (
                      // this empty div is for styling purpose justify around
                      <div></div>
                    )}
                  </div>
                )}

              {!isInUpdateMode && (
                <>
                  <div className="my-4">
                    <p className="w-[30rem] leading-6 tracking-wide text-slate-500">
                      Does the manager have no account. You can create a new
                      account for the the manager and register the hotel after
                      then.
                    </p>

                    <button
                      type="button"
                      onClick={() => {
                        setShow("haveAccount");
                        setManagerHaveAccount(true);
                      }}
                      className="my-4 mr-4 rounded bg-slate-500 px-4 py-2 text-xs text-slate-200 transition-all duration-300 hover:bg-blue-600 hover:text-slate-200"
                    >
                      yes have an account
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setShow("haveNoAccount");
                        setManagerHaveAccount(false);
                      }}
                      className="my-4 ml-4 rounded bg-slate-500 px-4 py-2 text-xs text-slate-200 transition-all duration-300 hover:bg-blue-600 hover:text-slate-200"
                    >
                      no, have no account
                    </button>
                  </div>
                </>
              )}
            </div>
            <button
              type="submit"
              className="w-full rounded bg-blue-800 px-3 py-2 text-white transition-all duration-300 hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-600"
              disabled={
                isAdding ||
                isUpdating ||
                ((!selectedManager?._id || !createdManager?.id) &&
                  !isInUpdateMode) // we want this condition only in adding mode | isInUpdateMode is false by default
              }
            >
              {isAdding || isUpdating ? <SpinnerMini /> : "Save Hotel"}
            </button>
          </form>
        )}
      </FormProvider>

      {openModalWindow && (
        <ModalWindow>
          <div className="h-[70vh]">
            <ModalCreateManagerAccount setCreatedManager={setCreatedManager} />
          </div>
        </ModalWindow>
      )}
    </>
  );
}

export default ManageHotelForm;
