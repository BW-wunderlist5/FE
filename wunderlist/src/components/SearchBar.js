import React, { useContext } from "react";

import { TodosContext } from "../contexts/TodosContext";

// import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(0),
//       width: 250
//       // height: 50
//     }
//   },
//   textField: {
//     height: "50px"
//   }
// }));

const SearchBar = () => {
  // const classes = useStyles();

  const { handleSearchChange, searchItems } = useContext(TodosContext);

  return (
    <div className="search-container">
      <form>
        <TextField
          label="search"
          type="text"
          variant="outlined"
          value={searchItems}
          onChange={handleSearchChange}
        />
        {/* <span>
          <i class="fas fa-search"></i>
        </span> */}
      </form>
    </div>
  );
};

export default SearchBar;
