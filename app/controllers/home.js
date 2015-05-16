import {createActivity} from "gull/services/activity";
import Ember from "ember";

export default Ember.Controller.extend({
  actions: {
    submitActivity: function() {
      var latLong = Gull.get("map").getCenter();
      createActivity({ "latitude": latLong.lat(), "longitude": latLong.lng() });
    }
  }
});
