import Ember from 'ember';

export default Ember.Route.extend({
  init: function() {
    var bigVideo = new $.BigVideo();
    bigVideo.init();
    bigVideo.show('gull-video.mp4', {ambient: true});
    Gull.set("bigVideo", bigVideo);
  }
});
