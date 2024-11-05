import { FormProvider, useForm } from "react-hook-form";
import SpinnerMini from "../../ui/SpinnerMini";
import { useUpdateMyPassword } from "./useUpdateMyPassword";

function UpdateMyPassword() {
  const formMethods = useForm();
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = formMethods;

  const { mutate, isPending } = useUpdateMyPassword();

  const onSubmitHandler = handleSubmit((data) => {
    // console.log(data);
    mutate({ data });
  });

  return (
    <div className="mx-auto mt-10 max-w-4xl rounded-md bg-white p-6 shadow-md">
      <div className="flex flex-col md:flex-row md:space-x-6">
        <div className="mt-6 flex-grow md:mt-0">
          <FormProvider {...formMethods}>
            <form onSubmit={onSubmitHandler}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Old Password
                  <input
                    type="password"
                    {...register("passwordCurrent", {
                      validate: (val) => {
                        if (!val) return "old password is required.";
                        else if (val.length < 8)
                          return "password must be at least 8 characters.";

                        return true;
                      },
                    })}
                    disabled={isPending}
                    className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-300 focus:outline-none focus:ring disabled:cursor-wait disabled:bg-slate-300"
                  />
                </label>
                {errors.passwordCurrent && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.passwordCurrent.message}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  New Password
                  <input
                    type="password"
                    {...register("password", {
                      validate: (val) => {
                        if (!val) return "new password is required.";
                        else if (val.length < 8)
                          return "password must be at least 8 characters.";

                        return true;
                      },
                    })}
                    disabled={isPending}
                    className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-300 focus:outline-none focus:ring disabled:cursor-wait disabled:bg-slate-300"
                  />
                </label>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Password Confirm
                  <input
                    type="password"
                    {...register("passwordConfirm", {
                      validate: (val) => {
                        if (!val) return "password confirm is required.";
                        else if (val !== getValues("password"))
                          return "password confirm must match the password.";

                        return true;
                      },
                    })}
                    disabled={isPending}
                    className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-300 focus:outline-none focus:ring disabled:cursor-wait disabled:bg-slate-300"
                  />
                </label>
                {errors.passwordConfirm && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.passwordConfirm.message}
                  </p>
                )}
              </div>
              <div className="my-2 flex justify-end p-2">
                <button
                  disabled={isPending}
                  type="submit"
                  className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400 px-4 py-2 text-2xl text-slate-200 disabled:cursor-wait"
                >
                  Update Password {isPending && <SpinnerMini />}
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}

export default UpdateMyPassword;
