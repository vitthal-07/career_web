// src/components/Chatbot.jsx
import React from 'react';
import { AiOutlineRobot } from 'react-icons/ai'; 

const Chatbot= ({ toggleChat }) => {
  return (
    <div className="fixed bottom-4 right-4">
      
      <button
        onClick={toggleChat}
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-500 transition-all flex items-center"
      >
        <AiOutlineRobot size={24} />
      </button>
    </div>
  );
};


export default Chatbot;
