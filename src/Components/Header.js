import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="app">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/upcoming">Upcoming</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
