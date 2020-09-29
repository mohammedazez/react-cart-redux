// Import action
import {
  GET_UPCOMING_REQUEST,
  GET_UPCOMING_SUCCESS,
  GET_UPCOMING_FAILED,
  //   BEFORE_FATCH,
} from "../action/Upcoming.action";

// Tandai dengan initial state
const initialState = {
  data: [],
  error: null,
  isLoading: false,
};

export const geUpcomingReducers = (state = initialState, action) => {
  // Gunakana Switch case
  switch (action.type) {
    // case BEFORE_FATCH:
    //   return state;
    case GET_UPCOMING_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_UPCOMING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.result,
      };
    case GET_UPCOMING_FAILED:
      return {
        ...state,
        data: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
};
