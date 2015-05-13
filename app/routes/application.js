import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    transitionTo: function(route) {
      this.transitionTo(route);
    }
  }
});
