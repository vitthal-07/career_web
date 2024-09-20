import React from 'react';

const MessageBubble = ({ message }) => {
  const isAI = message.sender === 'ai';
  const bubbleStyle = isAI
    ? 'bg-blue-500 text-white self-start'
    : 'bg-gray-200 text-gray-900 self-end';

  return (
    <div className={`p-2 rounded-lg mb-2 max-w-xs ${bubbleStyle}`}>
      {message.text}
    </div>
  );
};

export default MessageBubble;
