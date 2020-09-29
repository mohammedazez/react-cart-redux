// Import action
import {
  GET_DETAIL_REQUEST,
  GET_DETAIL_SUCCESS,
  GET_DETAIL_FAILED,
  //   BEFORE_FATCH,
} from "../action/detailMovie.action";

// Tandai dengan initial state
const initialState = {
  data: [],
  error: null,
  isLoading: false,
};

export const getDetailReducers = (state = initialState, action) => {
  // Gunakana Switch case
  switch (action.type) {
    // case BEFORE_FATCH:
    //   return state;
    case GET_DETAIL_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.result,
      };
    case GET_DETAIL_FAILED:
      return {
        ...state,
        data: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
};
