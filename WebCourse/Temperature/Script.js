document.addEventListener("DOMContentLoaded", function () {
    var errorMessage = document.getElementById("error-message");
    var resultKelvin = document.getElementById("resultKelvin");
    var resultFahrenheit = document.getElementById("resultFahrenheit");

    var button = document.getElementById("button");
    button.addEventListener("click", function (e) {
        errorMessage.style.display = "none";
        var temperatureValue = document.getElementById("input-temperature");
        var celsius = temperatureValue.value;

        resultKelvin.textContent = "";
        resultFahrenheit.textContent = "";

        if (celsius === "" || isNaN(celsius)) {
            errorMessage.style.display = "block";
        }
        else {
            var kelvin = Number(celsius) + 273.15;
            var fahrenheit = (Number(celsius) * 9 / 5) + 32;
            resultKelvin.textContent = "По шкале Кельвина = " + kelvin;
            resultFahrenheit.textContent = "По шкале Фаренгейта = " + fahrenheit;
        }
    });
});