var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('maps'), {
        center: {lat: -37.813, lng: 144.96 },
        zoom: 10
    });
}