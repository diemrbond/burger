$(function () {
    $("#addBurgerBtn").on("click", function (event) {

        let newBurger = {
            burger_name: $("#addBurger").val()
        }
        console.log(`Adding burger: ${JSON.stringify(newBurger)}`)

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                location.reload();
            }
        );
    });

    $(".eatBurger").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        let id = $(this).attr("data-id");
        console.log("id:"+id)

        let updateBurger = {
            devoured: 1
        };

        // Send the POST request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: updateBurger
        }).then(
            function () {
                location.reload();
            }
        );
    });

});
