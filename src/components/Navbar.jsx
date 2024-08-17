import React from "react";
import { FaChevronRight, FaSearch } from "react-icons/fa"; // Import FaSearch

const Navbar = () => {
  return (
    <div className="navbar bg-slate-50 flex items-center px-5">
      {/* Left: Breadcrumb */}
      <div className="flex-none">
        <span className="">Home</span>
        <FaChevronRight className="mx-2 text-xs" />
        <span className="text-bold text-zinc-600">Dashboard v2</span>
      </div>

      {/* Center: Search bar with icon */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-full max-w-md">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
            <FaSearch />
          </span>
          <input
            type="text"
            placeholder="Search anything...."
            className="input input-bordered w-full h-8 pl-10 bg-slate-300" // Add padding-left for icon space
            style={{ maxWidth: "400px" }}
          />
        </div>
      </div>

      {/* Right: User profile dropdown */}
      <div className="flex-none flex gap-2 items-center">
        {/* //Ball icon svg */}
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            {/* <span className="badge badge-xs badge-primary indicator-item"></span> */}
          </div>
        </button>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="User avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
