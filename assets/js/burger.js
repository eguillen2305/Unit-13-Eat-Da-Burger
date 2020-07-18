// burger.js - functions devour, ajaxs, etc needed
$(function () {
    $(".change-devour").on("click", function (event) {
        var id = $(this).data("id");
        var newState = $(this).data("newdevour");

        var newEatingState = {
            devoured: newState
        }
    })

