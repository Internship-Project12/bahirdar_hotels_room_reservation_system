// import { FiUpload } from "react-icons/fi";

function AddHotel() {
  return (
    <section>
      <div>
        <form className="m-auto flex max-w-[85%] flex-col gap-6 rounded bg-slate-100 p-10 shadow-lg">
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
          <label>
            Summary
            <input
              type="text"
              defaultValue="5-star hotel located in the heart of Addis Ababa, Ethiopia"
              className="w-full rounded border border-gray-400 px-3 py-2"
              placeholder="hotel summary"
              required
            />
          </label>
          <label>
            Description
            <textarea
              rows={5}
              className="w-full rounded border border-gray-400 px-3 py-2"
              placeholder="hotel description"
              defaultValue="Addis International Hotel is a 5-star hotel located in the heart of Addis Ababa, Ethiopia. The hotel offers a luxurious experience with its spacious rooms, modern amenities, and exceptional service. Whether you are traveling for business or pleasure, Addis International Hotel is the perfect choice for your stay in Addis Ababa."
              required
            ></textarea>
          </label>
          <label className="flex items-center gap-3 capitalize">
            upload cover image
            {/* <FiUpload  size={'20px'}/> */}
            <input type="file" accept="image/*" />
          </label>
          <button
            type="submit"
            className="w-full rounded bg-blue-800 px-3 py-2 text-white"
          >
            Add Hotel
          </button>
        </form>
      </div>
    </section>
  );
}

export default AddHotel;
