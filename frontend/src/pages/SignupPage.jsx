import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import apiAuth from "../services/apiAuth";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

function Signup() {
  const { register, handleSubmit } = useForm();

  const { mutate, isPending } = useMutation({
    mutationFn: apiAuth.signup,
    onSuccess: (data) => {
      // console.log(data)
      toast.success("User signed up successfully");
    },
    onError: (error) => {
      toast.error(error?.response?.data.message || "something went wrong when singing up a user");
    },
  });

  const onSubmitHandler = handleSubmit((data) => {
    mutate(data);
  });

  return (
    <form
      onSubmit={onSubmitHandler}
      className="m-auto flex max-w-[85%] flex-col gap-6 rounded bg-slate-300 p-10 shadow-lg md:max-w-[40%]"
    >
      <h1 className="text-2xl font-bold text-gray-800">Sign Up</h1>
      <label className="flex-1 text-sm font-bold text-gray-700">
        First Name
        <input
          type="text"
          defaultValue="John"
          className="w-full rounded border border-gray-400 px-3 py-2"
          placeholder="John"
          required
          {...register("firstName")}
        />
      </label>
      <label className="flex-1 text-sm font-bold text-gray-700">
        Last Name
        <input
          type="text"
          defaultValue="A."
          className="w-full rounded border border-gray-400 px-3 py-2"
          placeholder="Doe"
          // required
          {...register("lastName")}
        />
      </label>
      <label className="flex-1 text-sm font-bold text-gray-700">
        <span>Email</span>
        <input
          type="email"
          defaultValue="test@test.com"
          className="w-full rounded border border-gray-400 px-3 py-2"
          placeholder="test@test.com"
          // required
          {...register("email")}
        />
      </label>
      <label className="flex-1 text-sm font-bold text-gray-700">
        Password
        <input
          type="password"
          defaultValue="test1234"
          className="w-full rounded border border-gray-400 px-3 py-2"
          placeholder="**********"
          // required
          {...register("password")}
        />
      </label>
      <label className="flex-1 text-sm font-bold text-gray-700">
        Password Confirm
        <input
          type="password"
          defaultValue="test1234"
          className="w-full rounded border border-gray-400 px-3 py-2"
          placeholder="**********"
          // required
          {...register("passwordConfirm")}
        />
      </label>
      <label className="flex-1 text-sm font-bold text-gray-700">
        Phone Number
        <input
          type="number"
          className="w-full rounded border border-gray-400 px-3 py-2"
          placeholder=""
          // required
          {...register("phoneNumber")}
        />
      </label>

      <button
        disabled={isPending}
        className="rounded bg-blue-600 px-3 py-2 text-xl font-bold text-white hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-blue-400"
        type="submit"
      >
        Sign Up
      </button>
      <div>
        have an account?{" "}
        <Link to="/sign-in" className="text-blue-600 underline">
          Sign in
        </Link>
      </div>
    </form>
  );
}

export default Signup;
