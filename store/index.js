// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore,persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import reducer from "./reducers";
import { createStore } from "redux";
import logger from 'redux-logger'

const persistConfig = {
    key:'root',
    storage:AsyncStorage,
};

// const store = createStore(reducer);
// const store = configureStore();
const persistedReducer = persistReducer(persistConfig,reducer);
export default () => {
    let store = createStore(persistedReducer);
    let persistor = persistStore(store);
    return {store, persistor};
  };

  

// const configureStore = () => createStore(
//     {
//     reducer:persistedReducer,
//     middleware:getDefaultMiddleware({
//         serializableCheck:false,
//     }),
//     persistor:persistStore(store),
//     // reducer

// });
// export const persistor = persistStore(store);
// )

//  export default configureStore;