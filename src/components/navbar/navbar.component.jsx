import React from "react";
import { Link } from "react-router-dom";

import "./navbar.styles.scss";

const Navbar = () => (
  <div className="container-fluid page">
    <div className="nav desktop">
      <Link className="btn btn-dark newBtn" to="/">
        Home
      </Link>
      <Link className="btn btn-dark newBtn" to="/awc">
        AWC
      </Link>
      <Link className="btn btn-dark newBtn" to="/stats">
        Stats
      </Link>
      <Link className="btn btn-dark newBtn" to="/kusogaki">
        Kusogaki Crew
      </Link>
    </div>

    <div className="nav mobile">
      <Link className="btn-sm btn-dark newBtn" to="/">
        Home
      </Link>
      <Link className="btn-sm btn-dark newBtn" to="/awc">
        AWC
      </Link>
      <Link className="btn-sm btn-dark newBtn" to="/stats">
        Stats
      </Link>
      <Link className="btn-sm btn-dark newBtn" to="/kusogaki">
        Kusogaki Crew
      </Link>
    </div>
  </div>
);

export default Navbar;
