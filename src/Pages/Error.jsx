import React from "react";
import { Link } from "react-router";

const Error = () => {
  return (
    <div>
      <title>404</title>
      <section className=" w-full flex items-center justify-center px-4 py-30">
        <div className="text-center max-w-2xl">
          
          <h1 className="text-[96px] sm:text-[140px] md:text-[180px] font-extrabold text-blue-500/90 drop-shadow-[0_0_25px_rgba(59,130,246,0.75)]">
            404
          </h1>

          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-white">Lost Signal?</h2>

          <p className="mt-3 text-sm sm:text-base text-slate-400 ">Looks like you’ve taken a wrong turn. The page you’re looking for doesn’t exist or has been moved. Maybe a broken link or a typo?
          </p>

          <div className="mt-8 flex justify-center">
            <Link to="/" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[220px] px-8 h-12 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition shadow-lg shadow-blue-600/30"
            >
              Return to Homepage </Link>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Error;
