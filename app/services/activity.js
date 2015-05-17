import ajax from "ic-ajax";

export function createActivity(session, data) {
  return ajax({ url: "larid/users/"+session.user_id+"/activities", type: "POST", data: { activity: data } });
}

export function getActivities(session) {
  return ajax({ url: "larid/users/"+session.user_id+"/activities", type: "GET" });
}
