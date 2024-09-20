import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Ensure this points to the correct file for your App component
import './index.css'; // Tailwind CSS

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
