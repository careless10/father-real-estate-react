import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import authReducer from "../auth/reducer";
import watchAuth from "../auth/saga";

import browserReducer from "../browser/reducer";
import watchBrowser from "../browser/reducer";

const persistConfig = {
  key: "root",
  storage
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  browser: browserReducer
});

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchAuth);
// sagaMiddleware.run(watchBrowser);

export let persistor = persistStore(store);

export default store;
