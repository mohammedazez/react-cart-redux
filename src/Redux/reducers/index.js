// import combine reducers
import { combineReducers } from "redux";
// import detail movie reducers
import upcoming from "../reducers/Upcoming.reducers";
// import upcoming movie reducers
import detailMovie from "../reducers/detailMovie.reducers";

const rootReducers = combineReducers({ upcoming, detailMovie });

export default rootReducers;
