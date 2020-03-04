import React, { useContext, useEffect } from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "../contexts/TodosContext";

function TodoList() {
  // const list = useContext(TodosContext);
  const {
    handleDelete,
    handleEdit,
    filteredTodos,
    handleSearch,
    clearList,
    darkMode
  } = useContext(TodosContext);
  // console.log("console log for context, list: ", list);

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <ul className="todo-ul">
      {filteredTodos.map((item) => {
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
