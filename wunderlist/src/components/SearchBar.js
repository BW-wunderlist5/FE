import React, { useState, useContext, useEffect } from "react";
import { TodosContext } from "../contexts/TodosContext";

const SearchBar = () => {
  const { handleSearchChange, searchItems } = useContext(TodosContext);

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
