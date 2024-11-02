/* eslint-disable react/prop-types */

import QueryKey from "../../../constants/QueryKey";
import apiHotels from "../../../services/apiHotels";
import MaxWidthWrapper from "../../../ui/MaxWidthWrapper";
import { useQuery } from "@tanstack/react-query";

export const HotelsSection = () => {
  const { data: { data: { data } = {} } = {}, isLoading } = useQuery({
    queryKey: [QueryKey.POPULAR_HOTELS],
    queryFn: apiHotels.getPopularHotels,
  });

  if (isLoading) return <p>Loading...</p>;

  const hotels = data;

  return (
    <section className="">
      <MaxWidthWrapper>
        <div className="my-5 flex flex-col items-center justify-center space-y-10 p-4">
          <h2 className="border-b p-4 text-xl text-black/70 shadow md:text-2xl md:font-bold lg:text-4xl">
            Popular Hotels
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:gap-16">
            {hotels.map((hotel) => (
              <HotelCard hotel={hotel} key={hotel.id} />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

const HotelCard = ({ hotel }) => {
  return (
    <div className="cursor-pointer overflow-hidden rounded-sm bg-slate-100 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <img
        className="h-48 w-full object-cover"
        src={hotel.imageCover}
        alt={hotel.name}
      />
      <div className="p-4">
        <h2 className="mb-2 text-2xl font-bold">{hotel.name}</h2>
        <p className="text-gray-600">{hotel.address}</p>
        <p className="mt-2 text-sm text-black/30">{hotel.summary}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center">
            {[...Array(hotel.hotelStar)].map((star, index) => (
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
          <button className="rounded bg-blue-600 px-3 py-1 text-lg text-white">
            ${hotel.minPricePerNight}/night
          </button>
        </div>
      </div>
    </div>
  );
};

/*
 [
            {
                "_id": "66cc9e7ad11fe9fe45ba7911",
                "name": "Addis International Hotel",
                "hotelStar": 5,
                "imageCover": "http://res.cloudinary.com/dvp1mjhd9/image/upload/v1724685942/HotelBookingApp_Intern/hotels/myz1edlgmcybyqmsnhwm.jpg",
                "address": "Bahir Dar, Amhara, 16km from the main straight",
                "summary": "5-star hotel located in the heart of Addis Ababa, Ethiopia",
                "minPricePerNight": 350,
                "numOfRooms": 2,
                "avgRating": 4.5,
                "id": "66cc9e7ad11fe9fe45ba7911"
            },
            {
                "_id": "6724ce454c8babc72db74daf",
                "name": "Bahir Dar Sunshine Inn",
                "hotelStar": 4,
                "imageCover": "http://res.cloudinary.com/dvp1mjhd9/image/upload/v1730465319/HotelBookingApp_Intern/hotels/qef0t5ahpbkc2sw2da69.jpg",
                "address": "Bahir Dar, Amhara, 16km from the main straight",
                "summary": "The hotel offers a luxurious experience with its spacious rooms, modern amenities, and exceptional service.",
                "minPricePerNight": 0,
                "numOfRooms": 1,
                "avgRating": 4.5,
                "id": "6724ce454c8babc72db74daf"
            },
            {
                "_id": "6724d0b462cd27952fce2bc2",
                "name": "Lake Tana Palace",
                "hotelStar": 3,
                "imageCover": "http://res.cloudinary.com/dvp1mjhd9/image/upload/v1730465967/HotelBookingApp_Intern/hotels/gpfofzrhxy2i9ihs4f8k.jpg",
                "address": "Bahir Dar, Amhara, 2km from Bahir Dar Market",
                "summary": "4-star hotel in Bahir Dar offering modern amenities with convenient access to Lake Tana and local attractions.",
                "minPricePerNight": 0,
                "numOfRooms": 0,
                "avgRating": 4.5,
                "id": "6724d0b462cd27952fce2bc2"
            }
        ]
 */
