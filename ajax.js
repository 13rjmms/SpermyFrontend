$(document).ready(function () {
    $.ajax({
        url: "http://localhost:8080/spermbank/api/donor",//api url
        async: true,
        success: function(){
            console.log(response);
        },
        error: function(){
            console.log("error");
        }
    })
});

