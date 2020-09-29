// import combine reducers
import { combineReducers } from "redux";
// import detail movie reducers
import { getUpcomingReducers } from "../reducers/Upcoming.reducers";
// import upcoming movie reducers
import { getDetailReducers } from "../reducers/detailMovie.reducers";

const rootReducers = combineReducers({
  getUpcomingReducers,
  getDetailReducers,
});

export default rootReducers;
