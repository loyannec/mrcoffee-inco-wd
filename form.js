// JS to maps
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBanpJLv5Gx4EwsaV1tTylNdD2Dn5qmI-Y&callback=initMap';
script.defer = true;
script.async = true;

window.initMap = function() {
  // JS API is loaded and available
  // Map options
  var location = {lat: 48.836689, lng: 2.320890};

  // New map
  var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 19.5,
      center: location
  });

  // Add marker
  var marker = new google.maps.Marker({
      position: location,
      map: map
  });

  var infoWindow = new google.maps.InfoWindow({
      content: '<h2>Mr. Coffee</h2>'
  });

  marker.addListener('click', function() {
      infoWindow.open(map, marker);
  })
};

// Append the 'script' element to 'head'
document.head.appendChild(script);

