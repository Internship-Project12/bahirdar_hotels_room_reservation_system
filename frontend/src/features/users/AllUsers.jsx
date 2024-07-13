import Spinner from "../../ui/Spinner";
import UsersTable from "./UsersTable";
import UserTableHeader from "./UserTableHeader";
import { useUsers } from "./useUsers";

function AllUsers() {
  const { data, isLoading } = useUsers();

  if (isLoading)
    return (
      <div className="w-full bg-white font-lato text-gray-600 shadow-md">
        <div className="flex justify-between">
          <h2 className="p-4 uppercase">All Users </h2>
          <p>filter/sort</p>
        </div>
        <UserTableHeader />

        <Spinner />
      </div>
    );

  const { users } = data.data;

  return (
    <div className="w-full bg-white font-lato text-gray-600 shadow-md">
      <div className="flex justify-between">
        <h2 className="p-4 uppercase">All Users </h2>
        <p>filter/sort</p>
      </div>

      <UserTableHeader />

      {users.map((user, i) => (
        <UsersTable user={user} key={i} />
      ))}
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
