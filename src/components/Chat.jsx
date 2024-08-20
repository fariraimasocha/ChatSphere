import React from 'react';
import ChatBot from 'react-chatbotify';

const header = {
    title: "Farirai's Chat Bot",
};

const flow = {
    start: {
        message: "What is your age?",
        path: "age"
    },
    age: {
        message: (params) => `I see you are ${params.userInput}! What is your favorite color?`,
        path: "color"
    },
    color: {
        message: (params) => `Nice! ${params.userInput} is a great color. What is your favorite hobby?`,
        path: "hobby"
    },
};

const MyChatBot = () => {
    return (
        <div>
            <ChatBot flow={flow} name="Farirai" header={header} />
        </div>
    );
};

export default MyChatBot;