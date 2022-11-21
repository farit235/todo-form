import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "../Header/Header";
import InputTodo from "../InputTodo/Input";
import TodoList from "../TodoList/TodoList";

const TodoContainer = () => {
  function getInitialTodos() {
    const temp = localStorage.getItem("todos");
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }
  const [todos, setTodos] = useState(getInitialTodos());

  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const delTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      })
    );
  };

  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem("todos", temp);
  }, [todos]);
  return (
    <>
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProps={addTodoItem} />
          <TodoList
            todos={todos}
            handleChangeProps={handleChange}
            deleteTodoProps={delTodo}
            setUpdate={setUpdate}
          />
        </div>
      </div>
    </>
  );
};

export default TodoContainer;
