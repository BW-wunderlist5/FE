import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { UserContext } from "../contexts/UserContext";

import "./NavBar.css";

const NavBar = () => {
  const { user } = useContext(UserContext);

  const logOut = () => {
    window.localStorage.clear("token");
  };
  return (
    <nav className="nav-bar">
      <div className="logo-container">
        <h3 className="logo">
          <span className="logo-span">
            <i class="fas fa-wave-square"></i>
          </span>{" "}
          LOGO HERE{" "}
        </h3>
      </div>
      <div className="avatar-container">
        <img className="avatar" src={user.avatar} alt="User Avatar" />
      </div>

      <div className="username">
        <p className="user-name"> {user.first_name}</p>
        <p> {user.email}</p>
      </div>

      {/* <img src={logo} alt="logo" /> */}
      <div className="nav-links">
        <NavLink to="/dashboard">
          <span className="icon-span">
            {/* <FontAwesomeIcon icon={faHome} /> */}
            <i class="fas fa-home"></i>
          </span>
          Home
        </NavLink>
        <NavLink to="/dashboard/todos">
          <span className="icon-span">
            <i class="fas fa-list-alt"></i>
            {/* <FontAwesomeIcon icon={faListAlt} /> */}
          </span>
          Todos
        </NavLink>
        {/* <NavLink to="/calendar">
            <span className="icon-span">
              <FontAwesomeIcon icon={faCalendarAlt} />
            </span>
            My Calendar
          </NavLink> */}
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
