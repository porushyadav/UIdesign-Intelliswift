import {
  LOGIN_START,
  LOGIN_SUCCESS,
  AUTHENTICATE_USER,
  LOG_OUT,
} from "./actionTypes";

export function startLogin() {
  return {
    type: LOGIN_START,
  };
}

export function login(user) {
  console.log(user);
  localStorage.setItem("id", JSON.stringify(user));

  console.log(user);
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}
export function logina() {
  let user = JSON.parse(localStorage.getItem("id"));
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}

export function authenticateUser(user) {
  return {
    type: AUTHENTICATE_USER,
    user,
  };
}

export function logoutUser() {
  console.log("Asdsad");
  localStorage.removeItem("id");
  return {
    type: LOG_OUT,
  };
}
