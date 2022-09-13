import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/auth-slice';

import { transactionApi } from './transaction/transactionOperations';
import { setupListeners } from '@reduxjs/toolkit/query';
// import {userApi} from "./user/userOperations";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  transactionApi.middleware,
];
const persistConfig = {
  key: 'tokens',
  storage,
  whitelist: ['accessToken', 'refreshToken', 'sid'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    [transactionApi.reducerPath]: transactionApi.reducer,
  },
  middleware,
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
