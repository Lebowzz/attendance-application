import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    axios.get("http://localhost:5151/api/Users").then((response) => {
      const users = response.data;
      const userWithEmail = users.find((user) => user.email === email);

      if (userWithEmail.isTeacher) {
        navigate(`/teacher/${userWithEmail.id}`);
      } else {
        navigate(`/student/${userWithEmail.id}`);
      }
    });
  };
  return (
    <main className="flex items-center justify-center">
      <div className="max-w-md relative flex flex-col p-8 rounded-md text-left text-black bg-[#fff]">
        <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
          Welcome back!
        </div>
        <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
          Log in to your account
        </div>
        <form className="flex flex-col gap-3">
          <div className="block relative">
            <label
              htmlFor="email"
              className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="text"
              className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="block relative">
            <label
              htmlFor="password"
              className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button
            type="submit"
            onClick={submitHandler}
            className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
          >
            Submit
          </button>
        </form>
        <div className="text-sm text-center mt-[1.6rem]">
          Don’t have an account yet?{" "}
          <Link to="/signup" className="text-sm text-[#7747ff]">
            Sign up for free!
          </Link>
        </div>
      </div>
    </main>
  );
}
