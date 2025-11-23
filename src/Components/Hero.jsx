import React from "react";
import Marquee from "react-fast-marquee";
import banner1 from "../assets/banner01.jpg";
import banner2 from "../assets/banner02.jpg";
import banner3 from "../assets/banner03.jpg";
import banner4 from "../assets/banner04.jpg";
import banner5 from "../assets/banner05.jpg";
import banner6 from "../assets/banner06.jpg";

const Hero = () => {
  return (
    <div className="md:w-6xl mx-auto py-[50px] bg-[#101622] ">
      <Marquee speed={100}>
        <div className="card w-96 shadow-sm py-[20px] h-[170px]">
          <figure>
            <img src={banner1} alt="banners" />
          </figure>
        </div>

        <div className="card w-96 shadow-sm py-[20px]  h-[170px]">
          <figure>
            <img src={banner1} alt="banners" />
          </figure>
        </div>

        <div className="card w-96 shadow-sm py-[20px]  h-[170px]">
          <figure>
            <img src={banner2} alt="banners" />
          </figure>
        </div>

        <div className="card w-96 shadow-sm py-[20px]  h-[170px]">
          <figure>
            <img src={banner3} alt="banners" />
          </figure>
        </div>

        <div className="card w-96 shadow-sm py-[20px]  h-[170px]">
          <figure>
            <img src={banner4} alt="banners" />
          </figure>
        </div>

        <div className="card w-96 shadow-sm py-[20px]  h-[170px]">
          <figure>
            <img src={banner5} alt="banners" />
          </figure>
        </div>

        <div className="card w-96 shadow-sm py-[20px] h-[170px]">
          <figure>
            <img src={banner6} alt="banners" />
          </figure>
        </div>
      </Marquee>
    </div>
  );
};

export default Hero;
