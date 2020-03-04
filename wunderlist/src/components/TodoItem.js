import React from "react";
import Button from "@material-ui/core/Button";

function TodoItem(props) {
  // console.log("console.log props for TodoItem component: ", props);
  return (
    <li>
      <div className="list-items">
        {/* <h6 className="todo-time"> {props.time} </h6> */}
        <div className="todo-icon-container">
          <div className="todo-icon-container-title">
            <h6 className="todo-title"> {props.title} </h6>
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
