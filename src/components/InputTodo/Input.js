import React from "react";
import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import "./Input.css";

function Input(props) {
  const [input, setInput] = useState({
    title: "",
  });
  const { addTodoProps } = props;
  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.title.trim()) {
      addTodoProps(input.title);
      setInput({
        title: "",
      });
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={input.title}
        onChange={onChange}
        name="title"
      />
      <button type="button" className="input-submit">
        <FaPlusCircle className="favic" />
      </button>
    </form>
  );
}

export default Input;
