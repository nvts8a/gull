import Ember from 'ember';

export default Ember.Route.extend({
  init: function() {
    var bigVideo = Gull.get("bigVideo");
    if(bigVideo) {
      bigVideo.dispose();
    }
  }
});
