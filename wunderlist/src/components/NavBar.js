import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <nav className="nav-bar">
      <div className="logo-container">
        <h3 className="logo">
          <span className="logo-span">
            {" "}
            <i class="fas fa-wave-square"></i>
            {/* <FontAwesomeIcon icon={faWaveSquare} /> */}
          </span>{" "}
          LOGO HERE{" "}
        </h3>
      </div>
      <div className="username">{user.email}</div>

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
        <NavLink to="/">
          <span className="icon-span">
            <i class="fas fa-sign-out-alt"></i>
            {/* <FontAwesomeIcon icon={faSignOutAlt} /> */}
          </span>
          Log Out
        </NavLink>
        <NavLink to="/help">
          <span className="icon-span">
            <i class="fas fa-questiong-circle"></i>
            {/* <FontAwesomeIcon icon={faQuestionCircle} /> */}
          </span>
          Help
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
