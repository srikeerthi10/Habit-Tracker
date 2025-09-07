import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [user, setUser] = useState(null);
  const [habits, setHabits] = useState([]);

  return (
    <div>
      {user && <Navbar setUser={setUser} />}
      <Routes>
        <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={user ? <Dashboard habits={habits} setHabits={setHabits} user={user} /> : <Navigate to="/" />} />
        <Route path="/profile" element={user ? <Profile user={user} habits={habits} /> : <Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
