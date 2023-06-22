import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className='px-10'>
            <h1 className="text-center p-5 mt-10 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-600">
            Blog
            </h1>
            <div className='bg-slate-100 shadow-lg mt-5 p-5'>
                <p className='font-bold'>1. When should you use context API?</p>
<br />
                <p>We use Context API when some data needs to be accessible by many components at different nesting levels also when passing props through multiple levels of the component tree becomes unwieldy. </p>
            </div>
            <div className='bg-slate-100 shadow-lg mt-5 p-5'>
                <p className='font-bold'>2. What is a custom hook?</p>
<br />
                <p>Custom hook is a JavaScript function whose name starts with 'use' and can be used to call other hooks.  </p>
            </div>
            <div className='bg-slate-100 shadow-lg mt-5 p-5'>
                <p className='font-bold'>3. What is useRef?</p>
<br />
                <p>useRef is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). </p>
            </div>
            <div className='bg-slate-100 shadow-lg mt-5 p-5'>
                <p className='font-bold'>4. What is useMemo?</p>
<br />
                <p>useMemo is a React Hook that lets you cache the result of a calculation between re-renders. </p>
            </div>

            <Link className='flex justify-center' to='/'>
        <button className=" bg-gradient-to-r from-purple-600 to-red-600 p-3 rounded-lg font-semibold  text-white hover:text-pink-300 duration-300 my-5">Back to Home</button></Link>
        </div>
    );
};

export default Blog;