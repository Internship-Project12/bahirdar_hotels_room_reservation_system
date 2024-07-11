/* eslint-disable react/prop-types */

import { hotels } from "../../data/hotels";

export const HotelsSection = () => {
  return (
    <div className="min-h-screen bg-gray-200 p-8">
      <h1 className="mb-8 text-4xl font-bold">Popular Hotels</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {hotels.map((hotel) => (
          <HotelCard hotel={hotel} key={hotel.id} />
        ))}
      </div>
    </div>
  );
};

const HotelCard = ({ hotel }) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-lg">
      <img
        className="h-48 w-full object-cover"
        src={hotel.imageCover}
        alt={hotel.name}
      />
      <div className="p-4">
        <h2 className="mb-2 text-2xl font-bold">{hotel.name}</h2>
        <p className="text-gray-600">{hotel.address}</p>
        <p className="mt-2 text-gray-800">{hotel.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center">
            {[...Array(hotel.starRating)].map((star, index) => (
              <svg
                key={index}
                className="h-5 w-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.42 4.368a1 1 0 00.95.69h4.584c.969 0 1.371 1.24.588 1.81l-3.705 2.693a1 1 0 00-.364 1.118l1.42 4.368c.3.921-.755 1.688-1.538 1.118l-3.705-2.693a1 1 0 00-1.175 0l-3.705 2.693c-.783.57-1.838-.197-1.538-1.118l1.42-4.368a1 1 0 00-.364-1.118L2.505 9.795c-.783-.57-.381-1.81.588-1.81h4.584a1 1 0 00.95-.69l1.42-4.368z" />
              </svg>
            ))}
          </div>
          <p className="rounded border bg-blue-500 p-2 text-lg font-bold text-white">
            ${hotel.minPricePerNight}/night
          </p>
        </div>
      </div>
    </div>
  );
};
