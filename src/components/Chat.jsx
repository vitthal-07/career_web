import React, { useState } from 'react';
import ChatWidget from './chat-comp/Chatbot';
import ChatWindow from './chat-comp/ChatWindow';

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = (text) => {
    const userMessage = { sender: 'user', text };
    setMessages([...messages, userMessage]);

    // Simulate an AI response (Here you would implement actual AI integration)
    setTimeout(() => {
      const aiMessage = { sender: 'ai', text: 'This is Buddy’s response to your query.' };
      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);
  };

  return (
    <div>
      <div className="chat-container p-4">
        <h1>Chat with Buddy</h1>
      <ChatWidget toggleChat={toggleChat} />
      <ChatWindow isOpen={isOpen} messages={messages} sendMessage={sendMessage} />
     </div>
    </div>
  );
};

export default Chat;
