import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (username && password) {
      localStorage.setItem("user", JSON.stringify({ username, password }));
      alert("Signup successful!");
      navigate("/");
    } else {
      alert("Fill all fields");
    }
  };

  return (
    <div className="container">
      <h2>Signup</h2>
      <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Signup</button>
      <p>Already have an account? <Link to="/">Login</Link></p>
    </div>
  );
}

export default Signup;
