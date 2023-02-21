import React, { useState, useEffect } from "react";
import { BiWifi, BiWifiOff } from "react-icons/bi";
import toast from "react-hot-toast";
import "../App.css";
//import Notification from "./Notification";

function NetworkStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [offlineAt, setOfflineAt] = useState(null);
  useEffect(() => {
    function handleOnlineStatusChange() {
      if (navigator.onLine) {
        setIsOnline(true);
        setOfflineAt(null);
        toast.success("You are back online!");
      } else {
        setIsOnline(false);
        setOfflineAt(new Date());

        // Show push notification
        /* new Notification("Internet connection lost !!", {
          body: "You are now offline!",
        }); */

        toast.error("You lost internet connection!");
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
      <div className="wifi-on">
        <BiWifi /> You are online.
      </div>
    );
  }

  return (
    <div className="wifi-off">
      <BiWifiOff /> You have been offline since{" "}
      {new Date(offlineAt).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      })}
    </div>
  );
}

export default NetworkStatus;
