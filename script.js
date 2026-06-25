function addTask() {
    let task = document.getElementById("taskInput").value;
    let priority = document.getElementById("priority").value;
    let dueDate = document.getElementById("dueDate").value;
    let category = document.getElementById("category").value;

    if(task === ""){
        alert("Enter a task");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <strong>${task}</strong><br>
        Priority: ${priority}<br>
        Due Date: ${dueDate}<br>
        Category: ${category}<br>
        <button onclick="completeTask(this)">Done</button>
        <button onclick="deleteTask(this)">Delete</button>
    `;

    document.getElementById("taskList").appendChild(li);

    document.getElementById("taskInput").value = "";
    document.getElementById("category").value = "";
}