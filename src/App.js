import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import NetworkStatus from "./components/NetworkStatus";
import { ToastContainer } from "react-toastify";

import Notification from "./components/Notification";

function App() {
  return (
    <div >
      <ToastContainer />
      <Notification />

      <div className="todo-app">
        <NetworkStatus />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
