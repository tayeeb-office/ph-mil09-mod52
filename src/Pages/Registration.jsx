import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { MdOutlineDownloadDone } from "react-icons/md";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
          <section className=" w-full flex items-center justify-center px-4 py-30">
            <div className="w-full max-w-md rounded-2xl bg-[#1A1E24]/90 shadow-2xl ring-1 ring-white/10 px-6 py-10">
              
              <div className="text-center">
                <h1 className="text-2xl font-bold text-white">Create Your Gamehub Profile</h1>
                <p className="text-[14px] mt-2 text-slate-400">Join the underground to discover and support new games.</p>
              </div>
    
              <form className="mt-8 space-y-5">

                {/* Username */}
                <div className="space-y-2 flex flex-col gap-1">
                  <label className="text-sm font-semibold text-white">Username</label>
                  <input
                    type="text"
                    placeholder="Write username here"
                    className="w-full h-12 rounded-lg bg-[#0E1B33] text-slate-200 placeholder:text-slate-500 px-4 "
                  />
                </div>
               
               {/* Email */}
                <div className="space-y-2 flex flex-col gap-1">
                  <label className="text-sm font-semibold text-white">Email Address</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full h-12 rounded-lg bg-[#0E1B33] text-slate-200 placeholder:text-slate-500 px-4 "
                  />
                </div>

                {/* Image */}
                <div className="space-y-2 flex flex-col gap-1">
                  <label className="text-sm font-semibold text-white">Photo URL</label>
                  <input
                    type="text"
                    placeholder="Write image link here"
                    className="w-full h-12 rounded-lg bg-[#0E1B33] text-slate-200 placeholder:text-slate-500 px-4 "
                  />
                </div>
    
                {/* Passoward */}
                <div className="space-y-2 flex flex-col gap-1">
                  <label className="text-sm font-semibold text-white">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Write passoward here"
                      className="w-full h-12 rounded-lg bg-[#0E1B33] text-slate-200 placeholder:text-slate-500 px-4 pr-12 "
                    />
    
                    <button
                      type="button"
                      onClick={() => setShowPassword(() => !showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 "
                    >
                    { showPassword ? <FaEyeSlash/> : <FaEye /> }
                    </button>
                  </div>
                </div>

                {/* Pass Validation*/}
                <div className=" text-[14px] text-red-300">
                    <p className="flex items-center gap-1"> <MdOutlineDownloadDone />One uppercase letter</p>
                    <p className="flex items-center gap-1"> <MdOutlineDownloadDone />One lowercase character</p>
                    <p className="flex items-center gap-1"> <MdOutlineDownloadDone />6+ characters</p>
                </div>
    
    
                {/* Submit */}
                <button
                  type="submit"
                  className="w-full h-11 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold "
                >
                  Create Account
                </button>
    
              </form>

              
    
              <p className="mt-6 text-center text-sm text-slate-400">Already have an account? 
                <Link to="/login"><span className="text-blue-500 hover:text-blue-400 cursor-pointer font-semibold"> Log In</span></Link>
              </p>
    
            </div>
          </section>
    </div>
  );
};

export default Registration;
