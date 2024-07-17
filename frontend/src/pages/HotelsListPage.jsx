import { useState } from "react";
import { useHotels } from "../features/hotels/useHotels";
import HotelListFilter from "../ui/HotelListFilter";
import HotelsListItem from "../ui/HotelsListItem";
import Spinner from "../ui/Spinner";
import StarRatingFilter from "../components/StarRatingFilter";

function HotelsListPage() {
  const [selectedStars, setSelectedStars] = useState([]);

  const { data: { data: { data: hotels } = {} } = {}, isLoading } = useHotels({
    selectedStars,
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
    <div className="flex w-full gap-4 bg-slate-100 p-6">
      {/* filter/sort */}
      <div className="sticky top-2 h-fit w-[25%] border-r-2 border-t-2 p-2">
        <HotelListFilter>
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
        <section className="w-[80%] rounded-md border-l-2 border-r-2 bg-slate-100 py-4 shadow-lg">
          {/* hotel cards */}
          {hotels.length > 0 ? (
            hotels?.map((hotel) => (
              <HotelsListItem hotel={hotel} key={hotel._id} />
            ))
          ) : (
            <div className="flex h-full items-center justify-center uppercase">
              <p className="text-2xl border-b-2">404): there are not hotels found</p>
            </div>
          )}
        </section>
      )}
    </div>
  );
}

export default HotelsListPage;
