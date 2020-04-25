new Vue({
    el: "#phoneBook",
    data: {
        newId: 1,
        contacts: [],
        newName: "",
        newSurname: "",
        newNumber: "",
        filterValue: "",
        nameError: "",
        surnameError: "",
        numberError: "",
        numberRepeatedError: "",
        headCheck: false
    },
    computed: {
        filteredContacts: function () {
            var text = this.filterValue.toLowerCase();

            _.each(this.contacts, function (c) {
                if (c.name.toLowerCase().indexOf(text) === -1 &&
                    c.surname.toLowerCase().indexOf(text) === -1 &&
                    c.number.toLowerCase().indexOf(text) === -1) {
                    c.check = false;
                }
            });

            return this.contacts.filter(function (c) {
                return text.length === 0 || (c.name.toLowerCase().indexOf(text) >= 0 ||
                    c.surname.toLowerCase().indexOf(text) >= 0 ||
                    c.number.toLowerCase().indexOf(text) >= 0);
            });
        },
        checkHead: function () {
            checkHead === false ?
                _.each(this.contacts, function (c) {
                    c.check = false;
                }) :
                _.each(this.contacts, function (c) {
                    c.check = true;
                });
        },
        isDisabled: function () {
            return _.find(this.contacts, function (c) {
                return c.check === true;
            }) === undefined;
        }
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

            this.newId = this.contacts.length + 1;

            this.contacts.push({
                id: this.newId,
                name: this.newName,
                surname: this.newSurname,
                number: this.newNumber,
                check: false
            });

            this.newName = "";
            this.newSurname = "";
            this.newNumber = "";
        },

        deleteContact: function (contact) {
            this.contacts = _.filter(this.contacts, function (c) {
                return c !== contact;
            });
            this.newId--;
        },

        deleteCheckedContacts: function () {
            this.contacts = this.contacts.filter(function (c) {
                return c.check === false;
            });
        },

        checkAllContacts: function () {
            this.headCheck === false ?
                _.each(this.contacts, function (c) {
                    c.check = true;
                }) :
                _.each(this.contacts, function (c) {
                    c.check = false;
                })
        }
    }
});