document.addEventListener("DOMContentLoaded", () => {
  // your code here
const newTask = document.getElementById("create-task-form")
const listOfTasks = document.getElementById("tasks")
newTask.addEventListener("submit", (e) => {
e.preventDefault()

const newInput = e.target.querySelector("#new-task-description").value
const newList = document.createElement("li")
newList.innerText = newInput

listOfTasks.append(newList)
})

});

