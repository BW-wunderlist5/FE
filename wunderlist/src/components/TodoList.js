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
    clearList
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

      <button onClick={clearList} type="button" className="clear-list-btn">
        Clear Todos
      </button>
    </ul>
  );
}
export default TodoList;
