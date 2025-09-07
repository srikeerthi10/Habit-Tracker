import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const stored = JSON.parse(localStorage.getItem("user"));
    if (stored && stored.username === username && stored.password === password) {
      setUser(username);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <p>No account? <Link to="/signup">Signup</Link></p>
    </div>
  );
}

export default Login;
