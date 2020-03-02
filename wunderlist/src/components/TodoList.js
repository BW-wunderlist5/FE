import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ items, clearList, handleDelete, handleEdit }) {
  return (
    <ul className="todo-ul">
      <h3>Todo List</h3>

      {items.map((item) => {
        return (
          <TodoItem
            key={item.id}
            handleDelete={() => handleDelete(item.id)}
            handleEdit={() => handleEdit(item.id)}
            title={item.title}
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
