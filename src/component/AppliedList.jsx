import React from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const AppliedList = ({ data }) => {
  const {
    img,
    job_title,
    company_name,
    job_type,
    address,
    salary,
    job_Location,
    Job_Id,
  } = data;
  return (
    <div>
      <div className="flex justify-between my-5 items-center border rounded-lg p-2">
        <div className="flex gap-5">
          <img className="w-48 bg-slate-200 p-8" src={img} alt="" />
          <div>
            <h2>{job_title}</h2>
            <h2>{company_name}</h2>
            <div className="flex gap-3">
              <h5 className="border-2 p-1  text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 border-blue-400 rounded-md">
                {job_type}
              </h5>
              <h5 className="border-2 p-1 border-blue-400 rounded-md text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                {job_Location}
              </h5>
            </div>
            <div className="md:flex gap-3">
              <p className="inline-flex">
                {" "}
                <MapPinIcon className="h-6 w-6 text-gray-500 text-sm" />{" "}
                {address}&ensp;
              </p>
              <p className="inline-flex">
                {" "}
                <CurrencyDollarIcon className="h-6 w-6 text-gray-500 text-sm" />{" "}
                Salary: {salary}
              </p>
            </div>
          </div>
        </div>
        <div>
          <Link to={`/details/${Job_Id}`}>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-2 rounded-lg font-semibold mt-5 hover:text-yellow-300 duration-300">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppliedList;
