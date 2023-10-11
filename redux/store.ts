import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cart.slice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import { AsyncStorage } from 'react-native'

 
const persistConfig = {
  key: 'root',
  storage
  // whitelist: ['']
}
 
const persistedReducer = persistReducer(persistConfig, cartReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

const persistor = persistStore(store)


export  { store, persistor };