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

  return (
    <div className="w-full bg-white text-gray-600 shadow-md">
      <div className="flex items-center justify-between">
        <h1 className="p-4 uppercase">
          <Link to='/dashboard/hotels'>All Hotels</Link>
        </h1>

        {/* SEARCH  */}
        <form
          className="group flex items-center justify-center"
          onSubmit={onSubmitHandler}
        >
          <div className="">
            <input
              type="search"
              className="rounded-full bg-slate-200 px-3 py-2 focus:outline-none"
              placeholder="Search"
              {...register("search")}
            />
            <button
              type="submit"
              className="-ml-16 w-24 rounded-full bg-blue-600 px-3 py-2 text-white"
            >
              Search
            </button>
          </div>
        </form>

        {/* FILTER */}

        <div className="flex items-center justify-between gap-2">
          <select
            className="rounded-full px-4 py-2"
            onChange={handleStarsChange}
          >
            <option value="">hotel star</option>
            <option value="1">1 star</option>
            <option value="2">2 star</option>
            <option value="3">3 star</option>
            <option value="4">4 star</option>
            <option value="5">5 star</option>
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
