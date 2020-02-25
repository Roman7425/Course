(function () {
    var getCompare = function (a, b) {
        return a - b;
    }

    var array = [5, 3, 2, 6, 7, 11, 12, 15, 21, 5, 3, 7];
    array.sort(getCompare).reverse();
    console.log(array.join(", ") + " - Массив отсортирован по убыванию");

    var firstFiveElemntArray = array.slice(0, 5);
    var lastFiveElementArray = array.slice(array.length - 5);

    console.log(firstFiveElemntArray.join(", ") + " - Массив из первых 5 элементов");
    console.log(lastFiveElementArray.join(", ") + " - Массив из последних 5 элементов");

    var result = array.reduce(function (accum, currentValue) {
        return accum + (currentValue % 2 === 0 ? currentValue : 0);
    }, 0);

    console.log("Сумма четных чисел - " + result);
}());