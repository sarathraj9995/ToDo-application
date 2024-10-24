let todos = [];

function renderTodos() {
    const todoList = document.getElementById("todoList");
    todoList.innerHTML = "";

    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.className = todo.completed ? "completed" : "";

        const taskText = document.createElement("span");
        taskText.textContent = todo.task;

        const actionButtons = document.createElement("div");
        actionButtons.className = "action-buttons";

        const completeButton = document.createElement("button");
        completeButton.textContent = todo.completed ? "Undo" : "Complete";
        completeButton.onclick = () => markAsComplete(index);

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = () => updateTodoPrompt(index);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => deleteTodo(index);

        actionButtons.appendChild(completeButton);
        actionButtons.appendChild(editButton);
        actionButtons.appendChild(deleteButton);

        li.appendChild(taskText);
        li.appendChild(actionButtons);

        todoList.appendChild(li);
    });
}

function addTodo() {
    const todoInput = document.getElementById("todoInput");
    const task = todoInput.value.trim();

    if (task !== "") {
        todos.push({ task, completed: false });
        todoInput.value = "";
        renderTodos();
    } else {
        alert("Please enter a task.");
    }
}

function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

function updateTodoPrompt(index) {
    const newTask = prompt("Update your task:", todos[index].task);
    if (newTask !== null && newTask.trim() !== "") {
        todos[index].task = newTask.trim();
        renderTodos();
    }
}

function markAsComplete(index) {
    todos[index].completed = !todos[index].completed;
    renderTodos();
}

// Initial render of empty TODO list
renderTodos();
