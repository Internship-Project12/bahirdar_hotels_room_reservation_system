import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Select from "react-select";
import { useHotels } from "../features/hotels/useHotels";
import HotelsListItem from "../ui/HotelsListItem";
import StarRatingFilter from "../components/StarRatingFilter";
import { FaSearch } from "react-icons/fa";
import LoadingSkeleton from "../ui/LoadingSkeleton";
import { IoMdArrowRoundBack } from "react-icons/io";
import MaxWidthWrapper from "../ui/MaxWidthWrapper";

function HotelsListPage() {
  const [selectedStars, setSelectedStars] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();

  const { data: { data: { data: hotels } = {} } = {}, isLoading } = useHotels({
    selectedStars,
  });

  const handleSortChange = (selectedOption) => {
    const sort = selectedOption.value;
    searchParams.set("sortBy", sort);
    setSearchParams(searchParams);
  };

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

  // if (isLoading) {
  //   return (
  //     <div className="mx-auto flex min-h-screen justify-center lg:w-1/4">
  //       <div className="mt-5 p-4 lg:mt-12">
  //         <LoadingSkeleton className="h-3 w-[10rem]" />
  //         <LoadingSkeleton className="h-3 w-[30rem]" />
  //         <LoadingSkeleton className="h-3 w-[20rem]" />
  //         <LoadingSkeleton className="h-3 w-[15rem]" />
  //         <LoadingSkeleton className="h-3 w-[25rem]" />
  //         <LoadingSkeleton className="h-3 w-[10rem]" />
  //       </div>
  //     </div>
  //   );
  // }

  if (!hotels?.length && !isLoading) {
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
    <MaxWidthWrapper>
      <div className="relative mt-1 flex min-h-screen w-full justify-center gap-4">
        {/* filter/sort */}
        <div className="sticky top-4 p-2">
          <div className="flex flex-col items-center justify-center gap-6 space-y-8 p-2">
            <StarRatingFilter
              selectedStars={selectedStars}
              onChange={handleStarsChange}
            />
          </div>
        </div>

        <div className="-mt-6">
          {/* SEARCH */}
          <div className="flex w-full p-6">
            <section className="flex flex-1 items-center justify-between gap-x-6 gap-y-4 rounded bg-black/5 p-6">
              <div className="w-full">
                <Select
                  onChange={handleSortChange}
                  options={[
                    { label: "recent first", value: "newest" },
                    { label: "oldest first", value: "oldest" },
                    {
                      label: "average Rating: high first",
                      value: "avgRating-desc",
                    },
                    {
                      label: "average Rating: low first",
                      value: "avgRating-asc",
                    },
                    { label: "hotelStar: high first", value: "hotelStar-desc" },
                    { label: "hotelStar: low first", value: "hotelStar-asc" },
                    {
                      label: "min price per night: high first",
                      value: "minPricePerNight-desc",
                    },
                    {
                      label: "min price per night: low first",
                      value: "minPricePerNight-asc",
                    },
                    { label: "a-z", value: "a-z" },
                    { label: "z-a", value: "z-a" },
                  ]}
                  placeholder="sort hotels"
                />
              </div>

              <form
                className="group relative flex items-center justify-center"
                onSubmit={onSearchHandler}
              >
                <div className="flex flex-row rounded bg-slate-200 shadow-lg">
                  <input
                    type="search"
                    disabled={isLoading}
                    autoFocus
                    className="rounded bg-inherit px-6 py-2 focus:outline-none disabled:cursor-not-allowed"
                    placeholder="Search"
                    {...register("search")}
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="-ml-12 rounded px-5 text-black/20 disabled:cursor-not-allowed"
                  >
                    <FaSearch className="size-5" />
                  </button>
                </div>
              </form>
            </section>
          </div>
          <div className="flex w-full gap-4 px-6">
            {/* hotel cards */}
            {isLoading ? (
              <div className="mx-auto w-[69.5vw]">
                <div className="mx-auto flex min-h-screen w-full justify-center">
                  <div className="mt-5 p-4 lg:mt-12">
                    <LoadingSkeleton className="h-3 w-[10rem]" />
                    <LoadingSkeleton className="h-3 w-[30rem]" />
                    <LoadingSkeleton className="h-3 w-[20rem]" />
                    <LoadingSkeleton className="h-3 w-[15rem]" />
                    <LoadingSkeleton className="h-3 w-[25rem]" />
                    <LoadingSkeleton className="h-3 w-[10rem]" />
                  </div>
                </div>
              </div>
            ) : (
              <section className="min-h-[100vh] rounded-md border-l-2 border-r-2 py-4 shadow-lg">
                {hotels.map((hotel, i) => (
                  <HotelsListItem hotel={hotel} key={i} />
                ))}
              </section>
            )}
          </div>{" "}
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default HotelsListPage;
