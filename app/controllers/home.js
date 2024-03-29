import {createActivity} from "gull/services/activity";
import {getSession} from "gull/services/session";
import Ember from "ember";

export default Ember.Controller.extend({
  actions: {
    submitActivity: function() {
      var latLong = Gull.get("map").getCenter();
      createActivity(getSession(), { "latitude": latLong.lat(), "longitude": latLong.lng() });
    },
    transitionToGeolocation: function () {
      this.send("transitionTo", "geolocation");
    }
  }
});
