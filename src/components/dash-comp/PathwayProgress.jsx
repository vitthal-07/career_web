import React, { useState, useEffect } from 'react';

export default function PathwayProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress < 70 ? prevProgress + 1 : 70));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-semibold">Pathway Progress</h2>
      <p className="mt-4">Pathway: Software Development</p>
      <div className="w-full bg-gray-200 rounded-full h-4 mt-4">
        <div
          className="bg-blue-600 h-4 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="mt-2 text-sm">Progress: {progress}%</p>
    </div>
  );
}
