// Import action
import {
  GET_NOWPLAYING_REQUEST,
  GET_NOWPLAYING_SUCCESS,
  GET_NOWPLAYING_FAILED,
  //   BEFORE_FATCH,
} from "../action/NowPlaying.action";

// Tandai dengan initial state
const initialState = {
  data: [],
  error: null,
  isLoading: false,
};

export const getNowPlayingReducers = (state = initialState, action) => {
  // Gunakana Switch case
  switch (action.type) {
    // case BEFORE_FATCH:
    //   return state;
    case GET_NOWPLAYING_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_NOWPLAYING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.result,
      };
    case GET_NOWPLAYING_FAILED:
      return {
        ...state,
        data: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
};
