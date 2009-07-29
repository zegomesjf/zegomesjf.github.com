var map = null;
var address = null;
var geocoder = null;

$(document).ready(function(){
    $('#map_canvas').hide();
    geocoder = new GClientGeocoder();
    map = new GMap2(document.getElementById("map_canvas"));
    $('#search').keypress(function(e){
        if (e.which == 13){
            address = $('#search').val();
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
          
            $('#map_canvas').show();
        }
    });
});