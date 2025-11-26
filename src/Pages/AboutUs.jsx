import React from 'react';

const AboutUs = () => {
    return (
     <div className=" text-white font-sans">
  
    <section
      className="relative flex mt-10 mb-16 items-center justify-center bg-cover bg-center"
    >
      <div className="relative max-w-3xl px-4 text-center">
        <h1 className="text-3xl sm:text-4xl  font-extrabold">
          ABOUT GAMEHUB
        </h1>
        <p className="mt-2 text-[11px] sm:text-xs ">
          Connecting players with the next generation of indie game developers.
        </p>
      </div>
    </section>


    <section className="mx-auto mt-2 mb-10 max-w-4xl px-4 text-center">
      <h2 className="text-lg sm:text-xl font-bold  mb-5">
        "Championing the next generation of game creators."
      </h2>
      <p className="mx-auto max-w-2xl text-sm ">
        We believe in the power of independent developers to push boundaries and
        create unforgettable experiences. Our mission is to provide a platform
        where their creativity can thrive and connect with a global audience.
      </p>
    </section>

  
    <section className="mx-auto mb-16 max-w-5xl px-4 pb-10">
      <div
        className="flex flex-col md:flex-row items-center gap-8 rounded-2xl bg-darkCard p-6 md:p-8 shadow-[0_18px_40px_rgba(0,0,0,0.5)]"
      >
  
        <div className=" space-y-6">
          <h2
            className="text-xl  font-extrabold mb-2 "
          >
            OUR STORY
          </h2>
          <p className="text-sm ">
            Gamehub started from a simple idea: what if there was a better way
            to discover unique indie games and directly support the creators
            behind them? We built this platform to solve that problem, creating
            a vibrant community for both players and developers.
          </p>
          <p className="text-sm ">
            From late-night coding sessions to our first game launch, our
            journey has been fueled by a passion for gaming and belief in the
            underdog. We are dedicated to building a space that is fair,
            transparent, and puts the spotlight on the artists who pour their
            hearts into their work.
          </p>
        </div>
      </div>
    </section>
  </div>
    );
};

export default AboutUs;