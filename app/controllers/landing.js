import UserService from "../services/user";
import Ember from "ember";

export default Ember.Controller.extend({
  actions: {
    loginUser: function() {
      setSessionToken(this.getProperties("email"));
      this.transitionToRoute("home");      
    },
    createAndLoginUser: function() {
      var data = this.getProperties("email", "password", "first_name", "last_name");
      var transitionToHome = () => this.send("transitionTo", "home");

      UserService.createUser(data)
        .then(function(response) { localStorage.setItem("session:access_token", response.access_token) })
        .then(transitionToHome);
    }
  }
});
