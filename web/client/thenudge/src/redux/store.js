// Setting up the Redux Store
import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import logger from 'redux-logger';

// Applying thunk and logger debugging middleware
const middleware = [thunk, logger];
const persistConfig = {
    key: 'root',
    storage,
}
// Setting initialState to empty object
const initialState = {}
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Store initialization
export const store = createStore(
    persistedReducer,
    initialState,
    compose(applyMiddleware(...middleware))
);
export const persistor = persistStore(store)
