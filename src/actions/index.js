import { LOAD_USER_RANKING,
         LOAD_DEPARTAMENT_RANKING,
         GET_USER } from "../constants/action-types";

export function getUserRanking() {
    return function(dispatch) {
      return fetch("/api/user/ranking")
        .then(response => response.json())
        .then(data => {
          dispatch({ type: LOAD_USER_RANKING, payload: data });
        })
        .catch((error) => {
          console.log(error);
        })
    };
  }

  export function getDepartamentRanking() {
    return function(dispatch) {
      return fetch("/api/departament/ranking")
        .then(response => response.json())
        .then(data => {
          dispatch({ type: LOAD_DEPARTAMENT_RANKING, payload: data });
        })
        .catch((error) => {
          console.log(error);
        })
    };
  }

  export function getUser() {
    return function(dispatch) {
      return fetch("/api/user")
        .then(response => response.json())
        .then(data => {
          dispatch({ type: GET_USER, payload: data });
        })
        .catch((error) => {
          console.log(error);
        })
    };
  }