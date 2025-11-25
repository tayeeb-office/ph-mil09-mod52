import React, { useContext } from "react";
import { NavLink } from "react-router";
import logo from "../assets/logo.png";
import { AuthContext } from "../Provider/Provider";

const Navbar = () => {

  const { user } = useContext(AuthContext);

  return (
    <div className="md:w-6xl mx-auto py-[10px] bg-[#101622] sticky top-0 z-50 ">
      <div className="navbar flex justify-between items-center gap-11">
        <div>
          <NavLink to="/">
            <img className="w-[80px] h-[60px]" src={logo} alt="logo" />
          </NavLink>
        </div>

        <div className="flex justify-between items-center gap-4">
          <div className="hidden md:block">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink
                  to="/"
                  className="text-white hover:text-[#4C80E6] active:text-[#4C80E6]"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/allgames"
                  className="text-white hover:text-[#4C80E6] active:text-[#4C80E6]"
                >
                  All Games
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/registration"
                  className="text-white hover:text-[#4C80E6] active:text-[#4C80E6]"
                >
                  Registration
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className="text-white hover:text-[#4C80E6] active:text-[#4C80E6]"
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/profile"
                  className="text-white hover:text-[#4C80E6] active:text-[#4C80E6]"
                >
                  Profile
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="flex">
            <div className="navbar-center hidden lg:flex"></div>

            <div className="dropdown dropdown-end ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow lg:hidden"
              >
                <li>
                  <NavLink
                    to="/profile"
                    className="text-white hover:text-[#4C80E6] active:text-[#4C80E6]"
                  >
                    Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/"
                    className="text-white hover:text-[#4C80E6] active:text-[#4C80E6]"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/allgames"
                    className="text-white hover:text-[#4C80E6] active:text-[#4C80E6]"
                  >
                    All Games
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/registration"
                    className="text-white hover:text-[#4C80E6] active:text-[#4C80E6]"
                  >
                    Registration
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/login"
                    className="text-white hover:text-[#4C80E6] active:text-[#4C80E6]"
                  >
                    Login
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
