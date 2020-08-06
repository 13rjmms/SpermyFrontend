$(document).ready(function () {

   
    $('#submitdonor').click(function() {
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
        var race = document.getElementById('race').value;
        var hairColor = document.getElementById('hairColor').value;
        var eyeColor = document.getElementById('eyeColor').value;
        var nationality = document.getElementById('nationality').value;
        var weight = document.getElementById('weigth').value;
        var bloodType = document.getElementById('bloodType').value;

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
            "city": city,
            "race": race,
            "hairColor": hairColor,
            "eyeColor": eyeColor,
            "nationality": nationality,
            "weight": weight,
            "bloodType": bloodType
        }

        $.ajax({
            url: 'https://spermy.herokuapp.com/api/donor',
            type: 'POST',
            data: JSON.stringify(obj),
            async: true,
            contentType: 'application/json',
            //success: successCallback,
            //error: errorCallback
        }); 
    }

  

});
