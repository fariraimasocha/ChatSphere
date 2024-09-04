import React from 'react';
import { useNavigate } from 'react-router-dom';
import bot from '/images/bots/chat.png'; // Adjust path as necessary

export default function Dashboard() {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear logged-in user from localStorage
        localStorage.removeItem('loggedInUser');
        // Redirect to sign-in page
        navigate('/signin');
    };

    return (
        <div className='px-6 py-5 bg-gray-900 min-h-screen'>
            <div className='flex flex-col-reverse lg:flex-row justify-between space-y-5 lg:space-y-0 lg:space-x-5'>
                <div className='px-2 mt-12 lg:mt-32'>
                    <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white'>
                        Welcome to Your <span className='text-indigo-400'>Dashboard.</span>
                    </h1>
                    <p className='text-white mt-4 sm:mt-6 text-lg sm:text-xl w-full lg:w-10/12'>
                        Here’s a quick overview of your recent activity and stats. Use the options below to manage your posts, view your stats, and more.
                    </p>
                    <button
                        onClick={handleLogout}
                        className='mt-4 sm:mt-5 px-8 sm:px-10 py-3 rounded-3xl bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                    >
                        Logout
                    </button>
                </div>
                <div className='flex justify-center'>
                    <img src={bot} alt="Dashboard Illustration" className='w-9/12 sm:w-8/12 md:w-12/12 lg:w-9/12' />
                </div>
            </div>
        </div>
    );
}
