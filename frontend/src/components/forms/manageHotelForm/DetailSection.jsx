function DetailSection() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800">Add Hotel</h1>
      <label className="flex-1 text-sm font-bold text-gray-700">
        Name
        <input
          type="text"
          defaultValue="Addis International Hotel"
          className="w-full rounded border border-gray-400 px-3 py-2"
          placeholder="hotel name"
          required
        />
      </label>
      <label className="flex-1 text-sm font-bold text-gray-700">
        Address
        <input
          type="text"
          defaultValue="Addis Ababa, Ethiopia"
          className="w-full rounded border border-gray-400 px-3 py-2"
          placeholder="hotel address"
          required
        />
      </label>
      <label>
        Price per Night
        <input
          type="number"
          defaultValue="200"
          className="w-full rounded border border-gray-400 px-3 py-2"
          placeholder="price per night"
          required
        />
      </label>
      <label>
        Start Rating
        <select className="w-full rounded border border-gray-400 px-3 py-2">
          <option>Select as Rating</option>
          {[1, 2, 3, 4, 5].map((val) => (
            <option key={val} value={val}>
              {val}
            </option>
          ))}
          <option>Not Rated Yet</option>
        </select>
      </label>
    </div>
  );
}

export default DetailSection;
