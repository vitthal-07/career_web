import React from 'react';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 h-screen p-4">
      <ul className="space-y-4">
        <li>
          <a href="#" className="text-white font-medium hover:bg-gray-700 p-2 rounded block">
            Overview
          </a>
        </li>
        <li>
          <a href="#" className="text-white font-medium hover:bg-gray-700 p-2 rounded block">
            Reports
          </a>
        </li>
        <li>
          <a href="#" className="text-white font-medium hover:bg-gray-700 p-2 rounded block">
            Analytics
          </a>
        </li>
        <li>
          <a href="#" className="text-white font-medium hover:bg-gray-700 p-2 rounded block">
            Settings
          </a>
        </li>
      </ul>
    </aside>
  );
}
