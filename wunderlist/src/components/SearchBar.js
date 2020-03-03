import React, { useState, useContext, useEffect } from "react";
import { TodosContext } from "../contexts/TodosContext";

const SearchBar = () => {
  const [searchItems, setSearchItems] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const search = useContext(TodosContext);
  console.log("console search context: ", search);

  const handleSearchChange = (e) => {
    setSearchItems(e.target.value);
  };

  useEffect(() => {
    const results = search.todo.filter((item) =>
      item.toLowerCase().includes(searchItems)
    );
    setSearchResults(results);
  }, [searchItems]);

  // const handleSearch = (id) => {

  // }

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
