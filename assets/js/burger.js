// burger.js - functions devour, ajaxs, etc needed
$(function () {
    $(".change-devour").on("click", function (event) {
        var id = $(this).data("id");
        var newState = $(this).data("newdevour");

        var newEatingState = {
            devoured: newState
        }
    })

     $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newEatingState
    }).then(
      function() {
        console.log("changed eat to", newEatingState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });  

