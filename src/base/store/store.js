import { combineReducers, createStore } from "redux";
import authReducer from "../auth/reducer";

const rootReducer = combineReducers({ authReducer });

const store = createStore(rootReducer);

export default store;
