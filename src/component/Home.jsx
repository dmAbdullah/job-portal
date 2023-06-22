import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "./Card";
import image from "../assets/image.png";
import JobCategory from "./JobCategory";

const Home = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("jobCategory.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  const jobs = useLoaderData();
  return (
    <div>
      <div className="px-10 md:flex justify-between items-center">
        <div>
          <h1 className="text-5xl font-bold">
            One Step <br /> Closer To Your <br />{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Dream Job
            </span>
          </h1>
          <h3 className="my-5 w-80">
            <small className="text-left">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish. 
            </small>
          </h3>
          <br />
          <Link to='/*'>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-lg font-semibold  text-white hover:text-yellow-300 duration-300">
            Get Started
          </button></Link>
        </div>
        <div>
          <img className="md:h-96" src={image} alt="" />
        </div>
      </div>
      <section className="text-center my-8">
        <h1 className="text-2xl font-bold">Job Category List</h1>
        <p className=" px-8">
          <small>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </small>
        </p>
        <div className="mt-4 px-8 grid sm:grid-cols-2 md:grid-cols-4 text-start place-items-center">
          {category.map((jobCat) => (
            <JobCategory key={jobCat.id} jobCat={jobCat} />
          ))}
        </div>
      </section>
      <section className="text-center my-8">
        <>
          <h1 className="text-2xl font-bold">Featured Jobs</h1>
          <p className=" px-8">
            <small>
              Explore thousands of job opportunities with all the information
              you need. Its your future
            </small>
          </p>
        </>
        <div className=" grid md:grid-cols-2 gap-8 items-center mt-4 w-9/12 mx-auto">
          {jobs.map((job) => (
            <Card key={job.Job_Id} job={job} />
          ))}
        </div>
        <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-2 rounded-lg font-semibold mt-5 hover:text-yellow-300 duration-300 text-center">
          See All Jobs
        </button>
      </section>
    </div>
  );
};

export default Home;
