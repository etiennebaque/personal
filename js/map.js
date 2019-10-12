$( document ).ready(function() {
  var map = L.map('mapid').setView([0.291,34.709], 15);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    }
  ).addTo(map);

  var gpx = '../assets/gpx/compound_loop.gpx'; // URL to your GPX file or the GPX itself
  new L.GPX(gpx, {
    async: true,
    marker_options: {
      startIconUrl: '',
      endIconUrl: '',
      shadowUrl: ''
    }
  }).on('loaded', function(e) {
    map.fitBounds(e.target.getBounds());
  }).addTo(map);

});
