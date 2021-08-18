import React, { useState } from "react";
import "./styles.css";

/* 
  HELP! Our to-do list is broken, 
  we need someone to debug and fix the following issues:

 1) The button to add a todo is broken
 2) When you add a todo, it replaces all the rest of them
 3) The remove todo buttons are broken
 4) The input field does not clear after a todo is submitted
 5) The todo list should not have duplicates,
    fix the add todo functionality to not allow duplicate entries.
*/

const ToDoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([
    "Take out trash",
    "Cook pot roast",
    "Finish homework"
  ]);

  const addTodo = (todo) => {
    setTodoList([...todoList, inputValue]);
    setInputValue("");
  };

  const removeTodo = (idx) => {
    let updatedTodoList = [...todoList];
    updatedTodoList.splice(idx, 1);
    setTodoList(updatedTodoList);
  };

  return (
    <div className="todo-list">
      {todoList.map((todo, idx) => (
        <div className="todo">
          {todo}
          <button onClick={() => removeTodo(idx)}>x</button>
        </div>
      ))}
      <div>
        <input
          type="text"
          value={inputValue}
          placeholder="Make a new todo!"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addTodo}>+</button>
      </div>
    </div>
  );
};

export default ToDoList;
