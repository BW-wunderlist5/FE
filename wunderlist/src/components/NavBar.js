import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange } from "@material-ui/core/colors";

import { UserContext } from "../contexts/UserContext";

import "./NavBar.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    width: "75px",
    height: "75px"
  }
}));

const NavBar = () => {
  const classes = useStyles();
  const { user } = useContext(UserContext);
  console.log("console log for user", user);

  const logOut = () => {
    window.localStorage.clear("token");
  };
  return (
    <nav className="nav-bar">
      <div className="logo-container">
        <h3 className="logo">
          <span className="logo-span">
            <i class="fas fa-wave-square"></i>
          </span>
          WunderList
        </h3>
      </div>
      <div className="avatar-container">
        <Avatar className={classes.orange}>OP</Avatar>
        {/* <img className="avatar" src={user.avatar} alt="User Avatar" /> */}
      </div>

      <div className="username">
        <p className="user-name"> {user.username}</p>
      </div>

      <div className="nav-links">
        <NavLink to="/">
          <span className="icon-span">
            <i class="fas fa-home"></i>
          </span>
          Home
        </NavLink>
        <NavLink to="/todos">
          <span className="icon-span">
            <i class="fas fa-list-alt"></i>
          </span>
          Todos
        </NavLink>
        <NavLink onClick={logOut} to="/">
          <span className="icon-span">
            <i class="fas fa-sign-out-alt"></i>
          </span>
          Log Out
        </NavLink>
        <NavLink to="/help">
          <span className="icon-span">
            <i class="fas fa-questiong-circle"></i>
          </span>
          Help
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
