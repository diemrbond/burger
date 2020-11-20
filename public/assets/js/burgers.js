$(function () {
    $("#addBurgerBtn").on("click", function (event) {

        let newBurger = {
            burger_name: $("#addBurger").val()
        }
        console.log(`Adding burger (front end): ${JSON.stringify(newBurger)}`)

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log(`Added a new burger: ${newBurger}`)
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newCat = {
            name: $("#ca").val().trim(),
            sleepy: $("[name=sleepy]:checked").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/cats", {
            type: "POST",
            data: newCat
        }).then(
            function () {
                console.log("created new cat");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

});
