import { applyMiddleware, combineReducers, createStore } from "redux";

import logger from "redux-logger";
import { dataReducer } from "./dataReducer";
const reducers = combineReducers({
	data: dataReducer,
});
export default createStore(reducers, applyMiddleware(logger));
