$(function () {
    var people = [
        { age: 24, name: "Roman", lastname: "Gubkin" },
        { age: 20, name: "Liza", lastname: "Borisova" },
        { age: 36, name: "Klim", lastname: "Belic" },
        { age: 27, name: "Ivan", lastname: "Babuhin" },
        { age: 42, name: "Michael", lastname: "Belov" },
        { age: 18, name: "Klim", lastname: "Lipkin" },
        { age: 30, name: "Olya", lastname: "Ivanova" },
        { age: 20, name: "Inga", lastname: "Filonova" },
        { age: 29, name: "Sasha", lastname: "Hrapov" },
        { age: 23, name: "Pasha", lastname: "Kalinin" }
    ];

    console.log(_.reduce(people, function (memo, num) {
        return memo + num.age;
    }, 0) / people.length + " - средний возраст всех людей");

    console.log(_.chain(people)
        .filter(function (e) {
            return e.age >= 20 && e.age <= 30;
        })
        .sortBy("age"));
    console.log("Осортированный список людей от 20 до 30 лет включительно");

    console.log(_.each(people, function (e) {
        e.fullName = e.name + " " + e.lastname;
    }));
});