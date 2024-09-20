import React, { useState } from 'react';

export default function Topbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <div className="relative">
        <button
          className="flex items-center space-x-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src="https://avatar.iran.liara.run/public"
            alt="User Profile"
            className="w-10 h-10 rounded-full"
          />
          <span>Pravin</span>
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md py-2">
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">Profile</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">Settings</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">Logout</a>
          </div>
        )}
      </div>
    </header>
  );
}
