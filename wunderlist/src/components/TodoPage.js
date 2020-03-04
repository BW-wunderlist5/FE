import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Todo from "./Todo";
import TodoList from "./TodoList";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import { TodosContext } from "../contexts/TodosContext";
import { UserContext } from "../contexts/UserContext";
import Paper from "@material-ui/core/Paper";
// import { useLocalStorage } from "../hooks/useLocalStorage";

//will act as main state holder for component tree

export default function TodoPage() {
  const [user, setUser] = useState([]);
  const [searchItems, setSearchItems] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [todo, setTodo] = useState({
    items: [],
    id: Date.now(),
    item: "",
    editItem: false,
    date: null
  });

  const fetchUser = () => {
    axiosWithAuth()
      .get(`users/3`)
      .then((res) => {
        // console.log(res);
        setUser(res.data.data);
        // localStorage.setItem("user", res.data.token);
      })
      .catch((err) => console.log(err));
  };
  // console.log(user);

  useEffect(() => {
    fetchUser();
  }, []);

  const handleChange = (e) => {
    setTodo({
      ...todo,
      item: e.target.value
    });
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSearchChange = (e) => {
    setSearchItems(e.target.value);
  };

  const handleSearch = () => {
    let filteredTodos = todo.items.filter((item) =>
      item.title.includes(searchItems)
    );
    setTodo({
      items: filteredTodos
    });
  };

  let filteredTodos = todo.items.filter((item) =>
    item.title.includes(searchItems)
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      title: todo.item,
      time: todo.date
    };

    setTodo({
      items: [...todo.items, newItem],
      item: "",
      id: Date.now(),
      editItem: false,
      date: null
    });
  };

  const clearList = () => {
    setTodo({
      items: []
    });
  };

  const handleDelete = (id) => {
    const filteredItems = todo.items.filter((item) => item.id !== id);
    setTodo({
      items: filteredItems,
      item: ""
    });
  };

  const handleEdit = (id) => {
    const filteredItems = todo.items.filter((item) => item.id !== id);
    const selectedItem = todo.items.find((item) => item.id === id);

    setTodo({
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id: id
    });
  };

  return (
    <div className="Todo">
      <TodosContext.Provider
        value={{
          todo,
          handleChange,
          handleDelete,
          handleSubmit,
          clearList,
          handleEdit,
          handleSearchChange,
          searchItems,
          handleSearch,
          filteredTodos,
          handleDateChange,
          selectedDate
        }}
      >
        <UserContext.Provider value={{ user }}>
          {/* <div > */}
          <NavBar />
          <h1>Your Todo Page</h1>
          <div className="search-container">
            <SearchBar />
          </div>
          <Paper className="todo-container">
            <h4>Enter Todo</h4>
            <Todo />
            <TodoList />
          </Paper>
          {/* </div> */}
        </UserContext.Provider>
      </TodosContext.Provider>
    </div>
  );
}
