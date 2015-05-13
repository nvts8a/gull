import ajax from "ic-ajax";

export function createUser(data) {
  return ajax({ url: "larid/users", type: "POST", data: { user: data } });
}
