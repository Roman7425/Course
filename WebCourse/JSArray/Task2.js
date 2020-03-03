(function () {
    var array = [];
    for (var i = 0; i < 100; i++) {
        array.push(i + 1);
    }

    var result = array.filter(function (value) {
        return value % 2 === 0;
    }).map(function (value) {
        return Math.pow(value, 2);
    });

    console.log(result.join(", "));
}());