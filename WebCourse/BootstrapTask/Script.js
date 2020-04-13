$(function () {
    var tableBody = $(".table-body");
    var addButton = $("#add-button").click(function () {
        $("#name-error").hide();
        $("#surname-error").hide();
        $("#number-error").hide();
        $("#number-repeated-error").hide();
        var wasError = false;

        var nameInput = $("#name-input").removeClass("input-error");
        var surnameInput = $("#surname-input").removeClass("input-error");
        var numberInput = $("#number-input").removeClass("input-error");

        if (nameInput.val() === "") {
            $("#name-error").show();
            nameInput.addClass("input-error");
            wasError = true;
        }
        if (surnameInput.val() === "") {
            $("#surname-error").show();
            surnameInput.addClass("input-error");
            wasError = true;
        }
        if (numberInput.val() === "" || isNaN(numberInput.val())) {
            $("#number-error").show();
            numberInput.addClass("input-error");
            wasError = true;
        }

        $(".table-body .number-col").each(function () {
            if ($(this).text() === numberInput.val()) {
                $("#number-repeated-error").show();
                numberInput.addClass("input-error");
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
            .append($("<td></td>").html($("<button class=\"btn btn-danger\">Удалить</button>")
                .click(function () {
                    var choice = confirm("Действительно хотите удалить контакт?");
                    if (choice) {
                        newTr.remove();
                        renumber();
                    }
                })));

        nameInput.val("");
        surnameInput.val("");
        numberInput.val("");

        if (wasFilter === true && !(newTr.children().eq(2).text().indexOf($("#filter-input").val()) + 1 ||
            newTr.children().eq(3).text().indexOf($("#filter-input").val()) + 1 ||
            newTr.children().eq(4).text().indexOf($("#filter-input").val()) + 1)) {
            newTr.hide();
        }

        renumber();
    });

    $("#head-delete-button").click(function () {
        var choice = confirm("Действительно хотите удалить выбранные контакты?");
        if (choice) {
            $(".check").each(function () {
                if ($(this).is(":checked")) {
                    $(this).parent().parent().remove();
                }
            });
            renumber();
        }
    });

    $("#head-check").click(function () {
        $(".check").prop("checked", $("#head-check").is(":checked"));
    });

    var wasFilter = false;

    $("#accept-filter").click(function () {
        $(".table-body tr").hide()
            .each(function () {
                if ($(this).children().eq(2).text().indexOf($("#filter-input").val()) + 1 ||
                    $(this).children().eq(3).text().indexOf($("#filter-input").val()) + 1 ||
                    $(this).children().eq(4).text().indexOf($("#filter-input").val()) + 1) {
                    $(this).show();
                }
            });
        renumber();
        wasFilter = true;
    });

    $("#cancel-filter").click(function () {
        $("#filter-input").val("");
        $(".table-body tr").show();
        renumber();
        wasFilter = false;
    });

    var renumber = function () {
        $(".table-body tr:visible").each(function (i) {
            $(this).children().eq(1).text(i + 1);
        });
    }
});