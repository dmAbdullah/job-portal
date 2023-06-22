import React from 'react';

const JobCategory = ({jobCat}) => {
    return (
        <div>
            <div className="bg-slate-50 shadow-md p-5 w-52 mb-5">
              <img className="w-12 mb-2" src={jobCat.img} alt="" set="" />
              <p className="font-semibold">
                {jobCat.Category}
              </p>
              <p className="text-xs">{jobCat.quantity}</p>
            </div>
        </div>
    );
};

export default JobCategory;