import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { ToastContainer, toast } from "react-toastify";

const Details = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [games, setGames] = useState({});

  useEffect(() => {
    const gameDetails = data.find((singleGame) => singleGame.id === id);
    setGames(gameDetails);
  }, [data, id]);

  const notify = () => toast("added to the wish list!");
  return (
    <div>
      <div className=" text-slate-100">
        <main className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6">
          <section className="relative  rounded-2xl">
            <img
              src={games.coverPhoto}
              alt="Neon city skyline background art"
              className="w-full rounded-4xl"
            />
            <div className="absolute"></div>

            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <div className="flex flex-col gap-4">
                <div>
                  <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
                    {games.title}
                  </h1>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-slate-800/70 px-3 py-1 text-xs md:text-sm text-slate-200">
                      Category : {games.category}
                    </span>
                    <span className="rounded-full bg-slate-800/70 px-3 py-1 text-xs md:text-sm text-slate-200">
                      Developed by : {games.developer}
                    </span>
                    <span className="rounded-full bg-slate-800/70 px-3 py-1 text-xs md:text-sm text-slate-200">
                      Ratings : {games.ratings}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="flex pt-10 flex-wrap gap-3">
            <button className="inline-flex items-center rounded-xl bg-blue-600 px-5 py-2 text-sm font-medium hover:bg-blue-500">
              <Link to={games.downloadLink}>Install Game</Link>
            </button>
            <button
              onClick={notify}
              className="inline-flex items-center rounded-xl bg-slate-700 px-5 py-2 text-sm font-medium hover:bg-slate-600"
            >
              Add to Wishlist
            </button>
            <ToastContainer />
          </div>

          <div className="py-20 ">
            <div>
              <section className="rounded-xl border border-slate-800/60 bg-slate-900/50 p-5 ">
                <h2 className="mb-2 text-lg font-semibold">About the Game</h2>
                <p className=" text-slate-300">{games.description}</p>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Details;
