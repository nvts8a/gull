import {createUser} from "gull/services/user";
import Ember from "ember";

export default Ember.Controller.extend({
  actions: {
    loginUser: function() {
      var data = this.getProperties("email", "password");
      var transitionToHome = () => this.send("transitionTo", "home");

      UserService.loginUser(data)
        .then(function(response) { localStorage.setItem("session:access_token", response.access_token) })
        .then(transitionToHome);
    },
    createAndLoginUser: function() {
      var data = this.getProperties("email", "password", "first_name", "last_name");
      var transitionToHome = () => this.send("transitionTo", "home");

      createUser(data)
        .then(function(response) { localStorage.setItem("session:access_token", response.access_token) })
        .then(transitionToHome);
    }
  }
});
