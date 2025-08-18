let habits = [
  { name: "Morning Jog", category: "Fitness", tags: "Health, Running" },
  { name: "Read Books", category: "Learning", tags: "Knowledge, Relax" },
  { name: "Drink Water", category: "Health", tags: "Wellness" }
];
const habitList = document.getElementById("habitList");
function createHabitCard(habit, index) {
  const div = document.createElement("div");
  div.className = "habit-card";
  div.innerHTML = `
    <h3>${habit.name}</h3>
    <p>Category: ${habit.category}</p>
    <p>Tags: ${habit.tags}</p>
    <button onclick="editHabit(${index})">Edit</button>
    <button onclick="deleteHabit(${index})">Delete</button>
  `;
  return div;
}
habits.forEach((habit, index) => {
  habitList.appendChild(createHabitCard(habit, index));
});
document.getElementById("habitForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("habitName").value;
  const category = document.getElementById("habitCategory").value;
  const tags = document.getElementById("habitTags").value;
  const newHabit = { name, category, tags };
  habits.push(newHabit);
  habitList.appendChild(createHabitCard(newHabit, habits.length - 1));
  this.reset();
});
function editHabit(index) {
  const habit = habits[index];
  const newName = prompt("Edit Habit Name:", habit.name);
  const newCategory = prompt("Edit Category:", habit.category);
  const newTags = prompt("Edit Tags:", habit.tags);
  if (newName) habits[index].name = newName;
  if (newCategory) habits[index].category = newCategory;
  if (newTags) habits[index].tags = newTags;
  const updatedCard = createHabitCard(habits[index], index);
  habitList.replaceChild(updatedCard, habitList.children[index + 1]); 
}
function deleteHabit(index) {
  if (confirm("Are you sure you want to delete this habit?")) {
    habits.splice(index, 1);
    habitList.removeChild(habitList.children[index + 1]); 
  }
}
