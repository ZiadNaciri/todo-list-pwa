import React, { useState, useEffect } from "react";
import { BiWifi, BiWifiOff } from 'react-icons/bi';
import "../App.css";

function NetworkStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [offlineAt, setOfflineAt] = useState(null);
  useEffect(() => {
    function handleOnlineStatusChange() {
      if (navigator.onLine) {
        setIsOnline(true);
        setOfflineAt(null);
      } else {
        setIsOnline(false);
        setOfflineAt(new Date());

        // Show push notification
        new Notification('Internet connection lost !!', {
          body: 'You are now offline!'
        });
      }
    }
        
    window.addEventListener("online", handleOnlineStatusChange);
    window.addEventListener("offline", handleOnlineStatusChange);

    return () => {
      window.removeEventListener("online", handleOnlineStatusChange);
      window.removeEventListener("offline", handleOnlineStatusChange);
    };
  }, []);

  if (isOnline) {
    return (
      <div style={{ color:'green', fontWeight: 'bold'}}>
        <BiWifi /> You are online.
      </div>
    );
  }

  return (
    <div style={{ color:'red', fontWeight: 'bold'}}>
      <BiWifiOff /> You have been offline
      since {new Date(offlineAt).toLocaleString()}.
    </div>
  );
}

export default NetworkStatus;
