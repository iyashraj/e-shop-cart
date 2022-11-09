import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import appReducer from './appReducer';

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;


const store = createStore(appReducer , composerEnhancer(applyMiddleware()))

const persistor = persistStore(store);

export {store, persistor}