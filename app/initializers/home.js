export function initialize(container, application) {
  application.deferReadiness();
  navigator.geolocation.getCurrentPosition( function(position) {
    localStorage.setItem("geoposition:latitude", position.coords.latitude);
    localStorage.setItem("geoposition:longitude", position.coords.longitude);
    application.advanceReadiness();
  });
}

export default {
  name: "geolocation",
  initialize: initialize
};
