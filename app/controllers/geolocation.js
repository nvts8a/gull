import {getGeolocation} from "gull/services/geolocation";
import Ember from "ember";

export default Ember.Controller.extend({
  init: function() {
    this.getGeolocation().then(this.setGeolocation().bind(this));
  },
  getGeolocation: () => getGeolocation(),
  setGeolocation: () => function(response) { this.set("geolocation", response); }
});
