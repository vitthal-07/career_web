import React from 'react';
import MessageBubble from './MessageBubble';
import InputBar from './InputBar';

const ChatWindow = ({ isOpen, messages, sendMessage }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed bottom-0 right-0 w-80 h-96 bg-white border border-gray-300 shadow-lg rounded-lg flex flex-col">
      <div className="flex-1 p-4 overflow-y-scroll">
        {messages.map((msg, idx) => (
          <MessageBubble key={idx} message={msg} />
        ))}
      </div>
      <InputBar sendMessage={sendMessage} />
    </div>
  );
};

export default ChatWindow;
