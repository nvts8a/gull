import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Controller.extend({
  actions: {
    createAndLoginUser: function() {
      this.transitionToRoute("home");      
    }
  }
});
