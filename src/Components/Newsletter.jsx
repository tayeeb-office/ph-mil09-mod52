import React from "react";

const Newsletter = () => {
  return (
    <div className="py-[50px]">
      <section className="flex items-center justify-center px-4">

        
        <div className="w-full max-w-5xl rounded-2xl bg-[#182234] shadow-2xl px-6 py-14 md:px-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-2xl md:text-4xl font-semibold text-white">
              Get the Latest Indie Drops
            </h1>
            <p className="mt-3 text-sm md:text-base text-slate-400">
              Stay in the loop with news on new games and developer updates.
            </p>

            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full sm:w-[420px] h-12 rounded-lg bg-[#1B2540] text-slate-200 placeholder:text-slate-500 px-4 outline-none ring-1 ring-white/5 focus:ring-2 focus:ring-blue-500/60 transition"
              />

              <button className="h-12 w-full sm:w-auto px-6 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold tracking-wide transition shadow-lg shadow-blue-600/30">
                SUBSCRIBE
              </button>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
