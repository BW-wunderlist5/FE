import React, { useContext, useState } from "react";
import { TodosContext } from "../contexts/TodosContext";

function Todo() {
  // { item, handleChange, handleSubmit, editItem }

  const { todo, item, setTodo, handleChange, handleSubmit } = useContext(
    TodosContext
  );

  console.log("todo console from todo.js", todo);

  console.log("Log for todoscontext in todo.js", TodosContext);

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const newItem = {
  //     id: Date.now(),
  //     title: todo.item
  //   };

  //   setTodo({
  //     items: [...todo.items, newItem],
  //     item: "",
  //     id: Date.now(),
  //     editItem: false
  //   });
  // };

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
