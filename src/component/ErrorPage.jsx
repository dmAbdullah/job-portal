import React from "react";
import { Link } from "react-router-dom";
import image from '../assets/error.png'

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center mt-20">
      <div className="px-10 text-center">
        <h1 className="font-extrabold text-6xl text-zinc-950 font-serif">
          Error
        </h1>
        <img
          className="w-56 my-auto mx-auto"
          src={image}
          alt="Error 404"
        />
        <h1 className="font-extrabold text-6xl text-zinc-950 font-serif">
          Not Found
        </h1>
        <Link to='/'>
        <button className="bg-gradient-to-r from-purple-600 to-red-600 p-3 rounded-lg font-semibold  text-white hover:text-pink-300 duration-300 mt-8">Back to Home</button></Link>
      </div>
    </div>
  );
};

export default ErrorPage;
