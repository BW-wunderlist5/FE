import React from "react";

import "react-datepicker/dist/react-datepicker.css";

function Todo({ item, handleChange, handleSubmit, editItem }) {
  return (
    <div className="todo-card">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            className="form-input"
            placeholder="add a todo"
            value={item}
            onChange={handleChange}
          />

          <button className={editItem ? "btn edit" : "btn add"} type="submit">
            {" "}
            {editItem ? "edit todo" : "add todo"}{" "}
          </button>
        </div>
      </form>
    </div>
  );
}
export default Todo;
