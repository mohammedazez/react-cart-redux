import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Import reducers
import rootReducers from "./reducers";

const store = createStore(rootReducers, applyMiddleware(thunk));
export default store;

// Pertanyaan
// Fungsi redux thunk
