import { useMutation } from "@tanstack/react-query";
import { useAuthContext } from "../../context/AuthContext";
import { IoMdArrowRoundBack } from "react-icons/io";
import apiUsers from "../../services/apiUsers";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function ForgotMyPassword() {
  const { user } = useAuthContext();

  // todo:  check if this route works

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, isPending } = useMutation({
    mutationFn: apiUsers.forgotPassword,
    onSuccess: () => {
      toast.success("password reset token send to your email");
    },
    onError: (err) => {
      toast.error("unable to send password reset token, please try again");
      console.log(err);
    },
    retry: false,
  });

  const onSubmitHandler = handleSubmit((data) => {
    const { email } = data;
    mutate(email);
  });

  const onClickHandler = () => {
    if (user) mutate(user.email);
  };

  return (
    <div className="mx-auto mt-10 max-w-4xl rounded-md bg-white p-6 shadow-md">
      <div className="flex flex-col md:flex-row md:space-x-6">
        <div className="mt-6 flex-grow space-y-4 md:mt-0">
          {/* This will appear when a user is now logged in and forgets his password */}
          {user ? (
            <>
              <p className="text-gray-700">
                If you&rsquo;ve forgotten your password, don&rsquo;t worry.
                Click the button below, and we&rsquo;ll guide you through the
                process of resetting it.
              </p>
              <button
                className="mt-2 flex items-center rounded bg-gray-700 px-2 py-1 text-slate-200 duration-300 disabled:scale-95 disabled:cursor-not-allowed disabled:bg-slate-500"
                onClick={onClickHandler}
                disabled={isPending}
              >
                Forgot my password
              </button>
            </>
          ) : (
            // This will appear when a user is not logged in and forgets his password
            <>
              <Link
                to="/"
                className="flex w-fit items-center gap-2 rounded bg-blue-500 px-3 py-1 text-white"
              >
                <IoMdArrowRoundBack />
                Back to Home
              </Link>
              <p className="text-gray-700">
                If you&rsquo;ve forgotten your password, don&rsquo;t worry. Just
                enter your email address below and we&rsquo;ll send you a
                password reset link.
              </p>{" "}
              <form className="mt-4 space-y-4" onSubmit={onSubmitHandler}>
                <label className="flex flex-col text-gray-700">
                  <span>Enter your email</span>
                  <input
                    type="email"
                    className="rounded bg-black/10 px-5 py-2 ring-0 ring-red-500 focus:outline-none"
                    placeholder="email"
                    {...register("email", {
                      required: "Please provide your email",
                    })}
                  />
                </label>
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}

                <button
                  className="mt-2 flex items-center rounded bg-gray-700 px-2 py-1 text-slate-200 duration-300 disabled:cursor-not-allowed"
                  disabled={isPending}
                >
                  send password reset link
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ForgotMyPassword;
