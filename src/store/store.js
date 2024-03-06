// import {configureStore} from "@reduxjs/toolkit"
// import cartReducer from "./cartSlice"
// import productReducer from "./productSlice"


// export default configureStore({
//     reducer:{
//         cart:cartReducer,
//         product:productReducer

//     }
// })



import { configureStore ,combineReducers} from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


import cartreducer from './cartSlice'
import  productreducer from './productSlice'

const persistConfig = {
  key: 'react-ecom',
  version: 1,
  storage,
}
const rootreducer=combineReducers({cart:cartreducer,product:productreducer})
const persistedReducer = persistReducer(persistConfig, rootreducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)

