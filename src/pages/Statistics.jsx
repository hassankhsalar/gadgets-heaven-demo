import React from 'react';
import { ComposedChart, Line, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const data = useLoaderData(); // Assuming this returns an array of objects with price data
    console.log(data);

    return (
        <div>
            <div className="bg-purple-500 w-full mx-auto rounded-2xl h-3/6 flex flex-col text-center justify-center items-center py-24">
                <h1 className="text-5xl text-white font-bold">Statistics</h1>
                <p className="py-6 w-7/12 text-white font-light text-slate-300">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
            </div>
            <div className=' p-6'>
                {/* ComposedChart Component with Line and Bar */}
                <ComposedChart width={800} height={500} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" /> {/* Replace 'name' with the field that represents labels on the X axis */}
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {/* Bar Chart */}
                    <Bar dataKey="price" barSize={20} fill="#413ea0" />
                    {/* Line Chart */}
                    <Line type="monotone" dataKey="price" stroke="#ff7300" />
                </ComposedChart>
            </div>
        </div>
    );
};

export default Statistics;
