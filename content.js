var map = null;

function initialize() {
  var geocoder = new GClientGeocoder();
  var address = "New York"
  var map = new GMap2(document.getElementById("map_canvas"));
  geocoder.getLatLng(
    address,
    function(point) {
      if (!point) {
        alert(address + " not found");
      } else {
        map.setCenter(point, 13);
        var marker = new GMarker(point);
        map.addOverlay(marker);
        marker.openInfoWindowHtml(address);
      }
    }
  );

  var bounds = map.getBounds();
  var southWest = bounds.getSouthWest();
  var northEast = bounds.getNorthEast();
  var lngSpan = northEast.lng() - southWest.lng();
  var latSpan = northEast.lat() - southWest.lat();
  var point = new GLatLng(-24.906367,-53.453979);
  map.addOverlay(new GMarker(point));
}

