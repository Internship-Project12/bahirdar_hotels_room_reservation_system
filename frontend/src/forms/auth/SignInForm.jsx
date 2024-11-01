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
      <h1 className="text-center text-blue-800 underline">
        Log In to Your Account
      </h1>
      <label className="flex flex-1 flex-col tracking-wider text-gray-900">
        <span className="ml-2 font-normal md:text-xl">Email</span>
        <input
          type="email"
          defaultValue="test@test.com"
          className="mt-2 w-full rounded-xl bg-slate-200 p-1 px-3 outline-1 outline-blue-500 focus:outline"
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
          className="mt-2 w-full rounded-xl bg-slate-200 p-1 px-3 outline-1 outline-blue-500 focus:outline"
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
        className="rounded-xl bg-blue-600 px-3 py-1 text-white hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-blue-400"
        type="submit"
      >
        {isPending ? <SpinnerMini /> : "Sign In"}
      </button>
      <div>
        have no account?{" "}
        <Link to="/signup" className="text-blue-600 underline">
          Create your account
        </Link>
      </div>

      <div>
        <Link to="/forgot-password" className="text-blue-600 underline">
          Forgot Password?
        </Link>
      </div>
    </form>
  );
}

export default SignInForm;
