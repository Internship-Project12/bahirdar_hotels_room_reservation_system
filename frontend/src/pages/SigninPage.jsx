import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import apiAuth from "../services/apiAuth";
import toast from "react-hot-toast";

function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, isPending } = useMutation({
    mutationFn: apiAuth.login,
    onSuccess: (data) => {
      // console.log(data);
      toast.success("Welcome to BDHotels Booking website");
    },
    onError: (err) => {
      toast.error(err?.response?.data.message);
    },
  });

  const onSubmitHandler = handleSubmit((data) => {
    mutate(data);
  });

  return (
    <form
      onSubmit={onSubmitHandler}
      className="m-auto mt-4 flex max-w-[85%] flex-col gap-6 rounded bg-slate-300 p-10 shadow-lg md:max-w-[40%]"
    >
      <h1 className="text-2xl font-bold text-gray-800">Sign In</h1>
      <label className="flex-1 text-sm font-bold text-gray-700">
        <span>Email</span>
        <input
          type="email"
          defaultValue="test@test.com"
          className="w-full rounded border border-gray-400 px-3 py-2"
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
      <label className="flex-1 text-sm font-bold text-gray-700">
        Password
        <input
          type="password"
          defaultValue="test1234"
          className="w-full rounded border border-gray-400 px-3 py-2"
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
        className="rounded bg-blue-600 px-3 py-2 text-xl font-bold text-white hover:bg-blue-500 disabled:bg-blue-400"
        type="submit"
        disabled={isPending}
      >
        {isPending ? "Signing In" : "Sign In"}
      </button>
      <div>
        have no account?{" "}
        <Link to="/sign-up" className="text-blue-600 underline">
          Create your account
        </Link>
      </div>
    </form>
  );
}

export default Signin;
