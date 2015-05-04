import Ember from "ember";

export default Ember.Component.extend({
  classNames: ["google-maps", "height-100"],
  
  insertMap: function() {
    var container = this.$(".map-canvas");
    var myLatLng = new google.maps.LatLng( localStorage.getItem("geoposition:latitude"), localStorage.getItem("geoposition:longitude"));
    var options = {
      center: myLatLng,
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(container[0], options);
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: "Hello Sarah!"
    });
  }.on("didInsertElement")
});
