/* eslint-disable react/prop-types */
function Search({ onSearchHandler, isLoading = false, register, size = {} }) {
  // we change the size of the search box on the hotels list page so size prop is sent to make reuseable
  let style = "";
  if (size?.height && size?.width) {
    style = `h-[${size.height}rem] w-[${size.width}rem]`;
  }
  return (
    <form
      className="group flex items-center justify-center"
      onSubmit={onSearchHandler}
    >
      <div className="flex flex-row rounded-full shadow-lg">
        <input
          type="search"
          disabled={isLoading}
          autoFocus
          className={`rounded-full bg-slate-200 px-3 py-2 focus:outline-none disabled:cursor-not-allowed ${style}`}
          placeholder="Search"
          {...register("search")}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="-ml-20 w-[8rem] rounded-full bg-blue-600 px-3 py-2 text-white disabled:cursor-not-allowed disabled:bg-blue-400"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Search;
