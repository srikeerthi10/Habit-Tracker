let habits = [];
let loggedIn = false;
let currentUser = "";

// Show page dynamically
function showPage(page) {
  const app = document.getElementById("app");

  if (!loggedIn && (page === "dashboard" || page === "profile")) {
    showLogin();
    return;
  }

  if (page === "dashboard") {
    renderDashboard();
  } else if (page === "profile") {
    app.innerHTML = `
      <div class="container">
        <h2>Profile</h2>
        <p>Welcome, <b>${currentUser}</b></p>
        <p>Total Habits: ${habits.length}</p>
      </div>`;
  }
}

// Render dashboard
function renderDashboard() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <div class="container">
      <h2>Dashboard</h2>
      <p>Welcome, <b>${currentUser}</b></p>
      <p>Total Habits: ${habits.length}</p>
      <input type="text" id="habitInput" placeholder="Enter habit">
      <button class="add" onclick="addHabit()">Add</button>
      <ul id="habitList"></ul>
    </div>`;
  updateHabitList();
}

// Add habit
function addHabit() {
  const input = document.getElementById("habitInput");
  if (input.value.trim()) {
    habits.push(input.value);
    input.value = "";
    updateHabitList();
  }
}

// Edit habit
function editHabit(index) {
  const newHabit = prompt("Edit habit:", habits[index]);
  if (newHabit) {
    habits[index] = newHabit;
    updateHabitList();
  }
}

// Delete habit
function deleteHabit(index) {
  habits.splice(index, 1);
  updateHabitList();
}

// Update habit list
function updateHabitList() {
  const list = document.getElementById("habitList");
  list.innerHTML = "";
  habits.forEach((habit, i) => {
    list.innerHTML += `
      <li>
        ${habit}
        <div>
          <button class="edit" onclick="editHabit(${i})">Edit</button>
          <button class="delete" onclick="deleteHabit(${i})">Delete</button>
        </div>
      </li>`;
  });
}

// Signup page
function showSignup() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <div class="container">
      <h2>Signup</h2>
      <input type="text" id="signupUser" placeholder="Username"><br>
      <input type="password" id="signupPass" placeholder="Password"><br>
      <button onclick="signup()">Signup</button>
      <p>Already have an account? <a href="#" onclick="showLogin()">Login</a></p>
    </div>`;
}

// Login page
function showLogin() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <div class="container">
      <h2>Login</h2>
      <input type="text" id="loginUser" placeholder="Username"><br>
      <input type="password" id="loginPass" placeholder="Password"><br>
      <button onclick="login()">Login</button>
      <p>No account? <a href="#" onclick="showSignup()">Signup</a></p>
    </div>`;
}

// Signup
function signup() {
  const user = document.getElementById("signupUser").value;
  const pass = document.getElementById("signupPass").value;
  if (user && pass) {
    localStorage.setItem("user", JSON.stringify({ username: user, password: pass }));
    alert("Signup successful!");
    showLogin();
  } else {
    alert("Please fill all fields!");
  }
}

// Login
function login() {
  const user = document.getElementById("loginUser").value;
  const pass = document.getElementById("loginPass").value;
  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (storedUser && storedUser.username === user && storedUser.password === pass) {
    loggedIn = true;
    currentUser = user;
    alert("Login successful!");
    showPage("dashboard");
  } else {
    alert("Invalid credentials!");
  }
}

// Logout
function logout() {
  loggedIn = false;
  currentUser = "";
  habits = [];
  alert("Logged out!");
  showLogin();
}

// Show login first
showLogin();
