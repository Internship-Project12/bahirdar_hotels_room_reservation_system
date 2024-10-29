import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";

import { useHotels } from "../features/hotels/useHotels";
import HotelListFilter from "../ui/HotelListFilter";
import HotelsListItem from "../ui/HotelsListItem";
import Spinner from "../ui/Spinner";
import StarRatingFilter from "../components/StarRatingFilter";
import Search from "../ui/Search";

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

  return (
    <div>
      <div className="z-10 h-24 overflow-hidden bg-blue-900 opacity-85">
        {/* SEARCH */}
        <div className="mx-auto w-[50vw] scale-150 rounded p-3">
          <Search
            onSearchHandler={onSearchHandler}
            register={register}
            isLoading={isLoading}
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
        {isLoading ? (
          <div className="flex h-[10rem] w-full items-center justify-center">
            <Spinner />
          </div>
        ) : (
          <section className="w-[80%] rounded-md border-l-2 border-r-2 py-4 shadow-lg">
            {/* hotel cards */}
            {hotels?.length > 0 ? (
              [...hotels, ...hotels].map((hotel) => (
                <HotelsListItem hotel={hotel} key={hotel._id} />
              ))
            ) : (
              <div className="flex h-full items-center justify-center uppercase">
                <p className="border-b-2 text-2xl">
                  404): there are not hotels found
                </p>
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
}

export default HotelsListPage;
