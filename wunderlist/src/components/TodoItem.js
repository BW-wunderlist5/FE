import React from "react";

function TodoItem(props) {
  console.log("console.log props for TodoItem component: ", props);
  return (
    <li>
      <div className="list-items">
        <h6 className="todo-title"> {props.title} </h6>
        <h6 className="todo-time"> {props.time} </h6>
        <div className="todo-icon-container">
          <span onClick={props.handleEdit}>
            <i class="fas fa-pen"></i>
          </span>
          <span onClick={props.handleDelete}>
            <i class="fas fa-trash"></i>
          </span>
        </div>
      </div>
    </li>
  );
}
export default TodoItem;
