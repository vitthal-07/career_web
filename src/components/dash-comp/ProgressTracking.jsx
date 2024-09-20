import React from 'react';

export default function ProgressTracking() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-semibold">Progress Tracking</h2>
      <p className="mt-4">Track your overall progress:</p>
      <div className="w-full bg-gray-200 rounded-full h-4 mt-4">
        <div
          className="bg-green-600 h-4 rounded-full"
          style={{ width: '85%' }}
        ></div>
      </div>
      <p className="mt-2 text-sm">Overall Progress: 85%</p>
    </div>
  );
}
