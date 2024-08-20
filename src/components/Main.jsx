import React from 'react';
import bot from '/images/bots/chat.png';

function Main() {
    return (
        <div className='px-6 py-5'>
            <div className='flex flex-col-reverse lg:flex-row justify-between space-y-5 lg:space-y-0 lg:space-x-5'>
                <div className='px-2 mt-12 lg:mt-32'>
                    <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white'>
                        Supercharge your Customer Service with Custom web <span className='text-yellow-400'>chatbots.</span>
                    </h1>
                    <p className='text-white mt-4 sm:mt-6 text-lg sm:text-xl w-full lg:w-10/12'>
                        Say goodbye to long wait times and frustrating interactions. Our chatbots provide 24/7 assistance tailored to your customers.
                    </p>
                    <a href="">
                        <button className='rounded-3xl text-black px-8 sm:px-10 mt-4 sm:mt-5 py-3 bg-white'>
                            Get Started
                        </button>
                    </a>
                </div>
                <div className='flex justify-center'>
                    <img src={bot} alt="Chatbot" className='w-9/12 sm:w-8/12 md:w-12/12 lg:w-9/12' />
                </div>
            </div>
        </div>
    );
}

export default Main;
