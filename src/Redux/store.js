// import redux create store dan middlware
import { createStore, applyMiddleware } from "redux";
// Import redux thunk
import thunk from "redux-thunk";

// Import reducers
import rootReducers from "./reducers";

const store = createStore(rootReducers, applyMiddleware(thunk));
export default store;
