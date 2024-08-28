import { useMutation } from "@tanstack/react-query";
import { useAuthContext } from "../../context/AuthContext";
import apiUsers from "../../services/apiUsers";
import toast from "react-hot-toast";

function ForgotMyPassword() {
  const { user } = useAuthContext();

  const { mutate, isPending } = useMutation({
    mutationFn: apiUsers.forgotMyPassword,
    onSuccess: () => {
      toast.success("password reset token send to your email");
    },
    onError: (err) => {
      toast.error("unable to send password reset token, please try again");
      console.log(err);
    },
    retry: false
  });

  const onClickHandler = () => {
    mutate(user.email);
  };

  return (
    <div className="mx-auto mt-10 max-w-4xl rounded-md bg-white p-6 shadow-md">
      <div className="flex flex-col md:flex-row md:space-x-6">
        <div className="mt-6 flex-grow md:mt-0">
          <p className="text-gray-700">
            If you&rsquo;ve forgotten your password, don&rsquo;t worry. Click
            the button below, and we&rsquo;ll guide you through the process of
            resetting it.
          </p>{" "}
          <button
            className="mt-2 flex items-center rounded bg-gray-700 px-2 py-1 text-slate-200 duration-300 disabled:scale-95 disabled:cursor-not-allowed disabled:bg-slate-500"
            onClick={onClickHandler}
            disabled={isPending}
          >
            Forgot my password
          </button>
        </div>
      </div>
    </div>
  );
}

export default ForgotMyPassword;
