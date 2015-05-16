export function initialize(container, application) {
  var BV = new $.BigVideo();
  BV.init();
  BV.show('http://vjs.zencdn.net/v/oceans.mp4', {ambient: true});
}

export default {
  name: "bigVideo",
  initialize: initialize
}
