import React, { useState, useEffect, useRef } from 'react';
import Ring from '../../assets/ring.mp3';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const audioRef = useRef(null);

  const showNotification = () => {
    const newNotification = {
      id: Date.now(),
      title: 'New Task Assigned',
      message: 'You have a new task assigned. Please review and take action.',
    };
    setNotifications((prevNotifications) => [newNotification, ...prevNotifications]);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  useEffect(() => {
    const notificationInterval = setInterval(() => {
      showNotification();
    }, 3000);

    return () => {
      clearInterval(notificationInterval);
    };
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
      <ul className="text-gray-700">
        {notifications.map((notification) => (
          <li key={notification.id} className="mb-2">
            <strong className="text-blue-500">{notification.title}</strong>: {notification.message}
          </li>
        ))}
      </ul>
      <audio ref={audioRef} src={Ring} preload="auto" />
    </div>
  );
};

export default Notifications;
