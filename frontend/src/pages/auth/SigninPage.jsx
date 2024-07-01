import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiAuth from "../../services/apiAuth";
import toast from "react-hot-toast";
import QueryKey from "../../constants/QueryKey";
import SignInForm from "../../forms/signin/SignInForm";

function Signin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const formMethods = useForm();
  const { handleSubmit } = formMethods;

  const { mutate, isPending } = useMutation({
    mutationFn: apiAuth.login,
    onSuccess: () => {
      queryClient.invalidateQueries(QueryKey.USER);
      toast.success("Welcome to BDHotels Booking website");
      navigate("/", { replace: true });
    },
    onError: (err) => {
      toast.error(err?.response?.data.message);
    },
  });

  const onSubmitHandler = handleSubmit((data) => {
    mutate(data);
  });

  return (
    <FormProvider {...formMethods}>
      <SignInForm onSubmitHandler={onSubmitHandler} isPending={isPending} />;
    </FormProvider>
  );
}

export default Signin;
