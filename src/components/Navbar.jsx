// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-10">
      <div className="container mx-auto flex items-center justify-between h-14 px-4 lg:px-6">
        <div className="text-xl font-bold">Career Compass</div>
        <nav className="flex gap-4">
          <Link className="hover:underline" to="/">Home</Link>
          <Link className="hover:underline" to="/tests">Tests</Link>
          <Link className="hover:underline" to="/pathways">Pathways</Link>
          <Link className="hover:underline" to="/chat">Buddy</Link>
          {/* <Link className="hover:underline" to="/resources">Resources</Link> */}
          {/* <Link className="hover:underline" to="/tools">Tools</Link> */}
          <Link className="hover:underline" to="/mentor">Mentorship</Link>
          {/* <Link className="hover:underline" to="/sign-in">Sign In</Link> */}
          <Link className="hover:underline" to="/dashboard"><img
            src="https://avatar.iran.liara.run/public"
            alt="User Profile"
            className="w-10 h-10 rounded-full"
          /></Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
