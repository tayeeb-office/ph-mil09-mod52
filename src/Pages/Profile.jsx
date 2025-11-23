import React from "react";
import { Link } from "react-router";

const Profile = () => {
  return (
    <div>
      <div className=" flex items-center justify-center px-6 py-30">
        <div className="w-[280px] rounded-2xl bg-[#1A1E24] shadow-2xl px-6 py-8 flex flex-col items-center">
          
          <div className="relative">
            <div className="w-35 h-35 rounded-full ring-[6px] ring-sky-400 overflow-hidden bg-white">
              <img
                src="/your-avatar.png" 
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h2 className="mt-4 text-lg font-semibold text-white">User Name</h2>
          <p className="text-sm text-slate-400">Mail Address</p>

          
          <button className="mt-5 w-full rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5">
            <Link to="/update">Update Information</Link>
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Profile;
