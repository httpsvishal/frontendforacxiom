import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {
    return (
        <div>
            
            <div className='m-5 bg-sky-600 border rounded w-full p-5 '>
                <h1 className='text-2xl font-bold text-center'>Welcome to the Event Management System</h1>
            </div>
            <div className="flex flex-col items-center m-5" >
                <div className='m-5 bg-sky-600 border rounded w-1/5 p-5 '>
                    <Link to='/user-signup' className='text-xl font-bold text-center'>User Signup</Link>
                </div>
                <div className='m-5 bg-sky-600 border rounded w-1/5 p-5 '>
                    <Link to='/admin-signup' className='text-xl font-bold text-center'>Admin Signup</Link>
                </div>
                <div className='m-5 bg-sky-600 border rounded w-1/5 p-5 '>
                    <Link to='/vendor-signup' className='text-xl font-bold text-center'>Vendor Signup</Link>
                </div>

                <div className='m-5 bg-sky-600 border rounded w-1/5 p-5 '>
                    <Link to='/user-login' className='text-xl font-bold text-center'>User Login</Link>
                </div>
                <div className='m-5 bg-sky-600 border rounded w-1/5 p-5 '>
                    <Link to='/admin-login' className='text-xl font-bold text-center'>Admin Login</Link>
                </div>
                <div className='m-5 bg-sky-600 border rounded w-1/5 p-5 '>
                    <Link to='/vendor-login' className='text-xl font-bold text-center'>Vendor Login</Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;