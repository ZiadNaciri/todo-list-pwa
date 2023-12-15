import React, { useState, useRef } from 'react';


function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault(); //prevent the browser from reload/refresh

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    }
    );
    setInput('');
    
  };

  return (
    
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Insert your todo here ...'
            value={input}
            onChange={handleChange}
            name='text'
            className='hvr-glow todo-input'
            ref={inputRef}
            required
          />
          <button onClick={handleSubmit} className='todo-button hvr-grow-shadow'>
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
