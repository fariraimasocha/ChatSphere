import React from 'react';
import ChatBot from 'react-chatbotify';

const header = {
    title: "Welcome to MC's Service Station",
};

const flow = {
    start: {
        message: "Welcome to MC's Service Station! May I have your full name, please?",
        path: "name"
    },
    name: {
        message: (params) => `Nice to meet you, ${params.userInput}! What type of service do you need today? (e.g., fuel, car wash, maintenance)`,
        path: "service_type"
    },
    service_type: {
        message: (params) => `Thank you! Can you tell me your vehicle's make and model?`,
        path: "vehicle_info"
    },
    vehicle_info: {
        message: (params) => `Got it. What is your vehicle's license plate number?`,
        path: "license_plate"
    },
    license_plate: {
        message: (params) => `Thanks! Do you have any specific concerns or issues with your vehicle?`,
        path: "vehicle_concerns"
    },
    vehicle_concerns: {
        message: (params) => `Understood. Would you like to schedule an appointment for service or get an estimate?`,
        path: "appointment_or_estimate"
    },
    appointment_or_estimate: {
        message: (params) => `Great! What date and time works best for you?`,
        path: "schedule_time"
    },
    schedule_time: {
        message: (params) => `Thank you for the information! Is there anything else you would like assistance with?`,
        path: "end"
    },
    end: {
        message: "If you need anything else, feel free to ask. Have a great day!",
        path: null
    }
};

const MyChatBot = () => {
    return (
        <div>
            <ChatBot flow={flow} name="Farirai" header={header} />
        </div>
    );
};

export default MyChatBot;
