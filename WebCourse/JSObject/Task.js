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

    function getCountriesWithMaxCitiesCount(countries) {
        var maxCitiesCount = countries.reduce(function (accum, country) {
            if (accum < country.cities.length) {
                accum = country.cities.length;
            }
            return accum;
        }, 0);

        return countries.filter(function (country) {
            if (country.cities.length < maxCitiesCount) {
                return false;
            }
            else {
                return true;
            }
        });
    }

    console.log("Страны с максимальным количеством городов");
    console.log(getCountriesWithMaxCitiesCount(countries));

    function getCountriesWithPopulation(countries) {
        var countriesWithPopulation = {};
        countries.forEach(function (country) {
            countriesWithPopulation[country.name] = country.cities.reduce(function (accum, city) {
                return accum + city.population;
            },0);
        });

        return countriesWithPopulation;
    }

    console.log(getCountriesWithPopulation(countries));
}());