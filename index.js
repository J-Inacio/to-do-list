const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");

taskInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});

addBtn.addEventListener("click", () => {
  const ulTodo = document.getElementById("to-do-list");
  const liNodeList = document.querySelectorAll("li");

  const liTodo = document.createElement("li");
  liTodo.classList = "to-do-li";
  liTodo.id = `task-${liNodeList.length}`;

  const checkboxTodo = document.createElement("input");
  checkboxTodo.type = "checkbox";
  checkboxTodo.id = `checkbox-task-${liNodeList.length}`;
  checkboxTodo.classList = "li-checkbox"
  checkboxTodo.addEventListener("change", completeTask);

  const deleteBtn = document.createElement("button");
  deleteBtn.id = `deleteBtn-task-${liNodeList.length}`;
  deleteBtn.innerText = "Apagar";
  deleteBtn.addEventListener("click", (e) => {
    const liToRemove = e.target.parentElement;
    liToRemove.remove();
  });

  const taskSpan = document.createElement("span");
  taskSpan.innerText = taskInput.value;

  liTodo.append(checkboxTodo, taskSpan, deleteBtn);
  ulTodo.appendChild(liTodo);

  taskInput.value = "";
});

function completeTask(e) {
  const taskSpan = e.target.parentNode.querySelector("span");
  if (e.target.type === "checkbox") {
    taskSpan.classList.toggle("subline", e.target.checked);
  }
}
