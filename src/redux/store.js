import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import authReducer from './auth/auth-slice';
import {transactionApi} from "./transaction/transactionOperations";
import { setupListeners } from '@reduxjs/toolkit/query'

const middleware = [...getDefaultMiddleware(), transactionApi.middleware]

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [transactionApi.reducerPath]: transactionApi.reducer,
  },
  middleware,
});


setupListeners(store.dispatch);
