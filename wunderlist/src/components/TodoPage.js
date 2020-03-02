import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Todo from "./Todo";
import TodoList from "./TodoList";
import NavBar from "./NavBar";
import { NavLink } from "react-router-dom";

//will act as main state holder for component tree

export default function TodoPage() {
  const [user, setUser] = useState([]);

  const [value, setValue] = useState({
    items: [],
    id: Date.now(),
    item: "",
    editItem: false
  });

  const fetchUser = () => {
    axiosWithAuth()
      .get(`users/2`)
      .then((res) => {
        console.log(res);
        setUser(res.data.data);
        // localStorage.setItem("token", res.data.token);
      })
      .catch((err) => console.log(err));
  };
  console.log(user);

  useEffect(() => {
    fetchUser();
  }, []);

  const handleChange = (e) => {
    setValue({
      ...value,
      item: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      title: value.item
    };

    setValue({
      items: [...value.items, newItem],
      item: "",
      id: Date.now(),
      editItem: false
    });
  };

  const clearList = () => {
    setValue({
      items: []
    });
  };

  const handleDelete = (id) => {
    const filteredItems = value.items.filter((item) => item.id !== id);
    setValue({
      items: filteredItems
    });
  };

  const handleEdit = (id) => {
    const filteredItems = value.items.filter((item) => item.id !== id);
    const selectedItem = value.items.find((item) => item.id === id);

    setValue({
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id: id
    });
  };

  return (
    <div>
      <NavBar user={user} />
      <h1>TodoPage</h1>
      {/* <h3> {user.email} </h3> */}

      <div className="todo-container">
        <h4>Enter Todo</h4>
        <Todo
          item={value.item}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          editItem={value.editItem}
        />
        <TodoList
          items={value.items}
          clearList={clearList}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  );
}
