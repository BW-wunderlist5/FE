import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { format } from "date-fns";

function TodoItem(props) {
  // console.log("fucking log you stupid fuck : ", props);

  const editTodo = () => {};

  return (
    <li>
      <div className="list-items">
        {/* <h6 className="todo-time"> {props.time} </h6> */}
        <div className="todo-icon-container">
          <div className="todo-icon-container-title">
            <h6 className="todo-title"> {props.name} </h6>
            {props.time ? (
              <span>Due Date: {format(props.time, "MM/dd/yyyy")} </span>
            ) : (
              "Just do it!"
            )}
          </div>
          <div className="todo-icons">
            <Button
              variant="contained"
              color="primary"
              onClick={props.handleEdit}
            >
              Edit
            </Button>

            <Button
              variant="contained"
              color="secondary"
              onClick={props.handleDelete}
            >
              Complete
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
}
export default TodoItem;
