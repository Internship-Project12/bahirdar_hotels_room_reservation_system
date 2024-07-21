/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { users } from "../../data/users";

function RecentUsers() {
  return (
    <>
      <div className="flex flex-col">
        <h2 className="mb-5 text-2xl font-bold">Recent Users</h2>
        <div className="grid grid-cols-2-nv grid-rows-3 gap-x-20 p-5">
          {users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </div>
        <span className="self-start rounded-full border bg-purple-400 px-3 py-1 align-baseline font-bold text-white transition-all duration-200 hover:scale-105">
          <Link to="/dashboard/users">See more &gt;&gt;</Link>
        </span>
      </div>
    </>
  );
}

function User({ user }) {
  return (
    <>
      <div className="mb-7" key={user.id}>
        <div className="flex gap-2">
          <img
            className="h-16 w-16 rounded-full object-cover"
            src={user.photo}
            alt={user.firstName}
          />
          <div className="flex flex-col gap-1">
            <span className="text-lg font-semibold">{user.firstName}</span>
            <span className="text-sm">{user.email}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecentUsers;
