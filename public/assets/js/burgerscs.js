
console.log("loaded js")
$(document).ready(function() {


    $("#form-id").on("submit", function(event) {
        
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger-input").val().trim(),
            devoured: 0
        };
        console.log(newBurger);
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("added new burger");
            
            location.reload();
        });
    });

    //add eatburger click evt to change devoured state from 0 to 1 

});
