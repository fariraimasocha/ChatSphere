import React, { useState } from 'react';
import { faBars, faMessage, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import bot from '/images/project.png';

function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className='flex justify-between'>
            <div className='flex mt-7 px-6 space-x-2'>
                <FontAwesomeIcon icon={faMessage} className='text-3xl md:text-5xl text-white' />
                <h1 className='font-bold text-white text-3xl md:text-4xl'>ChatSphere</h1>
            </div>

            <div>
                <FontAwesomeIcon
                    icon={faBars}
                    className='text-3xl md:text-5xl text-white transition absolute 
                    right-4 top-4 md:right-20 md:top-10 cursor-pointer'
                    onClick={toggleModal}
                />
            </div>

            {isModalOpen && (
                <div className='fixed inset-0 bg-blue-400 flex items-center justify-center z-50'>
                    <div className='absolute top-4 right-4 flex space-x-2'>
                        <FontAwesomeIcon icon={faGithub} className='text-white text-4xl cursor-pointer' />
                        <FontAwesomeIcon
                            icon={faTimes}
                            className='text-white text-4xl cursor-pointer'
                            onClick={toggleModal}

                        />

                    </div>

                    <div className='flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow max-w-full w-11/12 h-auto md:h-96 p-4'>
                        <img className='object-cover w-full h-64 md:h-full md:w-64 md:rounded-none rounded-t-lg md:rounded-l-lg' src={bot} alt='Project Image' />
                        <div className='flex flex-col justify-between p-4 leading-normal w-full'>
                            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>Final Year Project: Chatbot for Online Pharmacy</h5>
                            <p className='mb-3 font-normal text-gray-700'>This project focuses on developing a chatbot that assists users in an online pharmacy by gathering necessary information before delivering prescriptions.</p>
                            <p className='mb-3 font-normal text-gray-700'><strong>Name:</strong> Shantel Nyoni</p>
                            <p className='mb-3 font-normal text-gray-700'><strong>How it helps:</strong>
                                Say goodbye to long wait times and frustrating interactions.
                                Our chatbots provide 24/7 assistance tailored to your customers.
                            </p>
                        </div>
                    </div>


                </div>
            )}
        </div>
    );
}

export default Navbar;
