import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Todo from "./Todo";
import TodoList from "./TodoList";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import { TodosContext } from "../contexts/TodosContext";
import { UserContext } from "../contexts/UserContext";
import Paper from "@material-ui/core/Paper";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useDarkMode } from "../hooks/DarkMode";
import { useParams } from "react-router-dom";

//will act as main state holder for component tree
const initialValues = {
  id: Date.now(),
  name: ""
};

export default function TodoPage(props) {
  const [user, setUser] = useState([]);
  const [searchItems, setSearchItems] = useState("");
  const [darkMode, setDarkMode] = useDarkMode(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [newItem, setNewItem] = useState(initialValues);

  // const { id } = props.match.params;
  const { id } = useParams();
  // console.log("console for params", id);

  const toggleMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  const [todo, setTodo] = useState({
    items: [],
    id: null,
    name: "",
    editItem: false,
    date: selectedDate
  });

  const fetchUser = () => {
    axiosWithAuth()
      .get(`users/${id}`)
      .then((res) => {
        console.log("response for single user request", res);
        console.log("response for single id", res.data.id);
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  };
  console.log(user);

  const getTasks = () => {
    axiosWithAuth()
      .get("tasks")
      .then((res) => {
        console.log("tasks response from todopage: ", res);
        let filteredTodos = res.data.filter((item) =>
          item.name.includes(searchItems)
        );
        console.log("console of filtered todos from axios", filteredTodos);
        setTodo({
          items: filteredTodos
        });
        // setTodo({
        //   items: res.data
        // });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchUser();
    getTasks();
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

  // const handleSearch = () => {
  //   let filteredTodos = todo.items.filter((item) =>
  //     item.title.includes(searchItems)
  //   );
  //   setTodo({
  //     items: filteredTodos
  //   });
  // };

  // let filteredTodos = todo.items.filter((item) =>
  //   item.title.includes(searchItems)
  // );

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("tasks/add", newItem)
      .then((res) => {
        console.log("post response todoPage: ", res);
        const newItem = {
          id: Date.now(),
          name: todo.name
        };
        setNewItem({
          items: [...todo.items, newItem],
          name: "",
          id: null
        });
      })
      .catch((err) => console.log(err));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const newItem = {
  //     id: Date.now(),
  //     name: todo.item,
  //     time: selectedDate
  //   };
  //   console.log("selectedDate newItem func: ", selectedDate);

  //   setTodo({
  //     items: [...todo.items, newItem],
  //     item: "",
  //     id: null,
  //     editItem: false,
  //     date: null
  //   });
  // };

  const clearList = () => {
    setTodo({
      items: []
    });
  };

  const handleDelete = (id) => {
    axiosWithAuth()
      .delete(`tasks/${id}`)
      .then((res) => {
        console.log("delete response from todopage: ", res);
        const filteredItems = todo.items.filter((item) => item.id !== id);
        setTodo({
          items: filteredItems,
          item: ""
        });
      })
      .catch((err) => console.log(err));
  };

  const handleEdit = (id) => {
    axiosWithAuth()
      .put(`/tasks/${id}`)
      .then((res) => {
        console.log("put response for todopage: ", res);

        const filteredItems = todo.items.filter((item) => item.id !== id);
        const selectedItem = todo.items.find((item) => item.id === id);

        setTodo({
          items: filteredItems,
          name: selectedItem.name,
          editItem: true,
          id: id
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="Todo">
      <TodosContext.Provider
        value={{
          todo,
          setTodo,
          handleChange,
          handleDelete,
          handleSubmit,
          clearList,
          handleEdit,
          handleSearchChange,
          searchItems,
          // handleSearch,
          //filteredTodos,
          handleDateChange,
          selectedDate,
          darkMode,
          toggleMode
        }}
      >
        <UserContext.Provider value={{ user }}>
          <NavBar />
          <h1 className="main-header">Your Todo Page</h1>
          <div className="search-container">
            <SearchBar />
          </div>
          <Paper
            style={
              darkMode
                ? { backgroundColor: "rgb(83, 83, 83)", color: "white" }
                : { backgroundColor: "white" }
            }
            className="todo-container"
          >
            <h4>Enter Todo</h4>
            <Todo />
            <TodoList />
          </Paper>
        </UserContext.Provider>
      </TodosContext.Provider>
    </div>
  );
}
