import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import NetworkStatus from "./components/NetworkStatus";
import { ToastContainer } from "react-toastify";

import Notification from "./components/Notification";

function App() {
  return (
    <div >
      <ToastContainer position="top-center" />

      <div className="todo-app">
        <Notification />
        <NetworkStatus />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
