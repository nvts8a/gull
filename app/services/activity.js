import ajax from "ic-ajax";

export function createActivity(data) {
  return ajax({ url: "larid/users/1/activities", type: "POST", data: { activity: data } });
}
