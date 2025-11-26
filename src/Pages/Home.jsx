import React, { use } from "react";
import { Link, Links } from "react-router";
import Hero from "../Components/Hero";
import Newsletter from "../Components/Newsletter";


const dataPromise = fetch("/popular.json").then((res) => res.json());

const Home = () => {
  const datas = use(dataPromise);

  return (
    <div className="ml-[20px] md:w-6xl md:mx-auto">
      <title>Home</title>
      
      <Hero></Hero>

      <div>
        
        <h2 className="text-[22px] ">POPULAR RIGHT NOW</h2>

        <div className="py-[50px] grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
          {datas.map((dat) => (
            <div key={dat.id} className="w-[300px] py-[10px] bg-[#101622] ">
              <div>
                <div className="card bg-base-100 w-[300px] md:w-96 shadow-sm h-[450px]">
                  <figure>
                    <img className="md:w-full" src={dat.coverPhoto} alt="banner" />
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
                        className="btn  w-[150px] bg-[#4C80E6]"
                      >
                        <Link to={dat.downloadLink}>Install Now</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <Newsletter></Newsletter>

    </div>
  );
};

export default Home;
