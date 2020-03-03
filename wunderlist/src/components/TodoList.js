import React, { useContext, useEffect } from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "../contexts/TodosContext";

function TodoList() {
  const list = useContext(TodosContext);
  console.log("console log for context, list: ", list);

  // const results = list.items.filter((item) => item.includes(searchItems));
  // let filteredTodos = list.todo.items;

  useEffect(() => {
    list.handleSearch();
  }, [list.searchItems]);

  return (
    <ul className="todo-ul">
      {list.todo.items.map((item) => {
        return (
          <TodoItem
            key={item.id}
            {...item}
            handleDelete={() => list.handleDelete(item.id)}
            handleEdit={() => list.handleEdit(item.id)}
          />
        );
      })}

      <button onClick={list.clearList} type="button" className="clear-list-btn">
        Clear Todos
      </button>
    </ul>
  );
}
export default TodoList;
