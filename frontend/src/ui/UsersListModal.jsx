/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { useUsers } from "../features/users/useUsers";
import Spinner from "./Spinner";
import UsersListItem from "./UsersListItem";
import { useSearchParams } from "react-router-dom";

function UsersListModal({ handleSelectManager }) {
  const { data: { data: { users } = {} } = {}, isLoading } = useUsers();
  const [searchParams, setSearchParams] = useSearchParams();

  const ref = useRef();

  useEffect(() => {
    searchParams.set("role", "user");
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams]);

  const onSearchHandler = (e) => {
    e.preventDefault();

    searchParams.set("search", e.target.value);
    // searchParams.set("role", "user");
    setSearchParams(searchParams);
  };

  return (
    <>
      <div className="absolute bottom-12 left-4 h-[24rem] w-[40%] overflow-auto rounded-xl bg-slate-200 shadow-xl">
        {/* SEARCH  */}
        <div className="sticky top-0 bg-slate-300 p-5">
          <div className="group flex items-center justify-center">
            <input
              type="search"
              disabled={isLoading}
              autoFocus
              ref={ref}
              className="rounded-full bg-slate-200 px-3 py-2 focus:outline-none disabled:cursor-not-allowed"
              placeholder="Search"
              onChange={onSearchHandler}
            />
            <button
              disabled={isLoading}
              onClick={onSearchHandler}
              className="-ml-16 w-24 rounded-full bg-blue-600 px-3 py-2 text-white disabled:cursor-not-allowed disabled:bg-blue-400"
            >
              Search
            </button>
          </div>
        </div>
        {isLoading ? (
          <Spinner />
        ) : users.length > 0 ? (
          users.map((user, i) => (
            <div key={i} className="m-4">
              <UsersListItem
                onClick={() => handleSelectManager(user)}
                user={user}
              />
            </div>
          ))
        ) : (
          <p>
            There are no users found. Please add a user first before assigning
            to a manager role
          </p>
        )}
      </div>
    </>
  );
}

export default UsersListModal;
