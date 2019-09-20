$(document).ready(function() {


    $(".form-group").on("submit", function(event) {
        
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newburgerInput").val().trim(),
            devoured: $("#devouredcheck").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("created new burger");

            location.reload();
        });
    });

});