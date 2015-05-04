import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    loginUser: function() {
      setSessionToken(this.getProperties("email"));
      this.transitionToRoute("home");      
    },
    createAndLoginUser: function() {
      setSessionToken(this.getProperties("email"));
      this.transitionToRoute("home");      
    }
  }
});

var setSessionToken = function(token) {
  localStorage.setItem('session:token', token);
}
