var message = document.createElement("p");
var resultKelvin = document.createElement("p");
var resultFarengate = document.createElement("p");

var button = document.getElementById("button");
button.addEventListener("click", function (e) {

    var temperatureValue = document.getElementById("input-temperature");
    var celsius = temperatureValue.value;

    message.textContent = "";
    resultKelvin.textContent = "";
    resultFarengate.textContent = "";

    if (celsius === "") {
        message.textContent = "Введите значение температуры!";
        document.body.append(message);
    }
    else if (isNaN(celsius)) {
        message.textContent = "Введите число";
        document.body.append(message);
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