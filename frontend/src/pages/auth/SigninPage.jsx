import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Signin() {
  const { handleSubmit } = useForm();

  const onSubmitHandler = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form
      onSubmit={onSubmitHandler}
      className="m-auto mt-4 flex max-w-[85%] flex-col gap-6 rounded bg-slate-300 p-10 shadow-lg md:max-w-[40%]"
    >
      <h1 className="text-2xl font-bold text-gray-800">Sign In</h1>
      <label className="flex-1 text-sm font-bold text-gray-700">
        <span>Email</span>
        <input
          type="email"
          name="email"
          defaultValue="test@test.com"
          className="w-full rounded border border-gray-400 px-3 py-2"
          placeholder="test@test.com"
          required
        />
      </label>
      <label className="flex-1 text-sm font-bold text-gray-700">
        Password
        <input
          type="password"
          defaultValue="test1234"
          className="w-full rounded border border-gray-400 px-3 py-2"
          placeholder="test@test.com"
          required
        />
      </label>
      <button
        className="rounded bg-blue-600 px-3 py-2 text-xl font-bold text-white hover:bg-blue-500"
        type="submit"
      >
        Sign In
      </button>
      <div>
        have no account?{" "}
        <Link to="/sign-up" className="text-blue-600 underline">
          Create your account
        </Link>
      </div>
    </form>
  );
}

export default Signin;
