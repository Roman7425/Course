(function () {
    var countries =
        [
            {
                name: "Russia",
                cities:
                    [
                        { name: "Moscow", population: 12615279 },
                        { name: "Novosibirsk", population: 1618039 },
                        { name: "Saint-Petersburg", population: 5392992 }
                    ]
            },
            {
                name: "Germany",
                cities:
                    [
                        { name: "Berlin", population: 3562000 },
                        { name: "Hamburg", population: 1787408 },
                        { name: "Munich", population: 1450381 },
                        { name: "Munich", population: 1450381 }
                    ]
            },
            {
                name: "Australia",
                cities:
                    [
                        { name: "Canberra", population: 367560 },
                        { name: "Sydney", population: 5232310 },
                        { name: "melbourne", population: 4641636 },
                        { name: "Adelaide", population: 1323354 }
                    ]

            }
        ];

    function getCountriesWithMaxCitiesCount(list) {
        var result = list.filter(function (value) {
            if (value.cities.length < list.reduce(function (accum, current) {
                if (accum.cities.length < current.cities.length) {
                    accum = current;
                }
                return accum;
            }, list[0]).cities.length) {
                return false;
            }
            else {
                return true;
            }
        });

        return result;
    }

    console.log(getCountriesWithMaxCitiesCount(countries) + " - Страны с максимальным количеством городов");

    function getCountriesWithPopulation(list) {
        var result = list.reduce(function (accum, current) {
            accum[current.name] = current.cities.reduce(function (accum, current) {
                return accum + current.population;
            }, 0);
            return accum;
        }, {});
        return result;
    }

    var res = getCountriesWithPopulation(countries);
    console.log(res);
}());