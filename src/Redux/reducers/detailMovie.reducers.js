// Import action
import {
  GET_DETAIL_REQUEST,
  GET_DETAIL_SUCCESS,
  GET_DETAIL_FAILED,
} from "../action/detailMovie.action";

// Tandai dengan initial state
const initialState = {
  DetailMovie: {},
  error: null,
  isLoading: false,
};

export const getDetailReducers = (state = initialState, action) => {
  // Gunakan Switch case
  switch (action.type) {
    case GET_DETAIL_REQUEST:
      return {
        ...state,
        data: action.playload,
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
      };
    default:
      return state;
  }
};
