// import combine reducers
import { combineReducers } from "redux";
// import detail movie reducers
import { geUpcomingReducers } from "../reducers/Upcoming.reducers";
// import upcoming movie reducers
// import { detailMovie } from "../reducers/detailMovie.reducers";

const rootReducers = combineReducers({ geUpcomingReducers });

export default rootReducers;
