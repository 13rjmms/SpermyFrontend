$(document).ready(function () {
    
    
    $('#submitConsumer').click(function() {
        formPost();
        window.location.href = 'index.html';
    });

    function formPost() {
        var firstname = document.getElementById('firstname').value;
        var lastname = document.getElementById('lastname').value;
        var age = document.getElementById('age').value;
        var email = document.getElementById('email').value;
        var country = document.getElementById('country').value;
        var city = document.getElementById('city').value;
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        var phone = document.getElementById('phone').value;
        var bi = document.getElementById('bi').value;
        var gender = document.getElementById('gender').value;
        var address = document.getElementById('address').value;
        var phone = document.getElementById('phone').value;

        var obj = {
            "bi": bi,
            "firstName": firstname,
            "lastName": lastname,
            "age": age,
            "gender": gender,
            "email": email,
            "phone": phone,
            "address": address,
            "country": country,
            "city": city
        }

        $.ajax({
            url: 'https://spermy.herokuapp.com/api/consumer',
            type: 'POST',
            data: JSON.stringify(obj),
            async: true,
            contentType: 'application/json',
            //success: successCallback,
            //error: errorCallback
        }); 
    }

    

});
