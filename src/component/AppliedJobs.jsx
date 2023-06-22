import { useLoaderData } from "react-router-dom";
import AppliedList from "./AppliedList";

const AppliedJobs = () => {
    const loaderData = useLoaderData();
    
  return (

    <div className="px-10">
      <h1 className="text-center p-5 mt-10 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-600">
        Applied Jobs
      </h1>

    <div>
    <div className="dropdown  dropdown-bottom flex justify-end">
        <label tabIndex={0} className="btn btn-primary m-1 normal-case">
          Filter
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40"
        >
          <li>
            <a>Full-time</a>
          </li>
          <li>
            <a>Part-time</a>
          </li>
        </ul>
      </div>
{
    loaderData.map(data=> <AppliedList key={data.Job_Id} data={data}/>)
}
    </div>
    </div>
  );
};

export default AppliedJobs;
