/* eslint-disable react/prop-types */
function StarRatingFilter({ selectedStars, onChange }) {
  return (
    <div className="border-b border-slate-300 pb-5">
      <h2>Filter By Hotel Star:</h2>
      {["5", "4", "3", "2", "1"].map((star) => (
        <label className="mt-2 flex items-center space-x-2" key={star}>
          <input
            type="checkbox"
            className="rounded accent-blue-600"
            value={star}
            checked={selectedStars.includes(star)}
            onChange={onChange}
          />
          <span>{star} Stars</span>
        </label>
      ))}
    </div>
  );
}

export default StarRatingFilter;
