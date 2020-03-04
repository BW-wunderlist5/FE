import React, { useContext } from "react";

import { TodosContext } from "../contexts/TodosContext";

import TextField from "@material-ui/core/TextField";

const SearchBar = () => {
  const { handleSearchChange, searchItems } = useContext(TodosContext);

  return (
    <div className="search-container">
      {/* <form> */}
      <TextField
        label="search"
        className="search-bar"
        type="text"
        variant="outlined"
        value={searchItems}
        onChange={handleSearchChange}
      />
      {/* </form> */}
    </div>
  );
};

export default SearchBar;
