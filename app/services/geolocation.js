import ajax from "ic-ajax";

export function getGeolocation() {
  var url = "larid/geolocation?latitude="+localStorage.getItem("geoposition:latitude")+"&longitude="+localStorage.getItem("geoposition:longitude");
  return ajax({ url: url, type: "GET" });
}
