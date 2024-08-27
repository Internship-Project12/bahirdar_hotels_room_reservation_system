import { Link } from "react-router-dom";
import UserTableHeader from "./UserTableHeader";
import UsersTable from "./UsersTable";
import { useCurrentHotel } from "../dashboard/useCurrentHotel";
import Spinner from "../../ui/Spinner";
import Search from "../../ui/Search";
import { useForm } from "react-hook-form";
import { useState } from "react";

function HotelUsers() {
  const { register, handleSubmit } = useForm();

  const [search, setSearch] = useState("");

  let users;

  const { hotel, isLoading } = useCurrentHotel();

  if (isLoading) return <Spinner />;
  users = hotel.bookings?.map((booking) => booking.user);

  const onSearchHandler = handleSubmit((data) => {
    setSearch(data.search);
  });

  if (search) {
    // FIXME: ADD IGNORE CASE
    users = users.filter(
      (user) =>
        user.firstName.toLowerCase().includes(search.toLowerCase()) ||
        user.lastName.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase()) ||
        user.phoneNumber.toString().includes(search.toString()),
    );
  }

  return (
    <div className="w-full bg-white  text-gray-600 shadow-md">
      <div className="flex items-center justify-between p-6">
        <h1 className="p-4 uppercase">
          <Link to="/dashboard/users">All Users</Link>
        </h1>

        {/* SEARCH  */}
        <Search
          isLoading={isLoading}
          onSearchHandler={onSearchHandler}
          register={register}
        />
        {/* FOR STYLING | TO CENTER THE SEARCH COMPONENT */}
        <div></div>
      </div>
      <UserTableHeader />
      {users?.length ? (
        <div>
          {users.map((user, i) => (
            <UsersTable user={user} key={i} />
          ))}
        </div>
      ) : (
        <div className="w-full bg-white text-gray-600 shadow-md">
          <div className="flex items-center justify-center p-6">
            <h1 className="p-4 uppercase">
              <Link to="/dashboard/users">404 ): No user found</Link>
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default HotelUsers;
