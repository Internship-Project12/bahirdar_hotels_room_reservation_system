function Header() {
  return (
    <div className="flex flex-wrap items-center justify-between bg-white p-4 shadow-md">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="flex flex-wrap items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="rounded border border-gray-300 p-2"
        />
        <button className="rounded bg-blue-500 px-4 py-2 text-white">
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Header;
