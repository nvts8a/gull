import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    loginUser: function() {
      this.transitionToRoute("home");      
    }
  }
});
