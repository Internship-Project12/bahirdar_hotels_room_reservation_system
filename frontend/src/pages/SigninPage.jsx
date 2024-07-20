import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiAuth from "../services/apiAuth";
import toast from "react-hot-toast";
import QueryKey from "../constants/QueryKey";
import SignInForm from "../forms/auth/SignInForm";

function SigninPage() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const formMethods = useForm();
  const { handleSubmit } = formMethods;

  const { mutate, isPending } = useMutation({
    mutationFn: apiAuth.login,
    onSuccess: async (data) => {
      const { data: { data: { user } = {} } = {} } = data;
      toast.success("Welcome to BDHotels Booking website");

      await queryClient.invalidateQueries(QueryKey.USER);

      if (user.role === "admin" || user.role === "manager") {
        if (location.state?.from?.pathname) {
          return navigate(location.state.from.pathname, { replace: true });
        }
        return navigate("/dashboard", { replace: true });
      }

      console.log(location.state?.from?.pathname);

      navigate(location.state?.from?.pathname || "/", { replace: true });
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

export default SigninPage;
/*
{
    data: {
      status: 'success',
      token: 
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OGNlMjhmYTViMTZlZDg0NmMyMWEyMiIsImlhdCI6MTcyMTM5ODA5MiwiZXhwIjoxNzI5MTc0MDkyfQ.SeWYwklXuxc1Bl2wjfZnWwTVIT-7JDTArXqQOiMAavg',
      data: {
        user: {
          _id: '668ce28fa5b16ed846c21a22',
          firstName: 'Edmealem',
 */
