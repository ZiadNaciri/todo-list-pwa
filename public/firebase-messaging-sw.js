importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");


// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyCfbfZKRFQhQvoYKIXB1-PIZv8CsNfuw2s",
  authDomain: "todo-list-pwa-c0b69.firebaseapp.com",
  projectId: "todo-list-pwa-c0b69",
  storageBucket: "todo-list-pwa-c0b69.appspot.com",
  messagingSenderId: "230061029433",
  appId: "1:230061029433:web:1476c62d35074d6edbf5e8",
  measurementId: "G-P88EZ1D9D4",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
