function addTask() {

    let input = document.getElementById("taskInput");

    let taskText = input.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    li.textContent = taskText;

    li.onclick = function() {
        li.style.textDecoration = "line-through";
    };

    let deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.onclick = function() {
        li.remove();
    };

    li.appendChild(deleteButton);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}