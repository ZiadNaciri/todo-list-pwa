import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import NetworkStatus from "./components/NetworkStatus";

function App() {
  return (
    
    <div className="todo-app">
      <NetworkStatus />
      <TodoList />
    </div>
  );
}

export default App;
