import { LOAD_RANKING, GET_USER } from "../constants/action-types";

export function getRanking() {
    return function(dispatch) {
      return fetch("/api/ranking")
        .then(response => response.json())
        .then(data => {
          dispatch({ type: LOAD_RANKING, payload: data });
        })
        .catch((error) => {
          console.log(error);
        })
    };
  }

  export function getUser() {
    return function(dispatch) {
      return fetch("/user")
        .then(response => response.json())
        .then(data => {
          dispatch({ type: GET_USER, payload: data });
        })
        .catch((error) => {
          console.log(error);
        })
    };
  }