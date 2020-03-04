import React, { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";
import DateComponent from "./DateComponent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function Todo() {
  const { todo, handleChange, handleSubmit } = useContext(TodosContext);

  console.log("log Todo context from Todo.js", todo);

  return (
    <div className="todo-card">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <TextField
            type="text"
            className="form-input"
            placeholder="add a todo"
            value={todo.item}
            onChange={handleChange}
          />
          <DateComponent />

          <Button
            className={todo.editItem ? "btn edit" : "btn add"}
            type="submit"
          >
            {" "}
            {todo.editItem ? "edit todo" : "add todo"}{" "}
          </Button>
        </div>
      </form>
    </div>
  );
}
export default Todo;
