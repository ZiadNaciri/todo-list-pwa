import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import NetworkStatus from "./components/NetworkStatus";

import Notification from "./components/Notification";

function App() {
 
  

  return (
      
    <div className="todo-app"> 

      <NetworkStatus />
      <TodoList />
      <Notification />
    </div>
  );
}

export default App;
