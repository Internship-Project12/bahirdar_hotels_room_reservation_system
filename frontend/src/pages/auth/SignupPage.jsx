import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiAuth from "../../services/apiAuth";
import toast from "react-hot-toast";
import { FormProvider, useForm } from "react-hook-form";
import QueryKey from "../../constants/QueryKey";
import SignUpForm from "../../forms/auth/SignUpForm";

function Signup() {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const formMethods = useForm();
  const { handleSubmit } = formMethods;

  const { mutate, isPending } = useMutation({
    mutationFn: apiAuth.signup,
    onSuccess: () => {
      // console.log(data)
      queryClient.invalidateQueries(QueryKey.USER);
      toast.success("User signed up successfully");
      navigate("/", { replace: true });
    },
    onError: () => {
      toast.error(
        // error?.response?.data.message ||
        "something went wrong when singing up, Please check your email or your internet connection. try again later.",
      );
    },
  });

  const onSubmitHandler = handleSubmit((data) => {
    mutate(data);
  });

  return (
    <FormProvider {...formMethods}>
      <SignUpForm onSubmitHandler={onSubmitHandler} isPending={isPending} />
    </FormProvider>
  );
}

export default Signup;
