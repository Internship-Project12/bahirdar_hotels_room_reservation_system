import { FormProvider, useForm } from "react-hook-form";
import SignUpForm from "../../forms/auth/SignUpForm";
import { useSignUp } from "./useSignup";
import { Link } from "react-router-dom";

function SignupPage() {
  const formMethods = useForm();
  const { handleSubmit } = formMethods;

  const { mutate, isPending } = useSignUp();

  const onSubmitHandler = handleSubmit((data) => {
    console.log(data);
    mutate(data);
  });

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="my-8 w-[95vw] rounded-xl p-4 shadow-2xl sm:mx-auto sm:w-[40rem]">
        <div className="mx-auto flex items-center justify-center p-3 sm:p-6">
          <Link
            to="/"
            className="flex h-14 items-center gap-2 text-2xl font-extrabold tracking-tighter text-gray-800 sm:text-3xl md:text-4xl"
          >
            <img src="/favicon.ico" className="w-[60px] sm:w-[70px]" />
            <span className="text-blue-700">BDHotels.com</span>
          </Link>
        </div>
        <div className="mx-auto">
          <FormProvider {...formMethods}>
            <SignUpForm
              onSubmitHandler={onSubmitHandler}
              isPending={isPending}
            />
          </FormProvider>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
