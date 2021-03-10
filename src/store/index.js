import { combineReducers, createStore } from "redux";
import { reducer as stopWatchReducer } from "./reducer";

const rootReducer = combineReducers({
    stopwatch: stopWatchReducer
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())