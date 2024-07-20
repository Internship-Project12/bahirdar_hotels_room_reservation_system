/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { useAuthContext } from "../../context/AuthContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiBookings from "../../services/apiBookings";
import toast from "react-hot-toast";
import QueryKey from "../../constants/QueryKey";
import Spinner from "../../ui/Spinner";

/*
:54:39.563	      
  [
    {
      _id: '669ba54027a554b880583560',
      user: {
        _id: '668ce28fa5b16ed846c21a22',
        firstName: 'Edmealem',
        lastName: 'Kassahun',
        email: 'test@test.com',
        role: 'user',
        phoneNumber: '0908005801',
        photo: 
          'https://res.cloudinary.com/dvp1mjhd9/image/upload/v1714759095/gsqg5uwxwtzc744wy6j5.png',
        hotel: '669a212258bd030819d82b8a',
        id: '668ce28fa5b16ed846c21a22'
      },
      room: {
        _id: '6696b7a3a5b4af65992602bc',
        roomNumber: '285',
        roomType: 'single',
        pricePerNight: 350,
        images: [
          
            'http://res.cloudinary.com/dvp1mjhd9/image/upload/v1721153443/nqbndwsiqqcfjtsvqk5a.jpg', 
            'http://res.cloudinary.com/dvp1mjhd9/image/upload/v1721153443/pv3qxsmtm6d8ehmzh6b0.jpg'
        ],
        id: '6696b7a3a5b4af65992602bc'
      },
      checkInDate: '2024-07-19T21:00:00.000Z',
      checkOutDate: '2024-07-19T21:00:00.000Z',
      status: 'pending',
      createdAt: '2024-07-20T11:53:36.431Z',
      updatedAt: '2024-07-20T11:53:36.431Z',
      hotel: '668ced40c8a56b00ec4b58da',
      numOfNights: 1,
      pricePerNight: 350,
      totalPrice: 350,
      __v: 0,
      id: '669ba54027a554b880583560'
    }
  ] 
  */

function BookingForm({ roomId }) {
  const { user } = useAuthContext();
  const queryClient = useQueryClient();
  const [isValidCheckOutDate, setIsValidCheckOutDate] = useState(false);
  const [activeBooking, setActiveBooking] = useState({});
  const [showForm, setShowForm] = useState(true);

  // const [booked, setBooked] = useState(false);
  // const [isThisRoomCurrentlyBookedByUser, setIsThisRoomCurrentlyBookedByUser] = useState(false);
  // const [
  //   isThisRoomCurrentlyBookedByCurrentUser,
  //   setIsThisRoomCurrentlyBookedByCurrentUser,
  // ] = useState(false);
  // const [isAllowedToBook, setIsAllowedToBook] = useState(
  //   !isThisRoomCurrentlyBookedByCurrentUser,
  // );

  const { handleSubmit, watch, setValue, reset } = useForm({
    defaultValues: {
      user: user._id,
      room: roomId,
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data) => apiBookings.createBooking(data),
    onSuccess: async () => {
      toast.success("Room booked successfully.");
      await queryClient.invalidateQueries([QueryKey.BOOKINGS]);
      await queryClient.invalidateQueries([QueryKey.USER]);
      reset();
      // setBooked(true);
    },
    onError: (error) => {
      console.log(error);
      toast.error(
        "An error occurred When booking a room. Please try again later.",
      );
    },
  });

  const onSubmitHandler = handleSubmit((data) => {
    mutate(data);
  });

  const checkInDate = watch("checkInDate");
  const checkOutDate = watch("checkOutDate");

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);

  useEffect(() => {
    const isValid =
      checkInDate &&
      checkOutDate &&
      new Date(checkInDate).getTime() <= new Date(checkOutDate).getTime();

    setIsValidCheckOutDate(!!isValid);
  }, [checkInDate, checkOutDate]);

  // BOOKING LOGIC
  const currentUserBookings = user?.bookings;

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

  if (isPending) {
    return <Spinner />;
  }

  // if (booked) {
  //   return <div>You booked this room</div>;
  // }

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
              className="rounded-full bg-blue-600 px-3 py-2 w-full text-xs text-white transition-all duration-200 hover:scale-105"
            >
              {showForm ? "close form" : "Book Room for other time"}
            </button>
          </div>
        </div>
      )}
      {/* {activeBooking.checkInDate && !isFormvisible && <p>Add a booking for an other time</p> } */}
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
              disabled={!isValidCheckOutDate}
              className="w-full rounded bg-blue-600 px-3 py-2 text-xl uppercase text-slate-100 shadow-xl disabled:cursor-not-allowed disabled:bg-blue-500"
            >
              Book Room Now
            </button>
          </form>
          {!isValidCheckOutDate && (
            <p className="pt-3 text-center text-sm text-red-900 underline">
              select a valid check in and checkout date before submitting a form
            </p>
          )}
        </>
      )}
    </div>
  );
}

export default BookingForm;
