import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm flex justify-between">
      <div className="flex-none">
        <Link to="/" className="btn btn-ghost text-xl">
          Physics
        </Link>
      </div>
      <div className="flex-1 flex justify-center">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/visualization">Visualizations</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
      <div className="flex-none">{/* Empty div for balance */}</div>
    </div>
  );
};

export default Navbar;
