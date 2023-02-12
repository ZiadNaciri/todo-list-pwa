import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const date = new Date();
    todo.date = date;

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    //console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
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
    setTodos((prev) =>
      prev.map((item) => {
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
            updatedTodo.text += " (updated)";
          }

          // Return the updated todo item
          return updatedTodo;
        }

        // Return the original todo item if it was not updated
        return item;
      })
    );
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

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
