import React, { useState, useContext, useEffect } from "react";
import { TodosContext } from "../contexts/TodosContext";

const SearchBar = () => {
  // const search = useContext(TodosContext);
  const { todo, handleSearchChange, searchItems } = useContext(TodosContext);
  console.log(handleSearchChange, "log from search bar");

  // const [searchItems, setSearchItems] = useState("");
  // const [searchResults, setSearchResults] = useState([todo.items]);

  // console.log("console search context: ", searchResults);
  // console.log("another log for this friggin search bar", todo.items);

  // const handleSearchChange = (e) => {
  //   setSearchItems(e.target.value);
  // };

  // useEffect(() => {
  //   const results = searchResults.filter((item) => item.includes(searchItems));

  //   setSearchResults(results);
  // }, [searchItems]);

  return (
    <div className="search-container">
      <form>
        <input
          type="text"
          placeholder="search..."
          value={searchItems}
          onChange={handleSearchChange}
        />
        <i class="fas fa-search"></i>
      </form>
    </div>
  );
};

export default SearchBar;
