new Vue({
    el: "#phoneBook",
    data: {
        newId: 1,
        contacts: [],
        newName: "",
        newSurname: "",
        newNumber: "",
        nameError: "",
        surnameError: "",
        numberError: "",
        numberRepeatedError: ""
    },
    methods: {
        addContact: function () {
            this.nameError = "";
            this.surnameError = "";
            this.numberError = "";
            this.numberRepeatedError = "";
            var wasError = false;

            if (this.newName === "") {
                this.nameError = "Заполните поле \"Имя\"!";
                wasError = true;
            }
            if (this.newSurname === "") {
                this.surnameError = "Заполните поле \"Фамилия\"!";
                wasError = true;
            }
            if (this.newNumber === "" || isNaN(this.newNumber)) {
                this.numberError = "Введите номер контакта в поле \"Номер\"!"
                wasError = true;
            }

            var temp = this.newNumber;

            if (_.find(this.contacts, function (c) {
                return c.number === temp;
            }) !== undefined) {
                this.numberRepeatedError = "Контакт с таким номером уже добавлен!";
                wasError = true;
            }

            if (wasError === true) {
                return;
            }

            this.contacts.push({
                id: this.newId,
                name: this.newName,
                surname: this.newSurname,
                number: this.newNumber
            });

            this.newId++;
            this.newName = "";
            this.newSurname = "";
            this.newNumber = "";
        },

        deleteContact: function (contact) {
            _.each(this.contacts, function (c) {
                if (c.id > contact.id) {
                   return c.id--;
                }
            });

            this.contacts = _.filter(this.contacts, function (c) {
                return c !== contact;
            });
            this.newId--;
        }
    }
});