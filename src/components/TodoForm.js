import React, { useState, useEffect, useRef } from "react";
import { nanoid } from "nanoid";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: nanoid(),
      text: input,
    });
    setInput("");
  };
  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
          {" "}
          <input
            type="text"
            className="todo-input edit"
            placeholder="Update todo"
            name="text"
            ref={inputRef}
            value={input}
            onChange={handleChange}
          />
          <button className="todo-button edit">Update</button>{" "}
        </>
      ) : (
        <>
          <input
            className="todo-input"
            type="text"
            placeholder="Add a todo"
            name="text"
            ref={inputRef}
            value={input}
            onChange={handleChange}
          />
          <button className="todo-button">Add todo</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
