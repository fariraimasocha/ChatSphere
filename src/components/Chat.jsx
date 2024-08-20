import React from 'react';
import ChatBot from 'react-chatbotify';

const header = {
    title: "Shantel's Online Pharmacy",
};

const flow = {
    start: {
        message: "Welcome to Shantel's Online Pharmacy! May I have your full name, please?",
        path: "name"
    },
    name: {
        message: (params) => `Nice to meet you, ${params.userInput}! What is your age?`,
        path: "age"
    },
    age: {
        message: (params) => `Thank you. Could you describe the symptoms you are experiencing?`,
        path: "symptoms"
    },
    symptoms: {
        message: (params) => `Got it. Do you have any known allergies?`,
        path: "allergies"
    },
    allergies: {
        message: (params) => `Thanks for letting me know. Are you currently on any medication? If so, please specify.`,
        path: "medication"
    },
    medication: {
        message: (params) => `Understood. Do you have any existing medical conditions?`,
        path: "medical_conditions"
    },
    medical_conditions: {
        message: (params) => `Thank you. Could you provide your address for delivery?`,
        path: "address"
    },
    address: {
        message: (params) => `Thanks! What is your preferred payment method (e.g., credit card, PayPal)?`,
        path: "payment_method"
    },
    payment_method: {
        message: (params) => `Great choice. Would you like to upload any prescriptions you have, or do you need a new one issued?`,
        path: "prescription"
    },
    prescription: {
        message: (params) => `Thank you for the information. Your prescription will be delivered shortly!`,
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
