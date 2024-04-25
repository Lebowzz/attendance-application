import React from "react";
import { Link } from "react-router-dom";

function Page404() {
  return (
    <main className="flex flex-col items-center justify-center font-semibold text-8xl">
      <p>Error 404</p>
      <p className="text-5xl">page not found</p>
      <Link to={"/"} className="m-10 text-xl text-[#7747ff]">
        Go back to home
      </Link>
    </main>
  );
}

export default Page404;
