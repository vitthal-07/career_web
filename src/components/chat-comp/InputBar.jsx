import React, { useState } from 'react';

const InputBar = ({ sendMessage }) => {
  const [text, setText] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (text.trim()) {
      sendMessage(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSend} className="flex items-center p-4 border-t">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 border border-gray-300 p-2 rounded-md mr-2"
        placeholder="Ask Buddy..."
      />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-500">
        Send
      </button>
    </form>
  );
};

export default InputBar;
