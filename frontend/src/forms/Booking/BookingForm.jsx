/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { useAuthContext } from "../../context/AuthContext";

function BookingForm({ roomId }) {
  const { user } = useAuthContext();
  console.log(user)

  const { handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      user: user._id,
      room: roomId,
    },
  });
  const [isValidCheckOutDate, setIsValidCheckOutDate] = useState(false);

  const minCheckInDate = new Date();
  const minCheckOutDate = new Date();

  const checkInDate = watch("checkInDate");
  const checkOutDate = watch("checkOutDate");

  const maxDate = new Date(Date.now() + 24 * 60 * 60 * 1000);
  maxDate.setFullYear(maxDate.getFullYear() + 1);

  const onSubmitHandler = handleSubmit((data) => {
    console.log(data);
  });

  useEffect(() => {
    const isValid =
      checkInDate &&
      checkOutDate &&
      new Date(checkInDate).getTime() <= new Date(checkOutDate).getTime();

    setIsValidCheckOutDate(!!isValid);
  }, [checkInDate, checkOutDate]);

  return (
    <div className="w-full rounded-lg border bg-slate-300 p-4 opacity-85 shadow-lg">
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
            minDate={minCheckInDate}
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
            minDate={minCheckOutDate}
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
    </div>
  );
}

export default BookingForm;
