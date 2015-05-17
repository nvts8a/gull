import {getActivities} from "gull/services/activity";
import {getSession} from "gull/services/session";
import Ember from "ember";

export default Ember.Component.extend({
  classNames: ["google-maps", "height-100"],
  insertMap: function() {
    var container = this.$(".map-canvas");
    var myPosition = new google.maps.LatLng( localStorage.getItem("geoposition:latitude"), localStorage.getItem("geoposition:longitude"));
    var options = {
      center: myPosition,
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(container[0], options);
    var markerInfoPairs = generateActivities( map );

    Gull.set("map", map);
  }.on("didInsertElement")
});


var generateActivities = function(map) {
  var setActivityMarkers = function(activities) {
    var markerInfoPairs = [];

    activities.forEach(function(activity) {
      markerInfoPairs.push( generateMarkerInfoPair(map, activity) );
    });

    bindInfowindows( map, markerInfoPairs );
  };

  getActivities(getSession()).then(setActivityMarkers);
};

var generateMarkerInfoPair = function(map, activity) {
    var position = new google.maps.LatLng( activity.latitude, activity.longitude );
    var marker = generateMarker(map, position, {"title": activity.id});
    var markerContent = generateMarkerContent({ "heading": "Heading", "body": "Body" });
    var markerInfowindow = generateInfowindow( markerContent );

    return { "marker": marker, "infowindow": markerInfowindow };
}

var generateMarker = function(map, markerPosition, options) {
  options = ( typeof options !== "undefined" ? options : {} );

  return new google.maps.Marker({
    position: markerPosition,
    map: map,
    title: options.title.toString()
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
