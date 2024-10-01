/* eslint-disable react/prop-types */
import { useFormContext } from "react-hook-form";
import { Link } from "react-router-dom";
import PhoneInput from "./PhoneInput";
import SpinnerMini from "../../ui/SpinnerMini";

function SignUpForm({ onSubmitHandler, isPending }) {
  const {
    register,
    formState: { errors },
    getValues,
  } = useFormContext();

  return (
    <form
      onSubmit={onSubmitHandler}
      className="mt-2 flex w-full flex-col gap-6"
    >
      <h1 className="text-center text-blue-800 underline">Create an Account</h1>

      <div className="gap-2 sm:flex">
        <label className="flex flex-1 flex-col tracking-wider text-gray-900">
          <span className="ml-2 font-normal">First Name</span>
          <input
            type="text"
            defaultValue="John"
            className="mt-2 w-full rounded-xl bg-slate-200 p-1 px-3 outline-1 outline-blue-500 focus:outline"
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
        <label className="flex flex-1 flex-col tracking-wider text-gray-900">
          <span className="ml-2 font-normal">Last Name</span>
          <input
            type="text"
            defaultValue="A."
            className="mt-2 w-full rounded-xl bg-slate-200 p-1 px-3 outline-1 outline-blue-500 focus:outline"
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
      </div>

      <label className="flex flex-1 flex-col tracking-wider text-gray-900">
        <span className="ml-2 font-normal">Email</span>
        <input
          type="email"
          defaultValue="test@test.com"
          className="mt-2 w-full rounded-xl bg-slate-200 p-1 px-3 outline-1 outline-blue-500 focus:outline"
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

      <div className="gap-2 sm:flex">
        <label className="flex flex-1 flex-col tracking-wider text-gray-900">
          <span className="ml-2 font-normal">Password</span>
          <input
            type="password"
            defaultValue="test1234"
            className="mt-2 w-full rounded-xl bg-slate-200 p-1 px-3 outline-1 outline-blue-500 focus:outline"
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
        <label className="flex flex-1 flex-col tracking-wider text-gray-900">
          <span className="ml-2 font-normal">Password Confirm</span>
          <input
            type="password"
            defaultValue="test1234"
            className="mt-2 w-full rounded-xl bg-slate-200 p-1 px-3 outline-1 outline-blue-500 focus:outline"
            placeholder="**********"
            // required
            {...register("passwordConfirm", {
              validate: (val) => {
                if (!val) return "password confirm is required.";
                else if (val !== getValues("password"))
                  return "password confirm must match password.";
                return true;
              },
            })}
          />
          {errors.passwordConfirm && (
            <p className="text-sm font-normal text-red-700">
              {errors.passwordConfirm.message}
            </p>
          )}
        </label>
      </div>
      <PhoneInput />

      <button
        disabled={isPending}
        className="rounded-xl bg-blue-600 px-3 py-1 text-white hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-blue-400"
        type="submit"
      >
        {isPending ? <SpinnerMini /> : "Sign Up"}
      </button>
      <div>
        have an account?{" "}
        <Link to="/login" className="text-blue-600 underline">
          Sign in
        </Link>
      </div>
    </form>
  );
}

export default SignUpForm;
