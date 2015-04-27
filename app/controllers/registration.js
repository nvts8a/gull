import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Controller.extend({
  actions: {
    createUser: function() {
      this.transitionToRoute("home");      
    }
  }
});
