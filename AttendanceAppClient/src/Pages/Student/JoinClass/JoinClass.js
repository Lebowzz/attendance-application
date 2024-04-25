import React from "react";
import { Link } from "react-router-dom";

function JoinClass() {
  return (
    <main className="flex flex-col items-center justify-around">
      <form className="w-[40vw] h-[35vh] flex flex-col items-center justify-around p-[2rem] bg-white rounded-3xl">
        <h2 className="text-black text-2xl">Join Class</h2>
        <label
          htmlFor="code"
          className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
        >
          Enter class code:
        </label>
        <input
          id="code"
          name="code"
          className="rounded border bg-gray-100 border-gray-200 text-sm w-[60%] font-normal leading-[18px] text-black tracking-[0px] appearance-none h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
          type="text"
        />
        <div>
          <Link
            to="/student"
            className="text-white text-lg bg-[#7747ff] px-[1rem] py-[0.5rem] w-[5rem] rounded"
          >
            Join class
          </Link>
        </div>
      </form>
    </main>
  );
}

export default JoinClass;
