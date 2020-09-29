// Import action
import { GET_UPCOMING_MOVIE, BEFORE_FATCH } from "../action/Upcoming.action";

// Tandai dengan initial state
const initialState = {
  data: [],
};

export default (state = initialState, action) => {
  // Gunakana Switch case
  switch (action.type) {
    case BEFORE_FATCH:
      return state;
    case GET_UPCOMING_MOVIE:
      return {
        ...state,
        data: action.loading,
      };
    default:
      return state;
  }
};
