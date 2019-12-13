// Script to save contact info to webpage once taught feature

$(document).ready(function () {
    $("#submit").click(function () {
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();
        var contact = $("#contact").val();

        if (name == '' || email == '' || contact == '') {
            alert("Please Fill Required Fields");
        } else {
            console.log(name);
            console.log(email);
            console.log(message);
            console.log(contact);
        }
    });
})
