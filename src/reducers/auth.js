import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOG_OUT,
  EDIT_USER_SUCCESSFUL,
} from "../actions/actionTypes";

const initialAuthState = {
  user: {},

  isLoggedin: false,
  inProgress: false,
};
export default function auth(state = initialAuthState, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        inProgress: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        isLoggedin: true,
        inProgress: false,
      };

    case LOG_OUT:
      return {
        ...state,
        user: {},
        isLoggedin: false,
      };
    case EDIT_USER_SUCCESSFUL:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
}
