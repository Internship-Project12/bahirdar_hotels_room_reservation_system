/* eslint-disable react/prop-types */
import { users } from "../../data/users";

function RecentUsers() {
  return (
    <>
      <div className="">
        <h2 className="mb-5 text-2xl font-bold">Recent Users</h2>
        <div className="grid-cols-2-nv grid grid-rows-3 gap-x-20 p-5">
          {users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </div>
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
