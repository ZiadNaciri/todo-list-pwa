import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine,RiCheckboxBlankCircleLine,RiCheckboxCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";


const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div className={todo.isComplete ? "todo-row complete hvr-glow" : "todo-row hvr-glow"} key={index}>
    <div className="todo-text" onClick={() => completeTodo(todo.id)}>
    {todo.isComplete ? <RiCheckboxCircleLine className="completed-cursor hvr-grow-shadow" /> : <RiCheckboxBlankCircleLine className="completed-cursor hvr-grow-shadow" />}
    <span className="completed-cursor hvr-grow-shadow">{todo.text}</span>
   </div>
      {/* <span>
        {todo.date.toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}
      </span> */}
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete-icon  hvr-grow-shadow"
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon hvr-grow-shadow"
        />
      </div>
    </div>
  ));
};

export default Todo;
