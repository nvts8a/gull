import Ember from "ember";

export default Ember.Component.extend({
  classNames: ["google-maps", "height-100"],
  
  insertMap: function() {
    var container = this.$(".map-canvas");

    var options = {
      center: new google.maps.LatLng(
        localStorage.getItem("geoposition:latitude"),
        localStorage.getItem("geoposition:longitude")),
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    new google.maps.Map(container[0], options);
  }.on("didInsertElement")
});
