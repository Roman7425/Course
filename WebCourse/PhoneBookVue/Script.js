new Vue({
    el: "#phoneBook",
    data: {
        newId: 1,
        contacts: [],
        newName: "",
        newSurname: "",
        newNumber: "",
        filterValue: "",
        wasFilter: false,
        nameError: "",
        surnameError: "",
        numberError: "",
        numberRepeatedError: "",
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

            var filterValue = String(this.filterValue).toLowerCase();

            var newContactFitsFilter = String(this.newName).toLowerCase().indexOf(filterValue) > -1 || String(this.newSurname).toLowerCase().indexOf(filterValue) > -1 ||
                String(this.newNumber).toLowerCase().indexOf(filterValue) > -1;

            var idWithFilter = 1;
            _.forEach(this.contacts, function (c) {
                if (c.fitsFilter === true) {
                    idWithFilter++;
                }
            });

            this.newId = this.contacts.length + 1;

            this.contacts.push({
                id: this.wasFilter === false ? this.newId : idWithFilter,
                name: this.newName,
                surname: this.newSurname,
                number: this.newNumber,
                check: false,
                fitsFilter: this.wasFilter === false ? true : newContactFitsFilter
            });

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
        },

        acceptFilter: function () {
            this.wasFilter = true;
            var filterValue = String(this.filterValue).toLowerCase();
            _.forEach(this.contacts, function (c) {
                if (String(c.name).toLowerCase().indexOf(filterValue) === -1 && String(c.surname).toLowerCase().indexOf(filterValue) === -1 &&
                    String(c.number).toLowerCase().indexOf(filterValue) === -1) {
                    c.fitsFilter = false;
                    c.check = false;
                }
            });

            var idWithFilter = 1;
            _.forEach(this.contacts, function (c) {
                if (c.fitsFilter === true) {
                    c.id = idWithFilter;
                    idWithFilter++;
                }
            })
        },

        cancelFilter: function () {
            var number = 1;
            _.forEach(this.contacts, function (c) {
                c.fitsFilter = true;
                c.id = number;
                number++;
            });
            this.wasFilter = false;
            this.filterValue = "";
        },

        deleteCheckedContacts: function () {
            this.contacts = this.contacts.filter(function (c) {
                return c.check === false;
            });

            if (this.wasFilter === true) {
                var idWithFilter = 1;
                _.forEach(this.contacts, function (c) {
                    if (c.fitsFilter === true) {
                        c.id = idWithFilter;
                        idWithFilter++;
                    }
                })
            }
            else {
                var number = 1;
                _.forEach(this.contacts, function (c) {
                    c.id = number;
                    number++;
                });
            }
        }
    }
});