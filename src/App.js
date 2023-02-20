import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import NetworkStatus from "./components/NetworkStatus";

import { requestPermission } from "./firebase";

function App() {
  requestPermission();
  return (
    <div className="todo-app">
     
      <NetworkStatus />

      <TodoList />
    </div>
  );
}

export default App;
