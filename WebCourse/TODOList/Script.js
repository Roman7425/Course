document.addEventListener("DOMContentLoaded", function () {
    var addButton = document.getElementById("add-new-task-button");
    var inputNewTask = document.getElementById("new-task-input");
    var list = document.querySelector(".task-list>ul");
    var errorMessage = document.getElementById("error-message-emptiness");

    addButton.addEventListener("click", function () {
        errorMessage.style.display = "none";

        if (inputNewTask.value === "") {
            return errorMessage.style.display = "block";
        }
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

        deleteButton.addEventListener("click", function () {
            list.removeChild(newTask);
        });

        createButton.addEventListener("click", function () {
            var acceptCreateButton = document.createElement("button");
            var cancelButton = document.createElement("button");

            acceptCreateButton.textContent = "OK";
            cancelButton.textContent = "Отмена";

            newTask.innerHTML = "<input/>";
            newTask.append(acceptCreateButton);
            newTask.append(cancelButton);

            var createInput = list.querySelector("input");
            createInput.value = inputNewTaskValue;

            acceptCreateButton.addEventListener("click", function () {
                if (createInput.value === "") {
                    return list.removeChild(newTask);
                }
                var createValue = createInput.value;
                inputNewTaskValue = createInput.value;
                newTask.textContent = createValue;
                newTask.append(deleteButton);
                newTask.append(createButton);
            });

            cancelButton.addEventListener("click", function () {
                newTask.textContent = inputNewTaskValue;
                newTask.append(deleteButton);
                newTask.append(createButton);
            });
        });
    });
});