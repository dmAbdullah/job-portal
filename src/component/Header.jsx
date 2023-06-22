import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="navbar px-8 font">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><NavLink className={({ isActive }) => (isActive ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600' : 'default')} to="/">Home</NavLink></li>
        <li><NavLink className={({ isActive }) => (isActive ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600' : 'default')} to="/statistics">Statistics</NavLink></li>
        <li>
        <NavLink className={({ isActive }) => (isActive ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600' : 'default')} to="/Jobs">Applied Jobs</NavLink> 
        </li>
        <li><NavLink className={({ isActive }) => (isActive ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600' : 'default')} to="/blog">Blog</NavLink></li>
      </ul>
    </div>
    <NavLink
        to="/"
        className=" font-bold text-xl"
      >
        JobFair
      </NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal font-semibold px-1">
    <li><NavLink className={({ isActive }) => (isActive ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600' : 'default')} to="/">Home</NavLink></li>
      <li><NavLink className={({ isActive }) => (isActive ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600' : 'default')} to="/statistics">Statistics</NavLink></li>
      <li>
      <NavLink className={({ isActive }) => (isActive ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600' : 'default')} to="/Jobs">Applied Jobs</NavLink>
      </li>
      <li><NavLink className={({ isActive }) => (isActive ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600' : 'default')} to="/blog">Blog</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
  <button className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-lg font-semibold hover:text-yellow-400 duration-300 text-white">
     Start Applying
      </button>
  </div>
</div>
    </>
  );
};

export default Header;