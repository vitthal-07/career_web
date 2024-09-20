// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import SignIn from './components/SignIn'; // Fixed import path
import Pathways from './components/Pathways';
import Chat from './components/Chat';
import Resource from './components/resources';
import Test from './components/Test';
import Tools from './components/tools';
import Dashboard from './components/Dashboard';
import Mentorship from './components/Mentorship';
import Chatbot from './components/chat-comp/Chatbot';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path='/pathways' element={<Pathways/>} />
        <Route path='/chat' element={<Chat/>} />
        <Route path='/resources' element={<Resource/>} />
        <Route path='/tests' element={<Test/>} />
        <Route path='/tools' element={<Tools/>} />
        <Route path='/mentor' element={<Mentorship/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
      <Chatbot />
      <Footer />
    </Router>
  );
}

export default App;
