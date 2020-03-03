function ready() {
    var addButton = document.getElementById("add-new-task-button");
    var inputNewTask = document.getElementById("new-task-input");
    var list = document.querySelector(".task-list>ul");
    var errorMessage = document.getElementById("error-message");

    addButton.addEventListener("click", function (e) {

        errorMessage.style.display = "none";

        if (inputNewTask.value === "") {
            errorMessage.style.display = "block";
        }
        else {
            var inputNewTaskValue = inputNewTask.value;
            var newTask = document.createElement("li");
            var deleteButton = document.createElement("button");
            var createButton = document.createElement("button");
            deleteButton.textContent = "Удалить";
            createButton.textContent = "Редактировать";

            newTask.textContent = inputNewTaskValue;
            list.append(newTask);
            inputNewTask.value = "";
            newTask.append(deleteButton);
            newTask.append(createButton);

            deleteButton.addEventListener("click", function (e) {
                list.removeChild(newTask);
            });

            createButton.addEventListener("click", function (e) {
                var acceptCreateButton = document.createElement("button");
                acceptCreateButton.textContent = "OK";

                newTask.innerHTML = "<input class=\"create-input\" />";
                newTask.append(acceptCreateButton);

                var createInput = list.querySelector("input");
                createInput.value = inputNewTaskValue;

                acceptCreateButton.addEventListener("click", function (e) {
                    if (createInput.value === "")
                    {
                        list.removeChild(newTask);
                    }
                    var createValue = createInput.value;
                    inputNewTaskValue = createInput.value;
                    newTask.textContent = createValue;
                    newTask.append(deleteButton);
                    newTask.append(createButton);
                });
            });
        }
    });
}

document.addEventListener("DOMContentLoaded", ready);