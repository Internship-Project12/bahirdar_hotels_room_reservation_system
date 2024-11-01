import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import { useHotels } from "../features/hotels/useHotels";
import HotelListFilter from "../ui/HotelListFilter";
import HotelsListItem from "../ui/HotelsListItem";
import StarRatingFilter from "../components/StarRatingFilter";
import Search from "../ui/Search";
import LoadingSkeleton from "../ui/LoadingSkeleton";
import { IoMdArrowRoundBack } from "react-icons/io";

function HotelsListPage() {
  const [selectedStars, setSelectedStars] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();

  const { data: { data: { data: hotels } = {} } = {}, isLoading } = useHotels({
    selectedStars,
  });

  const onSearchHandler = handleSubmit((data) => {
    if (!data?.search) {
      return navigate("/hotels");
    }

    searchParams.set("search", data.search);
    setSearchParams(searchParams);
  });

  const handleStarsChange = (e) => {
    const starRating = e.target.value;

    setSelectedStars((prevStars) =>
      e.target.checked
        ? [...prevStars, starRating]
        : prevStars.filter((star) => star !== starRating),
    );
  };

  if (isLoading) {
    return (
      <div className="mx-auto flex min-h-screen justify-center lg:w-3/4">
        <div className="flex w-full flex-col items-center">
          <LoadingSkeleton className="h-52 w-[30rem]" />
          <LoadingSkeleton className="h-52 w-[30rem]" />
        </div>
      </div>
    );
  }

  if (!hotels?.length) {
    return (
      <div className="mt-5 flex min-h-screen flex-col items-center gap-6 md:mt-12">
        <Link
          to="/"
          className="flex w-fit items-center gap-2 rounded bg-blue-500 px-3 py-1 text-white"
        >
          <IoMdArrowRoundBack />
          Back to Home
        </Link>
        <div className="">
          <p className="text-4xl capitalize text-black/30 lg:text-6xl">
            404) not hotels found
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="z-10 h-24 overflow-hidden opacity-85">
        {/* SEARCH */}
        <div className="mx-auto w-[50vw] scale-150 rounded p-3">
          <Search
            onSearchHandler={onSearchHandler}
            register={register}
            isLoading={isLoading}
            className="mt-4"
          />
        </div>
      </div>

      <div className="flex w-full gap-4 p-6">
        {/* filter/sort */}
        <div className="sticky top-2 h-fit w-[25%] border-r-2 border-t-2 p-2">
          <HotelListFilter isLoading={isLoading}>
            <StarRatingFilter
              selectedStars={selectedStars}
              onChange={handleStarsChange}
            />
          </HotelListFilter>
        </div>
        {/* hotels list */}
        <section className="w-[80%] rounded-md border-l-2 border-r-2 py-4 shadow-lg">
          {/* hotel cards */}
          {hotels.map((hotel, i) => (
            <HotelsListItem hotel={hotel} key={i} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default HotelsListPage;
