// import combine reducers
import { combineReducers } from "redux";
// import upcoming movie reducers
import { getUpcomingReducers } from "../reducers/Upcoming.reducers";
// import nowplaying movie reducers
import { getNowPlayingReducers } from "../reducers/NowPlaying.reducers";
// import detail movie reducers
import { getDetailReducers } from "../reducers/detailMovie.reducers";

const rootReducers = combineReducers({
  getUpcomingReducers,
  getDetailReducers,
  getNowPlayingReducers,
});

export default rootReducers;
