import {createUser} from "gull/services/user";
import {setSession} from "gull/services/user";

export default Ember.Controller.extend({
  actions: {
    loginUser: function() {
      var data = this.getProperties("email", "password");
      var transitionToHome = () => this.send("transitionTo", "home");

      UserService.loginUser(data)
        .then(setSession)
        .then(transitionToHome);
    },
    createAndLoginUser: function() {
      var data = this.getProperties("email", "password", "first_name", "last_name");
      var transitionToHome = () => this.send("transitionTo", "home");

      createUser(data)
        .then(setSession)
        .then(transitionToHome);
    }
  }
});
