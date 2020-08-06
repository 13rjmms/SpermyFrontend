$(document).ready(function () {
    getAllDonors();
});


function getAllDonors() {
    $.support.cors = true; 
    $.ajax({
        url: "https://spermy.herokuapp.com/api/donor",
        type: 'GET',
        crossDomain:'true',
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
                        '<h5 class="card-title">'+ element.firstName + '</h5>' +
                        '<p class="card-text">Not enough could be said...</p>' +
                        '<a href="#" class="btn btn-primary">Get Sperm</a>' +
                        '</div></div></div>';

        var donor = '<div class="card mb-3">' +
                    '<div class="row no-gutters"> ' +
                        '<div class="col-md-3">' +
                           '<img src="assets/donnor-1.jpeg" class="img-thumbnail border-0" alt="...">' +
                        '</div>'+
                    '<div class="col-md-9">' +
                    '<div class="card-body">'+
                    '<h5 class="card-title">'+ element.firstName +'</h5>' +
                    '<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>' +
                    '<p class="card-text"><small class="text-muted">'+ element.nacionality +'</small></p>' +
                    '<p class="card-text"><small class="text-muted">'+ element.race +'</small></p>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>';
        $(donorList).append(donor);
    });

}

function getAllDonorsError(request,status,error) {

    console.log(error);
    var donorList = $('#donors');
    donorList.empty();

    var message = '<div class="row" id="manager-message"><div class="col-12 alert alert-danger lead" role="alert">No donors found...</div></div>';
    $(donorList).append(message);

}