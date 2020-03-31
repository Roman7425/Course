document.addEventListener("DOMContentLoaded", function () {
    var tableBody = (".table-body");
    $("#add-button").click(function () {
        $("#name-error").hide();
        $("#surname-error").hide();
        $("#number-error").hide();
        $("#number-repeated-error").hide();
        var wasError = false;
        var nameInput = $("#input-name").css("border-color", "");
        var surnameInput = $("#input-surname").css("border-color", "");
        var numberInput = $("#input-number").css("border-color", "");

        if (nameInput.val() === "") {
            $("#name-error").show();
            nameInput.css("border-color", "#eb5138");
            wasError = true;
        }
        if (surnameInput.val() === "") {
            $("#surname-error").show();
            surnameInput.css("border-color", "#eb5138");
            wasError = true;
        }
        if (numberInput.val() === "" || isNaN(numberInput.val())) {
            $("#number-error").show();
            numberInput.css("border-color", "#eb5138");
            wasError = true;
        }

        $(".table-body .number-col").each(function () {
            if ($(this).text() === numberInput.val()) {
                $("#number-repeated-error").show();
                numberInput.css("border-color", "#eb5138");
                wasError = true;
            }
        });

        if (wasError === true) {
            return;
        }

        var newTr = $("<tr></tr>")
            .appendTo(tableBody)
            .append($("<td><input class=\"check\" type=\"checkbox\"></td>"))
            .append($("<td></td>"))
            .append($("<td></td>").text(nameInput.val()))
            .append($("<td></td>").text(surnameInput.val()))
            .append($("<td class=\"number-col\"></td>").text(numberInput.val()))
            .append($("<td></td>").html($("<button>Удалить</button>")
                .click(function () {
                    var choice = confirm("Действительно хотите удалить контакт?");
                    if (choice) {
                        newTr.remove();
                        $(".table-body tr").each(function (i) {
                            $(this).children().eq(1).text(i + 1);
                        });
                    }
                })));

        $(".table-body tr").each(function (i) {
            $(this).children().eq(1).text(i + 1);
        });

        nameInput.val("");
        surnameInput.val("");
        numberInput.val("");
        wasError = true;
    });

    $("#head-delete-button").click(function () {
        var choice = confirm("Действительно хотите удалить выбранные контакты?");
        if (choice) {
            $(".check").each(function () {
                if ($(this).is(":checked")) {
                    $(this).parent().parent().remove();
                }
            });
            $(".table-body tr").each(function (i) {
                $(this).children().eq(1).text(i + 1);
            });
        }
    });

    $("#head-check").click(function () {
        if ($("#head-check").is(":checked") === true) {
            $(".check").each(function () {
                $(this).prop("checked", true);
            });
        }
        else {
            $(".check").each(function () {
                $(this).prop("checked", false);
            });
        }
    });

    var elements = [];
    $("#accept-filter").click(function () {
        $(".table-body tr").each(function () {
            if ($(this).children().eq(2).text() === $("#filter-input").val() ||
                $(this).children().eq(3).text() === $("#filter-input").val() ||
                $(this).children().eq(4).text() === $("#filter-input").val()) {

            } else {
                elements.push($(this));
                $(this).hide();
            }
        });
    });

    $("#cancel-filter").click(function () {
        $("#filter-input").val("");
        elements.forEach(function (element) {
            element.show();
        })
    });
});