import React, { useState, useEffect } from 'react';

export default function Notifications() {
  const [notifications, setNotifications] = useState([
    'New message from your mentor',
    'Upcoming assessment in 3 days',
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotifications((prev) => [
        ...prev,
        'You’ve earned a new badge!',
      ]);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-semibold">Notifications</h2>
      <ul className="mt-4 space-y-2">
        {notifications.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
}
