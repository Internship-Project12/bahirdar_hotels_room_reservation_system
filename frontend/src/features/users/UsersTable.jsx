/* eslint-disable react/prop-types */

function UsersTable({ user }) {
  return (
    <div className="m-2 grid grid-cols-6 items-center gap-3 overflow-hidden border-b border-r border-slate-200 text-sm shadow">
      {/* USER */}
      <div className="col-span-1 col-start-1">
        <img
          className="h-12 w-12 object-cover"
          src={user.photo}
          alt={`${user.firstName}'s photo`}
        />
      </div>
      <div className="col-span-1 col-start-2">{user.firstName}</div>
      <div className="col-span-1 col-start-3">{user.lastName.trim()}</div>
      <div className="col-span-1 col-start-4">{user.email}</div>
      <div className="col-span-1 col-start-5">{user.phoneNumber}</div>
      <div className="col-span-1 col-start-6">{user.role}</div>
    </div>
  );
}

export default UsersTable;

/*
	      
  {
    _id: '668d0c0adb670b7e68b15803',
    firstName: 'edmealem',
    lastName: 'kassahun',
    email: 'edmealem@gmail.com',
    photo: 'DEFAULT_AVATAR',
    phoneNumber: '09345678',
    role: 'user',
    createdAt: '2024-07-09T10:08:10.337Z',
    updatedAt: '2024-07-09T10:08:10.337Z',
    __v: 0
  }
*/
