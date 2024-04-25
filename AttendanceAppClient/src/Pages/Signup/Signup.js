import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [isTeacher, setIsTeacher] = useState(false);
  const [info, setInfo] = useState("create a new account");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("submitting");

    if (password !== rePassword) {
      setInfo("Entered passwords are not similar");
    } else {
      const User = { fname, lname, email, password, isTeacher };

      try {
        const response = await axios.post(
          "http://localhost:5151/api/Users",
          User
        );
        console.log("Response:", response.data);

        axios.get("http://localhost:5151/api/Users").then((response) => {
          const users = response.data;
          const userWithEmail = users.find((user) => user.email === User.email);

          if (User.isTeacher) {
            navigate(`/teacher/${userWithEmail.id}`);
          } else {
            navigate(`/student/${userWithEmail.id}`);
          }
        });
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <>
      <main className="flex items-center justify-center">
        <div className="max-w-md relative flex flex-col p-8 rounded-md text-left text-black bg-[#ffffff]">
          <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
            Sign up
          </div>
          <div
            id="comment"
            className="text-sm font-normal mb-4 text-center text-[#1e0e4b]"
          >
            {info}
          </div>
          <form className="flex flex-col gap-3" onSubmit={submitHandler}>
            <div className="block relative">
              <label
                htmlFor="fname"
                className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
              >
                First name
              </label>
              <input
                id="fname"
                name="fname"
                type="text"
                className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
                required
                onChange={(e) => setFname(e.target.value)}
                value={fname}
              />
            </div>
            <div className="block relative">
              <label
                htmlFor="lname"
                className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
              >
                Last name
              </label>
              <input
                id="lname"
                name="lname"
                type="text"
                className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
                required
                onChange={(e) => setLname(e.target.value)}
                value={lname}
              />
            </div>
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
            <div className="block relative">
              <label
                htmlFor="repassword"
                className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
              >
                Re-enter password
              </label>
              <input
                id="repassword"
                name="repassword"
                type="password"
                required
                className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
                onChange={(e) => setRePassword(e.target.value)}
                value={rePassword}
              />
            </div>
            <div className="block relative">
              <label
                htmlFor="isTeacher"
                className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
              >
                isTeacher
              </label>
              <select
                id="isTeacher"
                name="isTeacher"
                value={isTeacher}
                required
                onChange={(e) => setIsTeacher(e.target.value)}
                className="w-[100%] h-[100%] bg-white rounded border border-gray-200 py-3"
              >
                <option value="false">Student</option>
                <option value="true">Teacher</option>
              </select>
            </div>
            <button
              type="submit"
              // onClick={submitHandler}
              className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
            >
              Submit
            </button>
          </form>
          <div className="text-sm text-center mt-[1.6rem]">
            Already have an account?{" "}
            <Link to="/login" className="text-sm text-[#7747ff]">
              Login right now!
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
