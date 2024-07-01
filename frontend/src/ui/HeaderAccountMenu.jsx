import useLogout from "../features/auth/useLogout";

function HeaderAccountMenu() {
  const { logout, isPending } = useLogout();

  return (
    <ul className="flex flex-col gap-2">
      <li className="transition duration-300 hover:bg-slate-700">
        <div className="">
          <p>Profile</p>
        </div>
      </li>
      <li className="transition duration-300 hover:bg-slate-700">
        <div className="">
          <p>My account</p>
        </div>
      </li>
      <hr />
      <li className="transition duration-300 hover:bg-slate-700">
        <div className="">Settings</div>
      </li>
      <li className="transition duration-300 hover:bg-slate-700">
        <div className="">Dashboard</div>
      </li>
      <li className="mt-4">
        <button
          disabled={isPending}
          onClick={() => logout()}
          className="flex w-full items-center justify-center bg-red-600 px-3 py-2 font-bold disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          Sign Out
        </button>
      </li>
    </ul>
  );
}

export default HeaderAccountMenu;
