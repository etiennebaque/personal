$( document ).ready(function() {
  var map = L.map('mapid').setView([0.291,34.709], 14);

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.satellite',
    accessToken: 'pk.eyJ1IjoiZXRpZW5uZWJhcXVlIiwiYSI6ImNrMXBkemZwczBpc20zaW9hY2FxaW5lMmkifQ.YlmaLEfCNzn06cA2DO6krw'
  }).addTo(map);

  $.getJSON('../assets/gpx/info.json', function(tracks) {
    for (track of tracks) {
      var gpx = "../assets/gpx/" + track.filename;
      new L.GPX(gpx, {
        async: true,
        polyline_options: {
          color: track.color,
          weight: 5
        },
        marker_options: {
          startIconUrl: '',
          endIconUrl: '',
          shadowUrl: ''
        },
        track: track
      }).on('loaded', function(e) {
        color = e.target.options.polyline_options.color;
        e.target.bindPopup(popupDescription(e.target));
        map.fitBounds(e.target.getBounds());
      }).on('click', function(e) {
        e.target.getPopup();
      }).addTo(map);
    }
  });
});

function popupDescription(target) {
  track = target.options.track;
  distance = (target.get_distance() / 1000).toFixed(2)
  distanceMiles = (distance * 0.6213).toFixed(2)

  distanceText = "Distance: " + distanceMiles + " miles - " + distance + " kms.";
  text = "<h3>" + track.title + "</h3><br/>" + track.description + "<br/><br/>" + distanceText + "<br/>";
  return text;
}

