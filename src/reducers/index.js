import { LOAD_USER_RANKING,
    LOAD_DEPARTAMENT_RANKING,
    GET_USER } from "../constants/action-types";

const initialState = {
    positionUserRanking: '',
    positionDepartamentRanking: '',
    userRanking: [],
    departamentRanking: [],
    authenticated: false,
    user: {
        fullName: 'Desconocid@'
    }
  };

function updateUserPosition(user, ranking) {
    if (ranking != null && user != null) {
        for (var i = 0, len = ranking.length; i < len; i++) {
            if (ranking[i].userId === user.userId) {
                return i + 1;
            }
        }
    }
}

function updateDepartamentPosition(user, ranking) {
    if (ranking != null && user != null) {
        for (var i = 0, len = ranking.length; i < len; i++) {
            if (ranking[i].name === user.departament) {
                return i + 1;
            }
        }
    }   
}

const firstWord = string => string.split(' ')[0];

function rootReducer(state = initialState, action) {
    let userRanking = action.payload;
    if (action.type === LOAD_USER_RANKING) {
        return Object.assign({}, state, {
            positionUserRanking: updateUserPosition(state.user, userRanking),
            userRanking: userRanking
        });
    }
    if (action.type === LOAD_DEPARTAMENT_RANKING) {
        let departamentRanking = action.payload;
        return Object.assign({}, state, {
            positionDepartamentRanking: updateDepartamentPosition(state.user, departamentRanking),
            departamentRanking: departamentRanking
        });
    }
    if (action.type === GET_USER) {
        let user = action.payload;
        user.displayName = firstWord(user.name);
        return Object.assign({}, state, {
            positionDepartamentRanking: updateDepartamentPosition(user, state.departamentRanking),
            positionUserRanking: updateUserPosition(user, state.userRanking),
            authenticated: (user.userId) ? true : false,
            user: user
        });
    }
    return state;
};

export default rootReducer;