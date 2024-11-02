import { useLocation, useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiAuth from "../../services/apiAuth";
import toast from "react-hot-toast";
import QueryKey from "../../constants/QueryKey";
import SignInForm from "../../forms/auth/SignInForm";
import Logo from "../../ui/Logo";

function SigninPage() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const location = useLocation();

  const formMethods = useForm();
  const { handleSubmit } = formMethods;

  const { mutate, isPending } = useMutation({
    mutationFn: apiAuth.login,
    onSuccess: async (data) => {
      const { data: { data: { user } = {} } = {} } = data;
      toast.success("Welcome to Hotelify : yours Booking website");

      await queryClient.invalidateQueries(QueryKey.USER);

      if (user.role === "admin" || user.role === "manager") {
        if (location.state?.from) {
          return navigate(location.state.from, { replace: true });
        }
        return navigate("/dashboard", { replace: true });
      }

      navigate(location.state?.from || "/", { replace: true });
    },
    onError: (err) => {
      toast.error(err?.response?.data.message);
    },
  });

  const onSubmitHandler = handleSubmit((data) => {
    mutate(data);
  });

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-[95vw] rounded-xl p-4 shadow-2xl sm:mx-auto sm:w-[30rem] lg:mt-4">
        <div className="mx-auto flex items-center justify-center p-3 sm:p-6">
          <Logo />
        </div>
        <div className="mx-auto">
          <FormProvider {...formMethods}>
            <SignInForm
              onSubmitHandler={onSubmitHandler}
              isPending={isPending}
            />
          </FormProvider>
        </div>
      </div>
    </div>
  );
}

export default SigninPage;
