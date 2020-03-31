$(function () {
    var inputNewTask = $("#new-task-input");
    var list = $(".task-list > ul");
    var errorMessage = $("#error-message-emptiness");

    $("#add-new-task-button").on("click", function () {
        errorMessage.hide();
        if (inputNewTask.val() === "") {
            errorMessage.show();
            return;
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

        var editButton = $("<button>Редактировать</button>")
            .appendTo(newTask)
            .click(function () {
                var createInput = $("<input/>")
                    .appendTo(newTask)
                    .val(newTaskValue);

                deleteButton.hide();
                editButton.hide();
                newTaskText.text("");

                var acceptButton = $("<button>OK</button>")
                    .appendTo(newTask)
                    .click(function () {
                        if (createInput.val() === "") {
                            newTask.remove();
                            return;
                        }

                        newTaskText.text(createInput.val());
                        newTaskValue = createInput.val();
                        deleteButton.show();
                        editButton.show();
                        createInput.remove();
                        acceptButton.remove();
                        cancelButton.remove();
                    });

                var cancelButton = $("<button>Отмена</button>")
                    .appendTo(newTask)
                    .click(function () {
                        newTaskText.text(newTaskValue);
                        deleteButton.show();
                        editButton.show();
                        newTask.append(createInput)
                            .append(acceptButton)
                            .append(cancelButton);
                    });
            });
        inputNewTask.val("");
    });
});