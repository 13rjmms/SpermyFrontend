$(document).ready(function () {
    getAllDonors();
});


function getAllDonors() {
    $.ajax({
        url: "https://spermy.herokuapp.com/api/donor",
        type: 'GET',
        headers: {'Access-Control-Allow-Origin': 'http://localhost:5500', 'Vary': 'Origin'},
        success: getAllDonorsSuccess,
        error: getAllDonorsError
    });
}

function getAllDonorsSuccess(response) {

    console.log(response);
    var donorList = $('#donors');
    donorList.empty();

    response.forEach(element => {
        var donors = '<div class="col-sm-6 col-md-4">' +
                        '<div class="card m-2" style="width: 18rem;"> '+
                        '<img src="assets/donnor-1.jpeg" class="card-img-top" alt="...">' +
                        '<div class="card-body">' +
                        '<h5 class="card-title">Wild Jerry</h5>' +
                        '<p class="card-text">Not enough could be said...</p>' +
                        '<a href="#" class="btn btn-primary">Get Sperm</a>' +
                        '</div></div></div>';
        $(donorList).append(donors);
    });

}



function getAllDonorsError(request,status,error) {

    console.log(error);
    var donorList = $('#donors');
    donorList.empty();

    var message = '<div class="row" id="manager-message"><div class="col-12 alert alert-danger lead" role="alert">No donors found...</div></div>';
    $(donorList).append(message);

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
