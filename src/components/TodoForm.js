import React, { useState, useEffect, useRef } from 'react';


function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
  // Check if the app is running on a mobile device
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  // Only call the focus method if the app is not running on a mobile device
  if (!isMobile) {
    inputRef.current.focus();
  }
  });

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
  const isMobile = window.innerWidth < 768; // or any other value you consider appropriate


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
            autoFocus={!isMobile}
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
