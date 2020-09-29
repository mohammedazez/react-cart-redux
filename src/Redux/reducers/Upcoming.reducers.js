// Import action
import { GET_UPCOMING_MOVIE } from "../action/Upcoming.action";

// TAndai dengan initial state
const initialState = [];

export default (state = initialState, action) => {
  // Gunakana Switch case
  switch (action.type) {
    case GET_UPCOMING_MOVIE:
      return {
        ...state,
        data: action.loading,
      };
    default:
      return state;
  }
};
