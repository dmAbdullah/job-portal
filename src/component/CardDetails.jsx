import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { MapPinIcon } from '@heroicons/react/24/outline'
import { CurrencyDollarIcon } from '@heroicons/react/24/outline'
import { BriefcaseIcon } from '@heroicons/react/24/outline'
import { PhoneIcon } from '@heroicons/react/24/outline'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { addToDb } from "./Utils/fakeDb";

const CardDetails = () => {
  
  let { Id } = useParams();
  const jobDetails= useLoaderData()

  const [jobData, setJobData] = useState({});
  
  useEffect(()=>{
    const details= jobDetails.find(job=> job.Job_Id == Id)
    setJobData(details)
  },[jobDetails])
  
  const handleJob= (id)=>{
      addToDb(id)
      
      
  }
  return (<div className="px-10">
    <h1 className="text-center mt-10 p-5 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Job Details</h1>

    <div className="md:grid grid-cols-3 gap-5">
<div className="col-span-2 text-justify mb-5">
    <p><span className="font-semibold text-zinc-950">Job Description: </span> {jobData.job_description}</p> <br />
    <p><span className="font-semibold text-zinc-950">Job Responsibility: </span> {jobData.job_responsibilities}</p> <br />
    <p><span className="font-semibold text-zinc-950">Educational Requirements: <br /> </span> {jobData.educational_requirement}</p> <br />
    <p><span className="font-semibold text-zinc-950">Experiences: <br /> </span> {jobData.experience}</p> 
</div>
<div className="pl-5">
    <div className="bg-slate-300 p-5 rounded-lg">
      <div className="divide-y">
      <h2 className="font-bold text-zinc-950">Job Details</h2>
        <div>
        <h2 className="font-semibold  inline-flex mt-5"><CurrencyDollarIcon className="h-6 w-6 text-gray-500 text-sm" />Salary: {jobData.salary} (Per Month)</h2>
        <br />
        <h2 className="font-semibold inline-flex"><BriefcaseIcon className="h-6 w-6 text-gray-500 text-sm" />Job Title: {jobData.job_title}</h2>
        </div>
      </div>

        <div className="divide-y">
        <h2 className="font-bold text-zinc-950 mt-5">Contact Information</h2>
     
        <div>
        <h2 className="font-semibold inline-flex mt-5"><PhoneIcon className="h-6 w-6 text-gray-500 text-sm" />Phone: {jobData.phone}</h2>
        <br />
        <h2 className="font-semibold inline-flex"><EnvelopeIcon className="h-6 w-6 text-gray-500 text-sm" />Email: {jobData.email}</h2>
        <br />
        <h2 className="font-semibold inline-flex"><MapPinIcon className="h-6 w-6 text-gray-500 text-sm" />Address: {jobData.address}</h2>
        </div>
        </div>
    </div>
    <Link>
    <button onClick={()=> handleJob(jobData.Job_Id)} className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-lg font-semibold text-xl text-white hover:text-yellow-300 duration-300 w-full my-5">Apply Now</button></Link>
</div>
    </div>
    </div>
    )
  };

export default CardDetails;
