import { Link, useSearchParams } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import UsersTable from "./UsersTable";
import UserTableHeader from "./UserTableHeader";
import { useUsers } from "./useUsers";
import Search from "../../ui/Search";
import { useForm } from "react-hook-form";
import { useState } from "react";

function AllUsers() {
  const { register, handleSubmit } = useForm();
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeBtn, setActiveBtn] = useState();

  const { data: { data: { users } = {} } = {}, isLoading } = useUsers();

  const onSearchHandler = handleSubmit((data) => {
    searchParams.set("search", data.search);
    setSearchParams(searchParams);
  });

  const onSearchByRoleHandler = (role) => {
    searchParams.set("role", role);
    setSearchParams(searchParams);
    setActiveBtn(role);
  };

  return (
    <div className="w-full bg-white font-lato text-gray-600 shadow-md">
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

        <div className='flex justify-between items-center gap-2'>
          <button
            onClick={() => onSearchByRoleHandler("")}
            disabled={activeBtn === ""}
            className="rounded border bg-blue-600 px-3 text-sm text-white transition-all duration-300 disabled:cursor-not-allowed"
          >
            all
          </button>
          <button
            onClick={() => onSearchByRoleHandler("user")}
            disabled={activeBtn === "user"}
            className="rounded border px-3 text-sm transition-all duration-300 hover:bg-blue-600 hover:text-white disabled:cursor-not-allowed disabled:bg-blue-700 disabled:text-white"
          >
            all users
          </button>
          <button
            onClick={() => onSearchByRoleHandler("manager")}
            disabled={activeBtn === "manager"}
            className="rounded border px-3 text-sm transition-all duration-300 hover:bg-blue-600 hover:text-white disabled:cursor-not-allowed disabled:bg-blue-700 disabled:text-white"
          >
            all managers
          </button>
        </div>
      </div>

      <UserTableHeader />

      {isLoading ? (
        <Spinner />
      ) : users.length > 0 ? (
        users.map((user, i) => <UsersTable user={user} key={i} />)
      ) : (
        <div>There are no users found</div>
      )}
    </div>
  );
}

export default AllUsers;

/*
{
    status: 'success',
    results: 7,
    data: {
      users: Array(7) [
        {
          _id: '668ce22aa5b16ed846c21a18',
          firstName: 'admin',
          lastName: 'TestF',
          email: 'admin@test.com',
          role: 'admin',
          phoneNumber: '0908005801',
          createdAt: '2024-07-09T07:09:30.494Z',
          updatedAt: '2024-07-09T07:09:30.494Z',
          __v: 0
        },
*/
