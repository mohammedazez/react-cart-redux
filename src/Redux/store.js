// import redux create store dan middlware
import { createStore, applyMiddleware } from "redux";
// Import redux thunk
import thunk from "redux-thunk";

// Import Upcoming movie reducers
import Upcoming from "./reducers/Upcoming.reducers";

const store = createStore(Upcoming, applyMiddleware(thunk));
export default store;
