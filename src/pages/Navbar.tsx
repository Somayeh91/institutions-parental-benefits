import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="navbar fixed top-0 left-0 right-0 z-50 bg-base-100/80 backdrop-blur-md shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Parental Benefits for Physics Graduate Students
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/data">Data</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
