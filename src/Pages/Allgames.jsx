import React, { use } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router";

const dataPromise = fetch("/data.json").then((res) => res.json());

const Allgames = () => {
  const datas = use(dataPromise);

  const notify = () => toast("Game Installed!");

  return (
    <div className="ml-[20px] md:w-6xl md:mx-auto">
      <div>

        <h2 className="text-[22px] pt-[50px] ">ALL GAMES</h2>

        <div className="py-[50px] grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
          {datas.map((dat) => (
            <div className="w-[300px] bg-[#101622] ">
              <div>
                <div className="card bg-base-100 w-[300px] md:w-96 shadow-sm h-[450px]">
                  <figure>
                    <img className="w-full" src={dat.coverPhoto} alt="banner" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-[#4C80E6] font-bold text-2xl">
                      {dat.title}
                    </h2>
                    <p className="text-[18px]">
                      Category : <span>{dat.category}</span>{" "}
                    </p>
                    <p className="text-[18px]">
                      Ratings : <span>{dat.ratings}</span>{" "}
                    </p>
                    <div className="card-actions justify-center pt-[10px]">
                      <Link
                        to={`/game/${dat.id}`}
                        className="btn  w-[150px] bg-[#4C80E6]"
                      >
                        View Details
                      </Link>
                      <button
                        onClick={notify}
                        className="btn  w-[150px] bg-[#4C80E6]"
                      >
                        Install Now
                      </button>
                      <ToastContainer />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Allgames;
