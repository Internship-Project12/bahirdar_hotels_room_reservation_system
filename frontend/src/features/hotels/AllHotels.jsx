import { Link, useNavigate, useSearchParams } from "react-router-dom";
import HotelTableBody from "./HotelTable";
import HotelTableHeader from "./HotelTableHeader";
import { useHotels } from "./useHotels";
import Spinner from "../../ui/Spinner";
import { useForm } from "react-hook-form";

function AllHotels() {
  const navigate = useNavigate();
  const { data: { data: { data: hotels } = {} } = {}, isLoading } = useHotels();
  const { register, handleSubmit } = useForm();
  const [searchParams, setSearchParams] = useSearchParams();

  // const { data: hotels } = data.data;

  const onSubmitHandler = handleSubmit((data) => {
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
        <form
          className="group flex items-center justify-center"
          onSubmit={onSubmitHandler}
        >
          <div className="">
            <input
              type="search"
              disabled={isLoading}
              autoFocus
              className="rounded-full bg-slate-200 px-3 py-2 focus:outline-none disabled:cursor-not-allowed"
              placeholder="Search"
              {...register("search")}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="-ml-16 w-24 rounded-full bg-blue-600 px-3 py-2 text-white disabled:cursor-not-allowed disabled:bg-blue-400"
            >
              Search
            </button>
          </div>
        </form>

        {/* FILTER */}

        <div className="flex items-center justify-between gap-2">
          <select
            className="rounded-full px-4 py-2 transition-all duration-200 hover:scale-105 hover:cursor-pointer active:scale-105"
            onChange={handleStarsChange}
          >
            <option value="">hotel star</option>
            <option value="1">1 star</option>
            <option value="2">2 star</option>
            <option value="3">3 star</option>
            <option value="4">4 star</option>
            <option value="5">5 star</option>
          </select>

          <select
            className="rounded-full px-4 py-2 transition-all duration-200 hover:scale-105 hover:cursor-pointer active:scale-105"
            onChange={handleSortChange}
          >
            <option value="">sort by</option>
            <option value="a-z">a-z</option>
            <option value="z-a">z-a</option>
            <option value="newest">(recent first)</option>
            <option value="oldest">(earlier first)</option>
            <option value="pricePerNight-desc">
              price per night (high first)
            </option>
            <option value="pricePerNight-asc">
              price per night (low first)
            </option>
          </select>
        </div>

        <Link
          to={"/dashboard/add-hotel"}
          className="mr-2 cursor-pointer rounded bg-blue-700 px-4 py-[6px] text-lg text-white"
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
        <div>There are not hotels found</div>
      )}
    </div>
  );
}

export default AllHotels;
