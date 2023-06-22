import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Statistics = () => {
  const marksArray = [
    {
      Id: "A1",
      AssignmentName: "1st Assignment",
      Mark: 60,
    },
    {
      Id: "A2",
      AssignmentName: "2nd Assignment",
      Mark: 60,
    },
    {
      Id: "A3",
      AssignmentName: "3rd Assignment",
      Mark: 60,
    },
    {
      Id: "A4",
      AssignmentName: "4th Assignment",
      Mark: 59,
    },
    {
      Id: "A5",
      AssignmentName: "5th Assignment",
      Mark: 60,
    },
    {
      Id: "A6",
      AssignmentName: "6th Assignment",
      Mark: 57,
    },
    {
      Id: "A7",
      AssignmentName: "7th Assignment",
      Mark: 60,
    },
    {
      Id: "A8",
      AssignmentName: "8th Assignment",
      Mark: 60,
    },
  ];

    return (
     <div>
        <h1 className='text-2xl p-5 mt-10 text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-600' title='Assignment Marks Statistics (1-8)'>Statistics</h1>
         <AreaChart className='mx-auto' width={600} height={400} data={marksArray}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Id" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="Mark" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
      <p className='text-center text-gray-400'><small>Assignment Marks Statistics</small></p>
     </div>
    );
  };
  
  export default Statistics;
  