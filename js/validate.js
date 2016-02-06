$(document).ready(function() {
    $( "#username" ).after( "<span id='username_span'></span>" );
    $( "#password" ).after( "<span id='password_span'></span>" );
    $( "#email" ).after( "<span id='email_span'></span>" );

    $("#username").focusin(function(){
        $( "#username_span" ).addClass("info").text("Kindly Enter Username. Please note that only alphabetical or numeric characters are allowed!");
    });

    $("#username").focusout(function(){
        var alphaNumericChar = "^[a-zA-Z0-9]+$";
        if($("#username").val().match(alphaNumericChar) == null) {
            if($("#username").val() == "") {
                $( "#username_span" ).removeClass("error");
                $( "#username_span" ).removeClass("ok");
                $( "#username_span" ).removeClass("info").text("");
            }
            else {
                $( "#username_span" ).addClass("error").text("Error");
            }
        } else{
            $( "#username_span" ).addClass("ok").text("Ok");
        }
    });
    $("#password").focusin(function(){
        $( "#password" ).addClass("info").text("Enter Password. Kindly enter at least 8 characters");
    });
    $("#password").focusout(function(){
        if($("#password").val().length >= "8") {
            $( "#password_span" ).addClass("ok").text("Ok");
        } else {
            if($("#password").val() == "") {
                $( "#password_span" ).removeClass("error");
                $( "#password_span" ).removeClass("ok");
                $( "#password_span" ).removeClass("info").text("");
            }
            else {
                $( "#password_span" ).addClass("error").text("Error");
            }
        }

    });

    $("#email").focusin(function(){
        $( "#email" ).addClass("info").text("Enter Email ID");
    });

    $("#email").focusout(function(){
        if($("#email").val().search("@") != -1) {
            $( "#email_span" ).addClass("ok").text("Ok");
        } else {
            if($("#email").val() == "") {
                $( "#email_span" ).removeClass("error");
                $( "#email_span" ).removeClass("ok");
                $( "#email_span" ).removeClass("info").text("");
            } else {
                $( "#email_span" ).addClass("error").text("Error");
            }
        }
    });
});