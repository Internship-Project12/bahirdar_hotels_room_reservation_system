/* eslint-disable react/prop-types */
function UsersListItem({ user, onClick }) {
  if (!user) return;

  return (
    <div
      onClick={onClick}
      className="flex items-center p-3 transition-all duration-300 hover:cursor-pointer hover:bg-slate-300"
    >
      <div>
        <img
          src={user.photo}
          alt=""
          className="mr-2 h-12 w-12 rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col items-start">
        <h2 className="">
          {user.firstName} {user.lastName}{" "}
          <span className="text-xs text-slate-500">({user.email})</span>
        </h2>
        <p className=" text-slate-500">
          {user.phoneNumber}{" "}
          <span className="text-xs text-slate-500">({user.role})</span>
        </p>
      </div>
    </div>
  );
}

export default UsersListItem;
