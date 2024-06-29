import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import apiAuth from "../services/apiAuth";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, isPending } = useMutation({
    mutationFn: apiAuth.signup,
    onSuccess: () => {
      // console.log(data)
      toast.success("User signed up successfully");
    },
    onError: (error) => {
      toast.error(
        // error?.response?.data.message ||
        "something went wrong when singing up, Please try again later.",
      );
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
          {...register("firstName", {
            required: "first name is a required field",
          })}
        />
        {errors.firstName && (
          <p className="text-sm font-normal text-red-700">
            {errors.firstName.message}
          </p>
        )}
      </label>
      <label className="flex-1 text-sm font-bold text-gray-700">
        Last Name
        <input
          type="text"
          defaultValue="A."
          className="w-full rounded border border-gray-400 px-3 py-2"
          placeholder="Doe"
          // required
          {...register("lastName", {
            required: "last name is a required field",
          })}
        />
        {errors.lastName && (
          <p className="text-sm font-normal text-red-700">
            {errors.lastName.message}
          </p>
        )}
      </label>
      <label className="flex-1 text-sm font-bold text-gray-700">
        <span>Email</span>
        <input
          type="email"
          defaultValue="test@test.com"
          className="w-full rounded border border-gray-400 px-3 py-2"
          placeholder="test@test.com"
          // required
          {...register("email", {
            required: "email is a required field",
          })}
        />
        {errors.email && (
          <p className="text-sm font-normal text-red-700">
            {errors.email.message}
          </p>
        )}
      </label>
      <label className="flex-1 text-sm font-bold text-gray-700">
        Password
        <input
          type="password"
          defaultValue="test1234"
          className="w-full rounded border border-gray-400 px-3 py-2"
          placeholder="**********"
          // required
          {...register("password", {
            required: "password is a required field",
          })}
        />
        {errors.password && (
          <p className="text-sm font-normal text-red-700">
            {errors.password.message}
          </p>
        )}
      </label>
      <label className="flex-1 text-sm font-bold text-gray-700">
        Password Confirm
        <input
          type="password"
          defaultValue="test1234"
          className="w-full rounded border border-gray-400 px-3 py-2"
          placeholder="**********"
          // required
          {...register("passwordConfirm", {
            required: "password confirm is a required field",
          })}
        />
        {errors.passwordConfirm && (
          <p className="text-sm font-normal text-red-700">
            {errors.passwordConfirm.message}
          </p>
        )}
      </label>
      <label className="flex-1 text-sm font-bold text-gray-700">
        Phone Number
        <input
          type="number"
          className="w-full rounded border border-gray-400 px-3 py-2"
          placeholder=""
          // required
          {...register("phoneNumber", {
            required: "phone number is a required field",
          })}
        />
        {errors.phoneNumber && (
          <p className="text-sm font-normal text-red-700">
            {errors.phoneNumber.message}
          </p>
        )}
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
