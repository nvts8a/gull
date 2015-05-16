import Ember from "ember";

export default Ember.Component.extend({
  classNames: ["google-maps", "height-100"],
  
  insertMap: function() {
    var container = this.$(".map-canvas");
    var options = {
      center: getLatLong(),
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(container[0], options);

    var marker = generateMarker(map, getLatLong());
    var markerContent = generateMarkerContent({ "heading": "Hello Sarah!", "body": "This is infowindow content right here." });
    var markerInfowindow = generateInfowindow( markerContent );

    var markerInfoPairs = [{ "marker": marker, "infowindow": markerInfowindow }];
    bindInfowindows( map, markerInfoPairs );

  }.on("didInsertElement")
});

var getLatLong = function() {
  return new google.maps.LatLng( localStorage.getItem("geoposition:latitude"), localStorage.getItem("geoposition:longitude"));
};

var generateMarker = function(map, markerLatLong, options) {
  options = ( typeof options !== "undefined" ? options : {} );

  return new google.maps.Marker({
    position: markerLatLong,
    map: map,
    title: options.title
  });
};

var generateInfowindow = function(markerContent) {
  return new google.maps.InfoWindow({
    content: markerContent
  });
};

var generateMarkerContent = function(content) {
  return "<div id='contena'>"+
    "<div id='siteNotice'>"+
    "</div>"+
    "<h1 id='firstHeading' class='firstHeading'>"+
      content.heading +
    "</h1>"+
    "<div id='bodyContent'>"+
      content.body +
    "</div>"+
  "</div>";
};

var bindInfowindows = function(map, markerInfoPairs) {
  markerInfoPairs.forEach(function(pair) {
    google.maps.event.addListener(pair.marker, "click", function() {
      pair.infowindow.open(map, pair.marker);
    });
  });
}
