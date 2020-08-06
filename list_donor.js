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
        /* 
        "id": 1,
        "bi": "123123123",
        "firstName": "Nuno",
        "lastName": "Midget",
        "age": 18,
        "gender": "Male",
        "email": "yo@m.com",
        "phone": "123123123",
        "address": "fucket",
        "country": "Pt",
        "city": "Lisboa",
        "race": "Yellow",
        "hairColor": "Red",
        "eyeColor": "Blue",
        "nacionality": "PT",
        "weight": "90",
        "bloodType": "A+",
        "imgURL": "https://image.shutterstock.com/image-photo/portrait-stylish-midget-mc-headphones-260nw-1247042659.jpg",
        "productList": [],
        "numberSamples": 0
     */
        var donor = '<div class="card mb-3">' +
                        '<div class="row no-gutters"> ' +
                            '<div class="col-md-3">' +
                            '<img src="'+ element.imgURL+'" class="img-thumbnail border-0" alt="...">' +
                            '</div>'+
                            '<div class="col-md-9">' +
                                '<div class="card-body">'+
                                    '<div class="row">'+
                                        '<h5 class="card-title">'+ element.firstName + ' ' + element.lastName+ '</h5>' +
                                        '<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>' +
                                    '</div>' +
                                    '<div class="row">'+
                                        '<div class="col-md-4">'+
                                            '<p class="card-text"><small class="text-muted">'+ element.nacionality +'</small></p>' +
                                        '</div>' +
                                        '<div class="col-md-4">'+
                                            '<p class="card-text"><small class="text-muted">'+ element.race +'</small></p>' +
                                        '</div>' +
                                        '<div class="col-md-4">'+
                                            '<p class="card-text"><small class="text-muted">'+ element.eyeColor +'</small></p>' +
                                        '</div>' +
                                    '</div>' +
                                    '<div class="row">'+
                                        '<div class="col-md-4">'+
                                            '<p class="card-text"><small class="text-muted">'+ element.hairColor +'</small></p>' +
                                        '</div>' +
                                        '<div class="col-md-4">'+
                                            '<p class="card-text"><small class="text-muted">'+ element.bloodType +'</small></p>' +
                                        '</div>' +
                                        '<div class="col-md-4">'+
                                            '<p class="card-text"><small class="text-muted">'+ element.age +'</small></p>' +
                                        '</div>' +
                                    '</div>' +
                                    '<div class="row">'+
                                    '<div class="col-md-6">'+
                                        '<span class="card-text">Email: '+ element.email +'</span>' +
                                    '</div>' +
                                    '<div class="col-md-6">'+
                                        '<span class="card-text">Phone: '+ element.phone +'</span>' +
                                    '</div>' +
                                    '</div>' +
                                    '</div>' +
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