/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { useAuthContext } from "../../context/AuthContext";
import { useBookingContext } from "../../context/BookingContext";
import Spinner from "../../ui/Spinner";
import isDateRangeAvailable from "../../utils/isDateRangeAvailable";
import { useBookingsOnRoom } from "../../features/bookings/useBookingsOnRoom";
import { useNavigate } from "react-router-dom";

function BookingForm({ roomId }) {
  const { handleCheckIn, handleCheckOut } = useBookingContext();
  const { user } = useAuthContext();

  const navigate = useNavigate();
  // BOOKING LOGIC
  const currentUserBookings = user?.bookings;

  const [isValidCheckOutDate, setIsValidCheckOutDate] = useState(false);
  const [activeBooking, setActiveBooking] = useState({});
  const [currentBookOnRoom, setCurrentBookOnRoom] = useState({});
  const [isValidDateRange, setIsValidDateRange] = useState(true);

  const [showForm, setShowForm] = useState(true);

  const { handleSubmit, watch, setValue } = useForm();

  const {
    data: { data: { bookings: allBookingsOnThisRoom = [] } = {} } = {},
    isLoading,
  } = useBookingsOnRoom({ roomId });

  const onSubmitHandler = handleSubmit((data) => {
    console.log(data.checkInDate, data.checkOutDate);
    handleCheckIn(new Date(data.checkInDate));
    handleCheckOut(new Date(data.checkOutDate));
    navigate("booking");
  });

  const checkInDate = watch("checkInDate");
  const checkOutDate = watch("checkOutDate");

  const minDate = new Date();
  const maxDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 15);

  // CHECK FOR THE IMPUTED DATE VALUES
  useEffect(() => {
    const isValid =
      checkInDate &&
      checkOutDate &&
      new Date(checkInDate).getTime() <= new Date(checkOutDate).getTime();

    if (isValid) {
      setIsValidCheckOutDate(true);
    } else setIsValidCheckOutDate(false);
  }, [checkInDate, checkOutDate]);

  // CHECK IF THE CURRENT USER BOOKED THE ROOM ALREADY OR NOT
  useEffect(() => {
    if (!currentUserBookings || currentUserBookings?.length < 1) return;

    const bookOnThisRoom = currentUserBookings.filter(
      (book) => book.room._id === roomId,
    );

    if (!bookOnThisRoom.length) return;

    const activeBookings = bookOnThisRoom.filter(
      (book) => new Date(book.checkOutDate).getTime() > Date.now(),
    );

    if (!activeBookings.length) return;

    if (activeBookings.length) {
      // setIsThisRoomCurrentlyBookedByCurrentUser(true);
      setActiveBooking(activeBookings[0]);
      setShowForm(false);
    }
  }, [
    currentUserBookings,
    // setIsThisRoomCurrentlyBookedByCurrentUser,
    roomId,
    user,
  ]);

  // CHECK IF THE ROOM IS BOOKED BY OTHER USERS
  useEffect(() => {
    if (isLoading) return;

    const activeBookings = allBookingsOnThisRoom?.filter(
      (book) =>
        new Date(book.checkOutDate).getTime() > Date.now() &&
        new Date(book.checkInDate).getTime() < Date.now(),
    );

    if (activeBookings.length > 0) {
      setCurrentBookOnRoom(activeBookings[0]);
      setShowForm(false);
    }
  }, [allBookingsOnThisRoom, isLoading]);

  // check the date in case the user books a room that is already in book
  useEffect(() => {
    const bookingDates = allBookingsOnThisRoom
      .filter((book) => new Date(book.checkOutDate).getTime() > Date.now())
      .map((book) => {
        return {
          checkInDate: book.checkInDate,
          checkOutDate: book.checkOutDate,
        };
      });

    if (checkInDate && checkOutDate) {
      const isValidDateRange = isDateRangeAvailable({
        bookingDates,
        newCheckInDate: checkInDate,
        newCheckOutDate: checkOutDate,
      });

      setIsValidDateRange(isValidDateRange);
    }
  }, [allBookingsOnThisRoom, checkInDate, checkOutDate]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="w-full rounded-lg border bg-slate-300 p-4 opacity-85 shadow-lg">
      {activeBooking.checkInDate && activeBooking.checkOutDate && (
        <div className="m-2">
          <p className="w-full rounded-xl bg-blue-600 p-4 text-center text-xl text-slate-200">
            You booked this room from{" "}
            {new Date(activeBooking?.checkInDate).toLocaleDateString()} to{" "}
            {new Date(activeBooking?.checkOutDate).toLocaleDateString()}
          </p>

          <p className="m-2 mb-4 rounded-xl bg-white p-3 text-center text-xs text-slate-500">
            if you want to reserve this room for an other time feel fre to book
            it again
          </p>
          <div className="mb-4 flex items-center justify-center">
            <button
              onClick={() => setShowForm(!showForm)}
              className="w-full rounded-full bg-blue-600 px-3 py-2 text-xs text-white transition-all duration-200 hover:scale-105"
            >
              {showForm ? "close form" : "Book Room for other time"}
            </button>
          </div>
        </div>
      )}
      {currentBookOnRoom.checkInDate &&
        currentBookOnRoom.checkOutDate &&
        !activeBooking?.checkInDate && (
          <div className="m-2">
            <p className="w-full rounded-xl bg-blue-600 p-4 text-center text-xl text-slate-200">
              This Room is booked from{" "}
              {new Date(currentBookOnRoom?.checkInDate).toLocaleDateString()} to{" "}
              {new Date(currentBookOnRoom?.checkOutDate).toLocaleDateString()}{" "}
              by other user.
            </p>

            <p className="m-2 mb-4 rounded-xl bg-white p-3 text-center text-xs text-slate-500">
              if you want to reserve this room for an other time feel free to
              book it.
            </p>
            <div className="mb-4 flex items-center justify-center">
              <button
                onClick={() => setShowForm(!showForm)}
                className="w-full rounded-full bg-blue-600 px-3 py-2 text-xs text-white transition-all duration-200 hover:scale-105"
              >
                {showForm ? "close form" : "Book Room for other time"}
              </button>
            </div>
          </div>
        )}

      {showForm && (
        <>
          <h2 className="mb-4 border-b-2 border-slate-400 pb-4 text-center uppercase text-slate-600">
            Booking Form
          </h2>
          <form
            onSubmit={onSubmitHandler}
            className="grid grid-cols-1 items-center gap-4"
          >
            <div>
              <DatePicker
                required
                selected={checkInDate}
                onChange={(date) => setValue("checkInDate", date)}
                selectsStart
                startDate={checkInDate}
                endDate={checkOutDate}
                minDate={minDate}
                maxDate={maxDate}
                placeholderText="Check-in Date"
                className="min-w-full rounded-full bg-slate-50 px-4 py-2 text-center text-slate-600 focus:outline-none"
                wrapperClassName="min-w-full"
              />
            </div>
            <div>
              <DatePicker
                required
                selected={checkOutDate}
                onChange={(date) => setValue("checkOutDate", date)}
                selectsStart
                startDate={checkInDate}
                endDate={checkOutDate}
                minDate={minDate}
                maxDate={maxDate}
                placeholderText="Check-Out Date"
                className="min-w-full rounded-xl bg-slate-100 px-4 py-2 text-center text-slate-600 focus:outline-none"
                wrapperClassName="min-w-full"
              />
            </div>

            <button
              disabled={!isValidDateRange}
              className="w-full rounded bg-blue-600 px-3 py-2 text-xl uppercase text-slate-100 shadow-xl disabled:cursor-not-allowed disabled:bg-blue-500"
            >
              Book Room Now
            </button>
          </form>
          {checkInDate && checkOutDate && !isValidCheckOutDate && (
            <p className="pt-3 text-center text-sm text-red-900 underline">
              select a valid check in and checkout date before submitting a form
            </p>
          )}
          {!isValidDateRange && isValidCheckOutDate && (
            <p className="pt-3 text-center text-sm tracking-wide text-slate-900 underline">
              there is already a user who booked on the same day before you.
              please change another free room or adjust your date. thank you!
            </p>
          )}
        </>
      )}
    </div>
  );
}

export default BookingForm;
