
import {configureStore} from '@reduxjs/toolkit'
import { productSliceReducer } from './productSlice'
import { userReducer } from './userSlice'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { combineReducers } from '@reduxjs/toolkit';

const persistConfig = {
    key: 'root',
    storage,
  };

  const rootReducer = combineReducers({
    products:productSliceReducer,
        user: userReducer
  });

  const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
})

export const persistor = persistStore(store);
