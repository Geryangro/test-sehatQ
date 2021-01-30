import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import reducers from "./reducers";

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.,
};

// Connect to Redux Devtool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create Global Store
const persistedReducer = persistReducer(persistConfig, reducers);
export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
export const persistor = persistStore(store, null);
