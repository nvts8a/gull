import ajax from "ic-ajax";

export function loginUser(data) {
  return ajax({ url: "larid/sessions", type: "POST", data: { user: data } });
};

export function createUser(data) {
  return ajax({ url: "larid/users", type: "POST", data: { user: data } });
};

export function setSession(session) {
 localStorage.setItem("session:access_token", session.access_token);
 localStorage.setItem("session:user_id", session.user_id);
};

export function getSession() {
  return {
    "access_token": localStorage.getItem("session:access_token"),
    "user_id": localStorage.getItem("session:user_id")
  }
};
