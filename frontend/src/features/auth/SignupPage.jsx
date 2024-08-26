import { FormProvider, useForm } from "react-hook-form";
import SignUpForm from "../../forms/auth/SignUpForm";
import { useSignUp } from "./useSignup";

function SignupPage() {
  const formMethods = useForm();
  const { handleSubmit } = formMethods;

  const { mutate, isPending } = useSignUp;

  const onSubmitHandler = handleSubmit((data) => {
    mutate(data);
  });

  return (
    <FormProvider {...formMethods}>
      <SignUpForm onSubmitHandler={onSubmitHandler} isPending={isPending} />
    </FormProvider>
  );
}

export default SignupPage;
