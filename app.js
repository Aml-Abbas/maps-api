$(document).ready(function() {
    var lat1;
    var long1;
    //show weather
    showWeather();
  
    //get user location
    function showWeather() {
      var ipApi = "http://ip-api.com/json";
  
      //geting location data using ip-api
      $.getJSON(ipApi, function(json) {
        
        lat1 = json.lat;
        long1 = json.lon;
        
        var uluru = {lat: lat1, lng: long1};
        var map = new google.maps.Map(document.getElementById('maps'), {
          zoom: 10,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });    
    
    }); //getJSON ip-api function 
  
    }
  
  }); //document ready