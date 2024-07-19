import { useAuthContext } from "../../context/AuthContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { useAuthContext } from "../../context/AuthContext";
import apiUsers from "../../services/apiUsers";
import QueryKey from "../../constants/QueryKey";
import SpinnerMini from "../../ui/SpinnerMini";
import { useState } from "react";
import toast from "react-hot-toast";

const AccountSettings = () => {
  const { user } = useAuthContext();
  console.log(user);

  const queryClient = useQueryClient();
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);

  const { mutate, isPending } = useMutation({
    mutationFn: (data) => apiUsers.updateMe({ data }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKey.USER],
      });
    },
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const data = { firstName, lastName, phoneNumber };
    console.log(data);
    mutate(data, {
      onError: (error) => {
        setFirstName(user.firstName);
        setLastName(user.lastName);
        setPhoneNumber(user.phoneNumber);
        toast.error("Unable to update Profile, Please try again.");
        console.log(error.response);
      },
    });
  };

  return (
    <div className="mx-auto mt-10 max-w-4xl rounded-md bg-white p-6 shadow-md">
      <div className="flex flex-col md:flex-row md:space-x-6">
        <div className="mt-6 flex-grow md:mt-0">
          <form onSubmit={onSubmitHandler}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                First Name
                <input
                  type="text"
                  value={firstName}
                  disabled={isPending}
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-300 focus:outline-none focus:ring disabled:cursor-wait disabled:bg-slate-300"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Last Name
                <input
                  type="text"
                  value={lastName}
                  disabled={isPending}
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-300 focus:outline-none focus:ring disabled:cursor-wait disabled:bg-slate-300"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
                <input
                  type="text"
                  value={phoneNumber}
                  disabled={isPending}
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-300 focus:outline-none focus:ring disabled:cursor-wait disabled:bg-slate-300"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </label>
            </div>
            <div className="flex justify-between">
              <button
                disabled={isPending}
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400 px-4 py-2 text-2xl text-slate-200 disabled:cursor-wait"
              >
                Update Profile {isPending && <SpinnerMini />}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
