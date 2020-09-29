// import action
import { GET_DETAIL_MOVIE } from "../action/detailMovie.action";

// Tandai dengan initial State
const initialState = {
  data: [],
};

export default (state = initialState, action) => {
  //Gunakan Switch Case
  switch (action.type) {
    case GET_DETAIL_MOVIE:
      return {
        ...state,
        data: action.loading,
      };
    default:
      return state;
  }
};
