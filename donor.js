$(document).ready(function () {
    $('submitdonor').click(function(event) {
    addDonor();
});                    

});


function getAllDonorsSuccess(response) {

    console.log(response);

}

function getAllDonorsError(request,status,error) {

    console.log(error);

}

function addDonor() {
    $.ajax({
        url: "https://spermy.herokuapp.com/api/donor",
        type: 'POST',
        data: JSON.stringify(postAddDonorJson),
        success: getAllDonorsSuccess,
        error: getAllDonorsError
    });
}

var postAddDonorJson = {
                        firstname: $('firstname'), 
                        lastname: $('lastname'), 
                        age: $('age'), 
                        email: $('email'), 
                        city: $('city'), 
                        username: $('username'), 
                        password: $('password'), 
                        phone: $('phone'), 
                        bi: $('bi'), 
                        gender: $('gender'), 
                        address: $('address')
                    }

