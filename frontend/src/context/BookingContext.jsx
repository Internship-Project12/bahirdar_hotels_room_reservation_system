/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const BookingContext = createContext();

function BookingContextProvider({ children }) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const handleCheckIn = (date) => {
    setCheckIn(date);
  };

  const handleCheckOut = (date) => {
    setCheckOut(date);
  };

  return (
    <BookingContext.Provider
      value={{
        checkIn,
        checkOut,
        handleCheckIn,
        handleCheckOut,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

const useBookingContext = () => {
  const ctx = useContext(BookingContext);

  if (!ctx) {
    throw new Error(
      "useBookingContext must be used within a BookingContextProvider",
    );
  }

  return ctx;
};

export { BookingContextProvider, useBookingContext };
