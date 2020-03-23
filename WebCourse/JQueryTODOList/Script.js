$(function () {
    var inputNewTask = $("#new-task-input");
    var list = $(".task-list > ul");
    var errorMessage = $("#error-message-emptiness");
    var addButton = $("#add-new-task-button")
        .on("click", function () {
            errorMessage.css("display", "none");
            if (inputNewTask.val() === "") {
                return errorMessage.css("display", "block");
            }
            var newTask = $("<li></li>")
                .appendTo(list);
            var newTaskText = $("<p></p>")
                .appendTo(newTask);
            var newTaskValue = inputNewTask.val();
            newTaskText.text(newTaskValue);
            var deleteButton = $("<button>Удалить</button>")
                .on("click", function () {
                    newTask.remove();
                })
                .appendTo(newTask);
            var createButton = $("<button>Редактировать</button>")
                .appendTo(newTask)
                .click(function () {
                    var createInput = $("<input/>")
                        .appendTo(newTask)
                        .val(newTaskValue);
                    deleteButton.hide();
                    createButton.hide();
                    newTaskText.text("");
                    var acceptButton = $("<button>OK</button>")
                        .appendTo(newTask)
                        .click(function () {
                            if (createInput.val() === "") {
                                return newTask.remove();
                            }
                            newTaskText.text(createInput.val());
                            newTaskValue = createInput.val();
                            deleteButton.show();
                            createButton.show();
                            createInput.hide();
                            acceptButton.hide();
                        });
                });
            inputNewTask.val("");
        });
});