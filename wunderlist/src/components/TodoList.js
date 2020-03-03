import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "../contexts/TodosContext";

function TodoList() {
  const list = useContext(TodosContext);
  console.log("console log for context, value: ", list);
  return (
    <ul className="todo-ul">
      {/* <h3 className="todo-list-header">Todo List</h3> */}

      {list.todo.items.map((item) => {
        return (
          <TodoItem
            key={item.id}
            {...item}
            handleDelete={() => list.handleDelete(item.id)}
            handleEdit={() => list.handleEdit(item.id)}
            // title={list.todo.items.title}
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
