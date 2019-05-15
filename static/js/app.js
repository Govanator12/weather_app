// all imports at top, import config to access api key



// create an instance of the Config class



// render the navbar into the header
$.get('../../components/header.html', function(res) {
  $('#nav').html(res);
});



// write function to convert degrees



// create a function that logs the city entered in the form
function searchCity() {
  let city = $('#city_search').val();
  console.log(city);

  // TODO: add AJAX call to weather API and display info
}


// check to see if the submit button is pressed, if it is, stop the event from refreshing the page, and call searchCity()
$('#submit-btn').click(function(e) {
  e.preventDefault();
  searchCity();
});


// make search information not appear until they submit a city
