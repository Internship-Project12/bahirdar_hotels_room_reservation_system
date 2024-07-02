/* eslint-disable react/prop-types */

import { hotels } from "../../data/hotels";

export const HotelsSection = () => {
  return (
    <section className="px-10 py-6">
      <h2 className="mb-4 text-2xl font-bold text-gray-600">
        Explore More Hotels
      </h2>
      <div className="grid grid-cols-2 gap-4 text-gray-600 md:grid-cols-3 lg:grid-cols-4">
        {hotels.map((hotel, index) => (
          <HotelCard
            key={index}
            imageSrc={hotel.image}
            hotelName={hotel.name}
          />
        ))}
      </div>
    </section>
  );
};

const HotelCard = ({ imageSrc, hotelName }) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg bg-gray-200 p-4">
      <img
        src={imageSrc}
        alt={hotelName}
        className="mb-2 h-40 w-full rounded-lg object-cover"
      />
      <h3 className="text-lg font-semibold text-gray-600">{hotelName}</h3>
    </div>
  );
};
