document.addEventListener("DOMContentLoaded", function () {
    var tableBody = (".table-body");
    var addButton = $("#add-button")
        .click(function () {
            $("#name-error").css("display", "none");
            $("#surname-error").css("display", "none");
            $("#number-error").css("display", "none");
            $("#number-repeated-error").css("display", "none");
            var wasError = false;
            var nameInput = $("#input-name").css("border-color", "");
            var surnameInput = $("#input-surname").css("border-color", "");
            var numberInput = $("#input-number").css("border-color", "");

            if (nameInput.val() === "") {
                $("#name-error").css("display", "block");
                nameInput.css("border-color", "#eb5138");
                wasError = true;
            }
            if (surnameInput.val() === "") {
                $("#surname-error").css("display", "block");
                surnameInput.css("border-color", "#eb5138");
                wasError = true;
            }
            if (numberInput.val() === "" || isNaN(numberInput.val())) {
                $("#number-error").css("display", "block");
                numberInput.css("border-color", "#eb5138");
                wasError = true;
            }

            $(".table-body .number-col").each(function () {
                if ($(this).text() === numberInput.val()) {
                    $("#number-repeated-error").css("display", "block");
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
                        newTr.remove();
                        $(".table-body tr").each(function (i) {
                            $(this).children().eq(1).text(i + 1);
                        });
                    })));

            $(".table-body tr").each(function (i) {
                $(this).children().eq(1).text(i + 1);
            });

            nameInput.val("");
            surnameInput.val("");
            numberInput.val("");
            wasError = true;
        });

    var deleteButtom = $("#head-delete-button")
        .click(function () {
            $(".check").each(function () {
                if ($(this).is(":checked")) {
                    $(this).parent().parent().remove();
                }
            });
            $(".table-body tr").each(function (i) {
                $(this).children().eq(1).text(i + 1);
            });
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
});