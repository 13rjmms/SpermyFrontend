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

    var donorList = $('#donors');
    donorList.empty();
    
    let uniqueNationalites = [...new Set(response.map(item => item.nacionality))];
    console.log(uniqueNationalites);

    let uniqueRaces = [...new Set(response.map(item => item.race))];
    console.log(uniqueRaces);

    let uniqueAges = [...new Set(response.map(item => item.age))];
    console.log(uniqueAges);

    let uniqueBloodTypes = [...new Set(response.map(item => item.bloodType))];
    console.log(uniqueBloodTypes);

    let uniqueHairColors = [...new Set(response.map(item => item.hairColor))];
    console.log(uniqueHairColors);

    let uniqueEyeColors = [...new Set(response.map(item => item.eyeColor))];
    console.log(uniqueEyeColors);

    var filterRaces = $('#filterRaces');

    uniqueRaces.forEach(element => {
        var filter = '<li><a href="#" class="'+element.toLowerCase() +'">'+ element+'</a></li>';
       $(filterRaces).append(filter);
    });

    response.forEach(element => {
    
        var donor = '<div class="card mb-3 container-fluid '+ element.race.toLowerCase()+'">' +
                        '<div class="row no-gutters"> ' +
                            '<div class="col-md-3">' +
                            '<img src="'+ element.imgURL+'" class="img-thumbnail border-0" style="max-height: 200px; max-width:200px;" alt="...">' +
                            '</div>'+
                            '<div class="col-md-9">' +
                                '<div class="card-body">'+
                                    '<div class="row">'+
                                        '<h5 class="card-title">'+ element.firstName + ' ' + element.lastName+ '</h5>' +
                                    '</div>' +
                                    '<div class="row">'+
                                        '<p class="card-text">'+ element.bio + '</p>' +
                                    '</div>' +
                                    '<div class="row mt-3">'+
                                        '<div class="col-md-4">'+
                                            '<p class="card-text"><small class="text-muted">Nacionality: </small>'+ element.nacionality +'</p>' +
                                        '</div>' +
                                        '<div class="col-md-4">'+
                                            '<p class="card-text"><small class="text-muted">Race: </small>'+ element.race +'</p>' +
                                        '</div>' +
                                        '<div class="col-md-4">'+
                                            '<p class="card-text"><small class="text-muted">Eye color: </small>'+ element.eyeColor +'</p>' +
                                        '</div>' +
                                    '</div>' +
                                    '<div class="row">'+
                                        '<div class="col-md-4">'+
                                            '<p class="card-text"><small class="text-muted">Hair color: </small>'+ element.hairColor +'</p>' +
                                        '</div>' +
                                        '<div class="col-md-4">'+
                                            '<p class="card-text"><small class="text-muted">Blood type: </small>'+ element.bloodType +'</p>' +
                                        '</div>' +
                                        '<div class="col-md-4">'+
                                            '<p class="card-text"><small class="text-muted">Age: </small>'+ element.age +'</p>' +
                                        '</div>' +
                                    '</div>' +
                                    '<div class="row mt-3">'+
                                        '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">'+
                                            'Connect'+
                                        '</button>'+
                                    '</div>' +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>';
        $(donorList).append(donor);

        $('#filterRaces li a').click(function() {
            // store anything commonly called in variables to speed up your code
            const $this = $(this)
            const ourClass = $this.attr('class');
            const $ourHolder = $('#donors');
            // reset the active class on all the buttons
            $('#filterRaces li').removeClass('active');
            // update the active state on our clicked button
            $this.parent().addClass('active');
            
            if (ourClass === 'all') {
              // show all our items
              $ourHolder.children('div.card').show(); 
            } else {
              // hide all elements that don't share ourClass
              $ourHolder.children('div:not(.' + ourClass + ')').hide();
              // show all elements that do share ourClass
              $ourHolder.children('div.' + ourClass).show();
            }
            return false;
          });
    });

}

function getAllDonorsError(request,status,error) {

    console.log(error);
    var donorList = $('#donors');
    donorList.empty();

    var message = '<div class="row" id="manager-message"><div class="col-12 alert alert-danger lead" role="alert">No donors found...</div></div>';
    $(donorList).append(message);

}