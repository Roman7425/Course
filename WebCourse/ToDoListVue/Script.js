new Vue({
    el: "#todo-list",
    data: {
        newId: 1,
        newTaskText: "",
        tasks: [],
        errorMessage: null
    },
    methods: {
        addTask: function () {
            this.errorMessage = "";

            if (this.newTaskText.replace(/ /g, '') === "") {
                this.errorMessage = "Введите новую задачу!";
                this.newTaskText = "";
                return;
            }

            this.tasks.push({
                id: this.newId,
                text: this.newTaskText,
                isEditing: false,
                originalText: null
            });

            this.newId++;
            this.newTaskText = "";
        },

        deleteTask: function (task) {
            this.tasks = this.tasks.filter(function (x) {
                return x !== task;
            });
        },

        editTask: function (task) {
            task.isEditing = true;
            task.originalText = task.text;
        },

        acceptEdit: function (task) {
            if (task.text === "") {
                this.tasks = this.tasks.filter(function (x) {
                    return x !== task;
                });
            }
            task.isEditing = false;
        },

        cancelEdit: function (task) {
            task.text = task.originalText;
            task.isEditing = false;
        }
    }
});