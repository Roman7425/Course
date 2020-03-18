document.addEventListener("DOMContentLoaded", function () {
    var errorMessage = document.getElementById("error-message");
    var resultKelvin = document.getElementById("result-kelvin");
    var resultFahrenheit = document.getElementById("result-fahrenheit");
    var temperatureInput = document.getElementById("input-temperature");

    var button = document.getElementById("button");
    button.addEventListener("click", function () {
        errorMessage.style.display = "none";
        var celsiusTemperature = temperatureInput.value;

        resultKelvin.textContent = "";
        resultFahrenheit.textContent = "";

        if (celsiusTemperature === "" || isNaN(celsiusTemperature)) {
            errorMessage.style.display = "block";
        } else {
            var kelvinTemperature = Number(celsiusTemperature) + 273.15;
            var fahrenheitTemperature = (Number(celsiusTemperature) * 9 / 5) + 32;
            resultKelvin.textContent = "По шкале Кельвина = " + kelvinTemperature;
            resultFahrenheit.textContent = "По шкале Фаренгейта = " + fahrenheitTemperature;
        }
    });
});