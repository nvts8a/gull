import ajax from "ic-ajax";
import Ember from "ember";

export default Ember.Controller.extend({
  actions: {
    loginUser: function() {
      setSessionToken(this.getProperties("email"));
      this.transitionToRoute("home");      
    },
    createAndLoginUser: function() {
      var self = this;
      var user = { "user": this.getProperties("email", "password", "first_name", "last_name") };
      ajax({ url: "larid/users", type: "POST", data: user })
        .then(function(response) { setAccessToken(response.access_token) })
        .then(self.send("transitionTo", "home"));
    }
  }
});

var setAccessToken = function(token) {
  localStorage.setItem("session:access_token", token);
}
