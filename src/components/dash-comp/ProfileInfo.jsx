import React from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip'; // Corrected import

export default function ProfileInfo() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-semibold">Profile Information</h2>
      <div className="mt-4" data-tooltip-id="profileTooltip" data-tooltip-content="View and update your profile details">
        <img
          src="https://avatar.iran.liara.run/public"
          alt="Profile"
          className="w-24 h-24 rounded-full"
        />
        <ul className="mt-4 space-y-2">
          <li>Email: user@gmail.com</li>
          <li>Date of Birth: Jan 1, 2003</li>
          <li>College: Raisoni University</li>
          <li>Stream: Computer Science</li>
          <li>Pathway Chosen: Software Development</li>
        </ul>
      </div>
      {/* Initialize Tooltip */}
      <ReactTooltip id="profileTooltip" place="top" />
    </div>
  );
}
