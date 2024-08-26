import { useAuthContext } from "../../context/AuthContext";

function Profile() {
  const {user} = useAuthContext();

  return (
    <div className="flex flex-col space-y-7">
      <div className="mx-4 flex items-center justify-center">
        <p className="w-[60%] text-center text-lg leading-10 tracking-wider text-slate-600">
          Welcome to Our Website Where You Can book / reserve a room in any
          Hotel easily from your any where and any time. take a look at the
          hotels and a reserve a room.
        </p>
      </div>
      <div className="mx-4 flex items-center justify-center p-4">
        <h1 className="text-6xl text-slate-500 opacity-90">
          {user.firstName} {user.lastName}
        </h1>
      </div>
      <div className='flex items-center justify-center'>
        <div className="flex border-2 border-slate-300 w-[50%] rounded-full shadow-xl bg-slate-50 items-center justify-center gap-4">
          <div className="h-[100px] w-[100px]">
            <img
              src={user.photo}
              alt=""
              className="h-full w-full rounded-full object-cover object-center"
            />
          </div>
          <div>
            <p className="text-xl text-slate-600">{user.email}</p>
            <p className="text-sm text-slate-600">{user.phoneNumber}</p>
          </div>
        </div>
      </div>
      <div>
        <p className=""></p>
      </div>
    </div>
  );
}

export default Profile;
