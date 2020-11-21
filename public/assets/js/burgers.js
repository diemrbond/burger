$(function () {

    // ADD A BURGER
    $("#addBurgerBtn").on("click", function (event) {

        // CHECK THE BURGER ISN'T EMPTY
        if ($("#addBurger").val() != ""){

            // ADD THE BURGER
            let newBurger = {
                burger_name: $("#addBurger").val()
            }            
            console.log(`Adding burger: ${JSON.stringify(newBurger)}`)

            // AJAX CALL
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(
                function () {
                    location.reload();
                }
            );
        }
    });

    // EAT A BURGER
    $(".eatBurger").on("click", function (event) {
        
        event.preventDefault();
        let id = $(this).attr("data-id");

        // SET THE BURGER BOOLEAN
        let updateBurger = {
            devoured: 1
        };

        // AJAX CALL
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
