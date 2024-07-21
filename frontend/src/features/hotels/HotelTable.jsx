/* eslint-disable react/prop-types */
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import { GoDash } from "react-icons/go";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import ModalWindow from "../../ui/ModalWindow";
import ModalDeleteHotel from "../../ui/ModalDeleteHotel";
import { useEffect, useState } from "react";

function HotelTable({ hotel }) {
  const { handleOpenModalWindow, openModalWindow } = useAuthContext();
  const [hotelToBeDeleted, setHotelToBeDeleted] = useState({});

  useEffect(() => {
    if (!openModalWindow && hotelToBeDeleted.name) {
      setHotelToBeDeleted({});
    }
  }, [openModalWindow, hotelToBeDeleted]);

  return (
    <>
      <div className="m-2 grid scale-y-90 grid-cols-10 items-center gap-3 overflow-hidden border-b border-r border-slate-200 text-sm shadow">
        <div className="col-span-1 col-start-1">
          <img
            className="h-16 w-full object-cover"
            src={hotel.imageCover}
            alt=""
          />
        </div>
        <div className="col-span-1 col-start-2">{hotel.name}</div>
        <div className="col-span-1 col-start-3">{`${hotel.hotelStar} ⭐ Hotel`}</div>
        <div className="col-span-1 col-start-4">{hotel.address}</div>
        <div className="col-span-1 col-start-5">
          {hotel.numOfRooms > 0 ? `${hotel.numOfRooms} Rooms` : <GoDash />}
        </div>
        <div className="col-span-1 col-start-6">
          {hotel.minPricePerNight || <GoDash />}
        </div>
        <div className="col-span-1 col-start-7">
          {/* NOTE: NUM OF RATINGS IS ALSO EQUAL TO NUM OF REVIEWS IN OUR CASE */}
          {hotel.numOfRatings > 0
            ? `${hotel.numOfRatings} Reviews`
            : "0 Reviews"}
        </div>
        <div className="col-span-1 col-start-8">{hotel.avgRating} ⭐</div>
        <div className="col-span-1 col-start-9 flex">
          {hotel.facilities && hotel.facilities.slice(0, 3).join(", ")}
        </div>
        <div className="col-span-1 col-start-10 flex flex-col items-center gap-1">
          <div className="flex gap-2">
            <Link to={`/dashboard/update-hotel/${hotel._id}`}>
              <MdEdit size={24} className="fill-blue-700" />
            </Link>
            <button
              onClick={() => {
                setHotelToBeDeleted(hotel);
                handleOpenModalWindow();
              }}
              className="disabled:cursor-not-allowed disabled:bg-slate-300 disabled:opacity-65"
            >
              <MdDeleteOutline
                size={24}
                className="fill-red-600 disabled:cursor-not-allowed disabled:fill-red-400"
              />
            </button>
          </div>
          <Link
            target="blank"
            to={`/hotels/${hotel._id}`}
            className="rounded bg-blue-700 p-2 font-semibold text-white"
          >
            Details
          </Link>
        </div>
      </div>

      {hotelToBeDeleted.name && (
        <ModalWindow>
          <ModalDeleteHotel hotel={hotelToBeDeleted} />
        </ModalWindow>
      )}
    </>
  );
}

export default HotelTable;
