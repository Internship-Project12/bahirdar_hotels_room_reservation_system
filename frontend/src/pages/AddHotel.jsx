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
        </form>
      </div>
    </section>
  );
}

export default AddHotel;
