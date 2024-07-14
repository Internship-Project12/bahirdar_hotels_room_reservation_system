import { Link, useNavigate, useSearchParams } from "react-router-dom";
import HotelTableBody from "./HotelTable";
import HotelTableHeader from "./HotelTableHeader";
import { useHotels } from "./useHotels";
import Spinner from "../../ui/Spinner";
import { useForm } from "react-hook-form";
import Search from "../../ui/Search";
import SortBy from "../../ui/SortBy";

function AllHotels() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [searchParams, setSearchParams] = useSearchParams();

  const { data: { data: { data: hotels } = {} } = {}, isLoading } = useHotels();

  const onSearchHandler = handleSubmit((data) => {
    if (!data?.search) {
      return navigate("/dashboard/hotels");
    }
    searchParams.set("search", data.search);
    setSearchParams(searchParams);
  });

  const handleStarsChange = (e) => {
    e.preventDefault();
    const star = e.target.value;
    searchParams.set("hotelStar", star);
    setSearchParams(searchParams);
  };

  const handleSortChange = (e) => {
    e.preventDefault();
    const sort = e.target.value;
    searchParams.set("sortBy", sort);
    setSearchParams(searchParams);
  };

  return (
    <div className="w-full bg-white text-gray-600 shadow-md">
      <div className="flex items-center justify-between p-6">
        <h1 className="p-4 uppercase">
          <Link to="/dashboard/hotels">All Hotels</Link>
        </h1>

        {/* SEARCH  */}
        <Search
          isLoading={isLoading}
          onSearchHandler={onSearchHandler}
          register={register}
        />

        {/* FILTER */}

        <div className="flex items-center justify-between gap-2">
          {/* SORT BY HOTEL STAR */}
          <SortBy
            handleChange={handleStarsChange}
            options={[
              { label: "hotel star", value: "" },
              { label: "1 star", value: "1" },
              { label: "2 star", value: "2" },
              { label: "3 star", value: "3" },
              { label: "4 star", value: "4" },
              { label: "5 star", value: "5" },
            ]}
          />

          {/* OTHER SORTING   */}
          <SortBy
            handleChange={handleSortChange}
            options={[
              { label: "sort by", value: "" },
              {
                label: "price per night (high first)",
                value: "pricePerNight-desc",
              },
              {
                label: "price per night (low first)",
                value: "pricePerNight-asc",
              },
              { label: "avgRating (high first)", value: "avgRating-desc" },
              { label: "low avgRating (low first)", value: "avgRating-asc" },
              { label: "recent first", value: "newest" },
              { label: "oldest first", value: "oldest" },
              { label: "a-z", value: "a-z" },
              { label: "z-a", value: "z-a" },
            ]}
          />
        </div>

        <Link
          to={"/dashboard/add-hotel"}
          className="mr-2 cursor-pointer rounded-full bg-blue-700 px-4 py-[6px] text-lg text-white transition-all duration-200 hover:scale-105"
        >
          Add Hotel
        </Link>
      </div>

      <HotelTableHeader />

      {isLoading ? (
        <Spinner />
      ) : hotels.length > 0 ? (
        hotels.map((hotel) => <HotelTableBody key={hotel.id} hotel={hotel} />)
      ) : (
        <div>There are not bookings found</div>
      )}
    </div>
  );
}

export default AllHotels;
