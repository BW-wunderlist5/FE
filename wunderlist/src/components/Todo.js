import React, { useContext, useState } from "react";
import { TodosContext } from "../contexts/TodosContext";

function Todo() {
  const { todo, handleChange, handleSubmit } = useContext(TodosContext);

  console.log("todo console from todo.js", todo);

  return (
    <div className="todo-card">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            className="form-input"
            placeholder="add a todo"
            value={todo.item}
            onChange={handleChange}
          />

          <button
            className={todo.editItem ? "btn edit" : "btn add"}
            type="submit"
          >
            {" "}
            {todo.editItem ? "edit todo" : "add todo"}{" "}
          </button>
        </div>
      </form>
    </div>
  );
}
export default Todo;
