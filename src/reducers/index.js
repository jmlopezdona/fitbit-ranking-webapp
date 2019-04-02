import { LOAD_RANKING, GET_USER } from "../constants/action-types";
import { stat } from "fs";

const initialState = {
    position: '?',
    ranking: [],
    login: {
        authenticated: false,
        user: {
            fullName: 'Desconcid@'
        }
    }
  };

function updatePosition(state, ranking) {
    for (var i = 0, len = ranking.length; i < len; i++) {
        if (ranking[i].userId === state.login.user.encodedId) {
            return i + 1;
        }
    }
}

function rootReducer(state = initialState, action) {
    if (action.type === LOAD_RANKING) {
        let position = updatePosition(state, action.payload);
        return Object.assign({}, state, {
            ranking: action.payload,
            position: position
        });
    }
    if (action.type === GET_USER) {
        return Object.assign({}, state, {
            login: {
                authenticated: action.payload.authenticated,
                user: action.payload.userAuthentication.details.user
            }
        });
    }
    return state;
};

export default rootReducer;