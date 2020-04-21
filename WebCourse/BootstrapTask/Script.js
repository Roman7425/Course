$(function () {
    var tableBody = $(".table-body");
    var temp;

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
            .append($("<td><input class=\"check\" type=\"checkbox\"></td>").click(function () {
                $(".check").is(":checked") ? $("#head-delete-button").removeAttr("disabled") : $("#head-delete-button").attr("disabled", true);
            }))
            .append($("<td></td>"))
            .append($("<td></td>").text(nameInput.val()))
            .append($("<td></td>").text(surnameInput.val()))
            .append($("<td class=\"number-col\"></td>").text(numberInput.val()))
            .append($("<td></td>").html($("<button data-toggle=\"modal\" data-target=\"#exampleModal\" class=\"btn btn-danger\">Удалить</button>").click(function () {
                temp = newTr;
            })));

        nameInput.val("");
        surnameInput.val("");
        numberInput.val("");

        var filterValue = $("#filter-input").val().toLowerCase();

        if (wasFilter === true && (newTr.children().eq(2).text().toLowerCase().indexOf(filterValue) === -1 &&
            newTr.children().eq(3).text().toLowerCase().indexOf(filterValue) === -1 &
            newTr.children().eq(4).text().toLowerCase().indexOf(filterValue) === -1)) {
            newTr.hide();
        }

        renumber();
    });

    $("#checked-accept-delete").click(function () {
        $(".check").each(function () {
            if ($(this).is(":checked")) {
                $(this).parent().parent().remove();
            }
        });
        $("#head-delete-button").attr("disabled", true);
        renumber();
    });

    $("#accept-delete").click(function () {
        temp.remove();
        renumber();
    });

    $("#head-check").click(function () {
        if ($(".table-body > tr").children().length > 0) {
            $(".check").prop("checked", $("#head-check").is(":checked"));
            $("#head-check").is(":checked") ? $("#head-delete-button").removeAttr("disabled") : $("#head-delete-button").attr("disabled", true);
        }
    });

    var wasFilter = false;

    $("#accept-filter").click(function () {
        var filterValue = $("#filter-input").val().toLowerCase();
        $(".table-body tr").show()
            .each(function () {
                if ($(this).children().eq(2).text().toLowerCase().indexOf(filterValue) === -1 &&
                    $(this).children().eq(3).text().toLowerCase().indexOf(filterValue) === -1 &&
                    $(this).children().eq(4).text().toLowerCase().indexOf(filterValue) === -1) {
                    $(this).hide().children().eq(0).children().eq(0).click().prop("checked", false);
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