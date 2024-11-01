import { FormProvider, useForm } from "react-hook-form";
import SignUpForm from "../../forms/auth/SignUpForm";
import { useSignUp } from "./useSignup";
import Logo from "../../ui/Logo";

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
      <div className="my-8 w-[95vw] rounded-xl p-4 shadow-2xl sm:mx-auto sm:w-[40rem] md:w-[60rem]">
        <div className="mx-auto flex items-center justify-center p-3 sm:p-6">
          <Logo />
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
