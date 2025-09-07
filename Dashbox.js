import React, { useState } from "react";

function Dashboard({ habits, setHabits, user }) {
  const [habit, setHabit] = useState("");

  const addHabit = () => {
    if (habit.trim()) {
      setHabits([...habits, habit]);
      setHabit("");
    }
  };

  const editHabit = (i) => {
    const newHabit = prompt("Edit habit:", habits[i]);
    if (newHabit) {
      const updated = [...habits];
      updated[i] = newHabit;
      setHabits(updated);
    }
  };

  const deleteHabit = (i) => {
    setHabits(habits.filter((_, index) => index !== i));
  };

  return (
    <div className="container">
      <h2>Dashboard</h2>
      <p>Welcome, <b>{user}</b></p>
      <input value={habit} onChange={(e) => setHabit(e.target.value)} placeholder="Enter habit" />
      <button className="add" onClick={addHabit}>Add</button>
      <ul>
        {habits.map((h, i) => (
          <li key={i}>
            {h}
            <div>
              <button className="edit" onClick={() => editHabit(i)}>Edit</button>
              <button className="delete" onClick={() => deleteHabit(i)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
