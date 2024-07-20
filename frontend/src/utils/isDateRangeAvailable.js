function isDateRangeAvailable({bookingDates, newCheckInDate, newCheckOutDate}) {
  // Convert new dates to Date objects
  const newCheckIn = new Date(newCheckInDate);
  const newCheckOut = new Date(newCheckOutDate);

  for (const booking of bookingDates) {
    const existingCheckIn = new Date(booking.checkInDate);
    const existingCheckOut = new Date(booking.checkOutDate);

    // Check if the new booking dates overlap with existing booking dates
    if (
      (newCheckIn >= existingCheckIn && newCheckIn <= existingCheckOut) ||
      (newCheckOut >= existingCheckIn && newCheckOut <= existingCheckOut) ||
      (newCheckIn <= existingCheckIn && newCheckOut >= existingCheckOut)
    ) {
      return false; // Overlapping dates found
    }
  }

  return true; // No overlapping dates found
}

export default isDateRangeAvailable;
