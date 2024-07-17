/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router-dom";
import SortBy from "./SortBy";

function HotelListFilter({ children }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortChange = (e) => {
    e.preventDefault();
    const sort = e.target.value;
    searchParams.set("sortBy", sort);
    setSearchParams(searchParams);
  };

  return (
    <div className="space-y-8 gap-6 flex items-center justify-center flex-col border-r-2 bg-blue-100 p-2">
    
      <div>{children}</div>
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
  );
}

export default HotelListFilter;
