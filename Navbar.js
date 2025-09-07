import React from "react";
import { Link } from "react-router-dom";

function Navbar({ setUser }) {
  return (
    <nav>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/profile">Profile</Link>
      <button onClick={() => setUser(null)}>Logout</button>
    </nav>
  );
}

export default Navbar;
