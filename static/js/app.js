// all imports at top, import config to access api key
import Config from '../../config.js';


// create an instance of the Config class
let config = new Config();


// render the navbar into the header
$.get('../../components/header.html', function(res) {
  $('#nav').html(res);
});



// write function to convert degrees
function convertDegrees(deg_kelvin){return ((deg_kelvin - 273.15) * 9/5+32)}


// create a function that logs the city entered in the form
function searchCity() {
  let city = $('#city_search').val();
  console.log(city);

  // TODO: add AJAX call to weather API and display info
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${config.getKey()}`;

  $.get(url, function(res) {
    console.log(res);

    $('#city_name').text(`${res.name}, ${res.sys.country}`);
    $('#high').html(`${convertDegrees(res.main.temp_max)} F`);
    $('#low').html(`${convertDegrees(res.main.temp_min)} F`);
    $('#humidity').text(`${res.main.humidity}%`)
    $('#forecast').text(res.weather[0].description)
  });

  $('#weather-info').css('display', 'block');
}


// check to see if the submit button is pressed, if it is, stop the event from refreshing the page, and call searchCity()
$('#submit-btn').click(function(e) {
  e.preventDefault();
  searchCity();
});


// make search information not appear until they submit a city
$('#weather-info').css('display', 'none');
