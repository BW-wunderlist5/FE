import React, { useContext, useEffect } from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "../contexts/TodosContext";

function TodoList() {
  // const list = useContext(TodosContext);
  const {
    todo,
    setTodo,
    handleDelete,
    handleEdit,
    filteredTodos,
    handleSearch,
    clearList,
    darkMode
  } = useContext(TodosContext);
  console.log("todo from todolist : ", todo);

  // useEffect(() => {
  //   handleSearch();
  // }, []);

  return (
    <ul className="todo-ul">
      {todo.items &&
        todo.items.map((item) => {
          return (
            <TodoItem
              key={item.id}
              {...item}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            />
          );
        })}

      <button
        style={
          darkMode
            ? { backgroundColor: "rgb(90, 88, 88)", color: "white" }
            : { backgroundColor: "white" }
        }
        onClick={clearList}
        type="button"
        className="clear-list-btn"
      >
        Clear Todos
      </button>
    </ul>
  );
}
export default TodoList;
