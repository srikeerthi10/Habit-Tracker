import React from "react";

function Profile({ user, habits }) {
  return (
    <div className="container">
      <h2>Profile</h2>
      <p>Username: <b>{user}</b></p>
      <p>Total Habits: {habits.length}</p>
    </div>
  );
}

export default Profile;
