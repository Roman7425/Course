function ready() {
    var errorMessage = document.getElementById("error-message");
    var resultKelvin = document.createElement("p");
    var resultFarengate = document.createElement("p");

    var button = document.getElementById("button");
    button.addEventListener("click", function (e) {

        errorMessage.style.display = "none";
        var temperatureValue = document.getElementById("input-temperature");
        var celsius = temperatureValue.value;

        resultKelvin.textContent = "";
        resultFarengate.textContent = "";

        if (celsius === "" || isNaN(celsius)) {
            errorMessage.style.display = "block";
        }
        else {
            var kelvin = Number(celsius) + 273;
            var farengate = (Number(celsius) * 9 / 5) + 32;
            resultKelvin.textContent = "По шкале Кельвина = " + kelvin;
            resultFarengate.textContent = "По шкале Фаренгейта = " + farengate;
            document.body.append(resultKelvin);
            document.body.append(resultFarengate);
        }

    });
}

document.addEventListener("DOMContentLoaded", ready);