import { Link } from "react-router-dom";

function Signup() {
  return (
    <form className="m-auto flex max-w-[85%] flex-col gap-6 rounded bg-slate-300 p-10 shadow-lg md:max-w-[40%]">
      <h1 className="text-2xl font-bold text-gray-800">Sign Up</h1>
      <label className="flex-1 text-sm font-bold text-gray-700">
        First Name
        <input
          type="text"
          defaultValue="John"
          className="w-full rounded border border-gray-400 px-3 py-2"
          placeholder="John"
          required
        />
      </label>
      <label className="flex-1 text-sm font-bold text-gray-700">
        Last Name
        <input
          type="text"
          defaultValue="John"
          className="w-full rounded border border-gray-400 px-3 py-2"
          placeholder="Doe"
          required
        />
      </label>
      <label className="flex-1 text-sm font-bold text-gray-700">
        <label className="flex-1 text-sm font-bold text-gray-700">
          Gender
          <input
            type="text"
            className="w-full rounded border border-gray-400 px-3 py-2"
            placeholder="Male/Female"
            required
          />
        </label>
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
        Phone Number
        <input
          type="number"
          className="w-full rounded border border-gray-400 px-3 py-2"
          placeholder="+251"
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
        have an account?{" "}
        <Link to="/sign-in" className="text-blue-600 underline">
          Sign in
        </Link>
      </div>
    </form>
  );
}

export default Signup;
