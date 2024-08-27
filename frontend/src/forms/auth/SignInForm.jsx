/* eslint-disable react/prop-types */
import { useFormContext } from "react-hook-form";
import { Link } from "react-router-dom";
import SpinnerMini from "../../ui/SpinnerMini";

function SignInForm({ onSubmitHandler, isPending }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <form
      onSubmit={onSubmitHandler}
      className="mt-2 flex w-full flex-col gap-6"
    >
      <h1 className="text-center text-2xl font-bold tracking-wider text-gray-800 lg:text-3xl">
        Sign In
      </h1>
      <label className="flex flex-1 flex-col tracking-wider text-gray-900">
        <span className="ml-2 font-normal md:text-xl">Email</span>
        <input
          type="email"
          defaultValue="test@test.com"
          className="w-full rounded-xl p-2 shadow-md focus:outline-none"
          placeholder="test@test.com"
          {...register("email", {
            required: "Please provide your email address",
          })}
        />
        {errors.email && (
          <p className="text-sm font-normal text-red-700">
            {errors.email.message}
          </p>
        )}
      </label>
      <label className="flex flex-1 flex-col tracking-wider text-gray-900">
        <span className="ml-2 font-normal md:text-xl">Password</span>

        <input
          type="password"
          defaultValue="test1234"
          className="w-full rounded-xl p-2 shadow-md focus:outline-none"
          placeholder="test@test.com"
          {...register("password", {
            required: "Please Provide your password",
          })}
        />
        {errors.password && (
          <p className="text-sm font-normal text-red-700">
            {errors.password.message}
          </p>
        )}
      </label>
      <button
        disabled={isPending}
        className="rounded bg-blue-600 px-3 py-2 text-xl text-white hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-blue-400"
        type="submit"
      >
        {isPending ? <SpinnerMini/> : "Sign In"}
      </button>
      <div>
        have no account?{" "}
        <Link to="/signup" className="text-blue-600 underline">
          Create your account
        </Link>
      </div>
    </form>
  );
}

export default SignInForm;
