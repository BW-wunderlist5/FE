import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Todo from "./Todo";
import TodoList from "./TodoList";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import { TodosContext } from "../contexts/TodosContext";
import { UserContext } from "../contexts/UserContext";
import Paper from "@material-ui/core/Paper";
//import { useLocalStorage } from "../hooks/useLocalStorage";
import { useDarkMode } from "../hooks/DarkMode";
import { useParams } from "react-router-dom";

//will act as main state holder for component tree
const initialValues = {
  id: Date.now(),
  name: ""
};

export default function TodoPage(props) {
  const [user, setUser] = useState([]);
  //const [searchItems, setSearchItems] = useState("");
  //const [darkMode, setDarkMode] = useDarkMode(false);
  //const [selectedDate, setSelectedDate] = useState(null);
  // const [newItem, setNewItem] = useState(initialValues);

  const [todos, setTodos] = useState([]);

  const [todo, setTodo] = useState({
    name: ""
  });

  // const [todoToEdit, setTodoToEdit] = useState({
  //   name: "",
  //   editing: false
  // });
  const [editing, setEditing] = useState(false);

  const { id } = useParams();

  // const toggleMode = (e) => {
  //   e.preventDefault();
  //   setDarkMode(!darkMode);
  // };

  const fetchUser = () => {
    axiosWithAuth()
      .get(`users/${id}`)
      .then((res) => {
        //console.log("response for single user request", res);
        // console.log("response for single id", res.data.id);
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  };

  const getTasks = () => {
    axiosWithAuth()
      .get("tasks")
      .then((res) => {
        console.log("tasks response from todopage: ", res.data);
        // let filteredTodos = res.data.filter((item) =>
        //   item.name.includes(searchItems)
        // );
        // console.log("console of filtered todos from axios", filteredTodos);
        setTodos(res.data);
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
      name: e.target.value
    });
  };

  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  // };

  // const handleSearchChange = (e) => {
  //   setSearchItems(e.target.value);
  // };

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

  const handleSubmit = () => {
    // e.preventDefault();
    console.log("post todo:", todo);
    axiosWithAuth()
      .post("tasks/add", todo)
      .then((res) => {
        console.log("post response todoPage: ", res);
        getTasks();
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

  const handleDelete = (id) => {
    axiosWithAuth()
      .delete(`tasks/${id}`)
      .then((res) => {
        getTasks();
        // console.log("delete response from todopage: ", res);
      })
      .catch((err) => console.log(err));
  };

  const handleEdit = (id) => {
    console.log("editing//////////////////");
    axiosWithAuth()
      .put(`/tasks/${id}`, todo)
      .then((res) => {
        console.log("edit res", res);
        getTasks();

        //  console.log("put response for todopage: ", res);

        // const filteredItems = todo.items.filter((item) => item.id !== id);
        // const selectedItem = todo.items.find((item) => item.id === id);

        // setTodo({
        //   items: filteredItems,
        //   name: selectedItem.name,
        //   editItem: true,
        //   id: id
        // });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="Todo">
      <TodosContext.Provider
        value={{
          todo,
          setTodo,
          todos,
          handleChange,
          handleDelete,
          handleSubmit,
          handleEdit
          //handleSearchChange,
          //searchItems,
          // handleSearch,
          //filteredTodos,
          //  handleDateChange,
          // selectedDate,
          // darkMode,
          // toggleMode
        }}
      >
        <UserContext.Provider value={{ user }}>
          <NavBar />
          <h1 className="main-header">Your Todo Page</h1>
          <div className="search-container">
            <SearchBar />
          </div>
          <Paper
            // style={
            //   darkMode
            //     ? { backgroundColor: "rgb(83, 83, 83)", color: "white" }
            //     : { backgroundColor: "white" }
            // }
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
