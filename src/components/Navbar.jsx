import React, { useState } from 'react';
import { faBars, faMessage, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

                    <div className='flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow max-w-full w-10/12 h-96 p'>
                        <img className='object-cover w-full h-96 md:h-full md:w-64 md:rounded-none' src='/images/project.png' alt='Project Image' />
                        <div className='flex flex-col justify-between p-4 leading-normal w-full'>
                            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>Final Year Project: Chatbot for Online Pharmacy</h5>
                            <p className='mb-3 font-normal text-gray-700'>This project focuses on developing a chatbot that assists users in an online pharmacy by gathering necessary information before delivering prescriptions.</p>
                            <p className='mb-3 font-normal text-gray-700'><strong>Name:</strong> Shantel Nyoni Masocha</p>
                            <p className='mb-3 font-normal text-gray-700'><strong>GitHub:</strong> <a href="https://github.com/fariraimasocha/ChatSphere" className='text-blue-500 hover:underline' target='_blank' rel='noopener noreferrer'>https://github.com/yourusername/yourproject</a></p>
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
