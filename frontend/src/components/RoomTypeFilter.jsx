/* eslint-disable react/prop-types */
function RoomTypeFilter({ selectedRoomTypes, onChange }) {
  return (
    <div className="pb-5">
      <h2>Filter By Room Type:</h2>
      {["single", "double", "twin", "triple", "quad", "twin-double"].map(
        (type) => (
          <label className="mt-2 flex items-center space-x-2" key={type}>
            <input
              type="checkbox"
              className="rounded accent-blue-600"
              value={type}
              checked={selectedRoomTypes.includes(type)}
              onChange={onChange}
            />
            <span>{type}</span>
          </label>
        ),
      )}
    </div>
  );
}

export default RoomTypeFilter;
