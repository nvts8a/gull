import ajax from "ic-ajax";

export function loginUser(data) {
  return ajax({ url: "larid/sessions", type: "POST", data: { user: data } });
}

export function createUser(data) {
  return ajax({ url: "larid/users", type: "POST", data: { user: data } });
}
