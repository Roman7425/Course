
new Vue({
    el: "#ToDoList",
    data: {
        newId: 1,
        newTaskText: "",
        tasks: [],
        errorMessage: null
    },
    methods: {
        addTask: function () {
            this.errorMessage = "";

            if (this.newTaskText === "") {
                this.errorMessage = "Enter new Task";
                return;
            }

            this.tasks.push({
                id: this.newId,
                text: this.newTaskText,
                createActive: false,
                temp: null
            });

            this.newId++;
            this.newTaskText = "";
        },

        deleteTask: function (task) {
            this.tasks = this.tasks.filter(function (x) {
                return x !== task;
            });
        },

        createTask: function (task) {
            task.createActive = true;
            task.temp = task.text;
        },

        acceptCreate: function (task) {
            if (task.text === "") {
                this.tasks = this.tasks.filter(function (x) {
                    return x !== task;
                });
            }
            task.createActive = false;
        },

        cancelCreate: function (task) {
            task.text = task.temp;
            task.createActive = false;
        }
    }
});