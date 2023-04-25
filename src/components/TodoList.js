import React, { useState ,useEffect} from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
//Notification firebasee


function TodoList() {
  //const [todos, setTodos] = useState([]);
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //Add todo method
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    todo.date = new Date();
    
    //const newTodos = [...todos,todo];
    //setTodos(newTodos);
    setTodos(prevTodos => [...prevTodos,todo]);
    //console.log(...todos);
  };

  // Update todo method
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      ///^\s*$/ is the regex for empty string or string with only spaces
      return;
    }

    const date = new Date();
    // Use the getHours and getMinutes methods to get the current hour and minute
    const hour = date.getHours();
    const minute = date.getMinutes();
    // Use the toString method to convert the hour and minute to a string in the format "HH:MM"
    const time =
      hour.toString().padStart(2, "0") +
      ":" +
      minute.toString().padStart(2, "0");
    // Use the map method to iterate over the todo items in the todo list
    // and update the todo item with the specified id
    
    setTodos(prevTodos =>
    prevTodos.map((item) => {
    //setTodos((prev) =>
      //prev.map((item) => {
        if (item.id === todoId) {
          // Update the todo item with the new values in the newValue argument
          // and set the date and time properties to the current date and time
          let updatedTodo = {
            ...item,
            ...newValue,
            date: date,
            time: time,
          };
          // If the text of the todo item has been updated,
          // add a message that says that the todo item has been updated
          if (item.text !== newValue.text) {
            updatedTodo.text += " ( Updated )";
          }
          // Return the updated todo item
          return updatedTodo;
        }
        // Return the original todo item if it was not updated
        return item;
      })
    );
  };

  //remove todo method
  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removedArr);
  };

  //Completed todo method
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setShowNotification(true);
    setTodos(updatedTodos);
  };
  //notifications use effect
  useEffect(() => {
    if (showNotification) {
      setTimeout(() => setShowNotification(false), 3000);
    }
  }, [showNotification]);


  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;
