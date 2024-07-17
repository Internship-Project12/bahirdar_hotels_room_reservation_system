/* eslint-disable react/prop-types */
import { FaStar, FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

/*
{
    _id: '668ce2f3603914bd3b9e584e',
    name: 'Azwa International Hotel',
    imageCover: 
      'http://res.cloudinary.com/dvp1mjhd9/image/upload/v1719767825/q3elysozotzxbdpddv8b.jpg',
    hotelImages: [
      
        'http://res.cloudinary.com/dvp1mjhd9/image/upload/v1719767826/dpdcizouxqvmwiubmhel.jpg', 
        'http://res.cloudinary.com/dvp1mjhd9/image/upload/v1719767828/jccr0lowxldhrotudni2.jpg'
    ],
    numOfRatings: 2,
    avgRating: 3.5,
    address: 'Addis Ababa, Ethiopia',
    summary: '5-star hotel located in the heart of Addis Ababa, Ethiopia',
    description: 
      'Addis International Hotel is a 5-star hotel located in the heart of Addis Ababa, Ethiopia. The hotel offers a luxurious experience with its spacious rooms, modern amenities, and exceptional service. Whether you are traveling for business or pleasure, Addis International Hotel is the perfect choice for your stay in Addis Ababa.',
    facilities: Array(6) [
      'Gym', 'Facilities for disabled guests', 'Air conditioning', 'Private bathroom',
      'Terrace', 'Kitchen'
    ],
    manager: '668ce265a5b16ed846c21a1c',
    createdAt: '2024-07-09T07:12:51.451Z',
    updatedAt: '2024-07-15T13:34:52.226Z',
    minPricePerNight: 0,
    numOfRooms: 1,
    hotelStar: 4,
    id: '668ce2f3603914bd3b9e584e'
  }
*/

function HotelsListItem({ hotel }) {
  return (
    <div>
      <div className="mx-auto mb-4 flex max-h-[300px] w-[90%] justify-between overflow-hidden rounded border p-3 shadow-xl transition-all duration-300 hover:translate-x-1 hover:scale-[1.02] hover:cursor-grab">
        <div className="flex w-[75%] gap-3">
          {/* HOTEL IMAGE */}
          <div className="h-[250px] overflow-hidden rounded shadow-xl">
            <img
              src={hotel.imageCover}
              alt="hotel cover image"
              className="h-full w-full object-cover object-center"
            />
          </div>
          {/* HOTEL NAME */}
          <div className="flex flex-col justify-around">
            <div className="flex flex-col gap-2">
              <Link
                to={`/hotels/${hotel._id}`}
                className="text-2xl font-bold text-blue-600"
              >
                {hotel.name}
              </Link>
              <span className="text-sm text-slate-500">
                ({hotel.hotelStar} Star Hotel In Bahirdar)
              </span>
              <p className="text-sm text-slate-500">{hotel.address}</p>
            </div>
            <div className="flex flex-col justify-center gap-3">
              <span>{hotel.numOfRooms} Standard Rooms</span>
            </div>
            <p>{hotel.summary}</p>
          </div>
        </div>

        {/* summary */}
        <div className="flex w-[25%] flex-col items-end justify-evenly p-2">
          <div className="flex flex-col items-end gap-1">
            <div className="flex items-center gap-2">
              <span className="flex gap-1">
                {[1, 2, 3, 4, 5].map((val, i) =>
                  Math.floor(hotel.avgRating) >= val ? (
                    <FaStar
                      key={i}
                      color="#fcc419"
                      fill="#fcc419"
                      size={"20px"}
                    />
                  ) : (
                    <FaRegStar
                      key={i}
                      color="#fcc419"
                      fill="#fcc419"
                      size={"20px"}
                    />
                  ),
                )}
              </span>
              <span className="font-bold tracking-tighter text-yellow-400">
                {hotel.avgRating}
              </span>
            </div>
            <h3 className="text-gray-5 p-2 text-sm font-light tracking-tight text-slate-500 shadow transition-all duration-200">
              {hotel.numOfRatings ? (
                <span className="font-bold text-blue-600">
                  total of {hotel.numOfRatings} reviews
                </span>
              ) : (
                "Have Reviews Yet"
              )}
            </h3>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-sm font-bold text-slate-500">
              Price / Night:{" "}
              <span className="text-lg font-bold tracking-tighter text-blue-600">
                {`${hotel.minPricePerNight} ETB`}
              </span>
            </p>
          </div>
          <Link
            to={`/hotels/${hotel._id}`}
            className="rounded bg-blue-600 p-2 text-white"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HotelsListItem;
