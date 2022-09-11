import {createSlice} from '@reduxjs/toolkit';
import {
  handleLogin,
  handleLogout,
  handleRegister,
  initNewSession,
  getCurrentUser,
  handleUpdateUserBalance
} from './auth-operations';

const initialState = {
  userData: {},
  loading: false,
  error: null,
  accessToken: '',
  refreshToken: '',
  sid: '',
  currentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {

    // -------------------register------------------------------

    [handleRegister.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [handleRegister.fulfilled]: (store, {payload}) => {
      store.userData = {...payload.userData};
      store.token = payload.token;
      store.loading = false;
    },
    [handleRegister.rejected]: (store, {payload}) => {
      store.loading = false;
      store.error = payload;
    },

    // -------------------login------------------------------

    [handleLogin.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [handleLogin.fulfilled]: (store, {payload}) => {
      store.userData = {...payload.userData};
      store.accessToken = payload.accessToken;
      store.loading = false;
      store.sid = payload.sid;
      store.refreshToken = payload.refreshToken;
      store.currentUser = true;
    },
    [handleLogin.rejected]: (store, {payload}) => {
      store.loading = false;
      store.error = payload;
    },

    // -------------------logout------------------------------
    [handleLogout.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [handleLogout.fulfilled]: () => ({...initialState}),
    [handleLogout.rejected]: (store, {payload}) => {
      store.loading = false;
      store.error = payload.message;
    },

// -------------------currentUser----------------------------------
    [getCurrentUser.pending]: (store) => {
      store.loading = true;
      store.error = null;
    },
    [getCurrentUser.fulfilled]: (store, {payload}) => {
      store.userData = {...payload};
      store.currentUser = true;
    },
    [getCurrentUser.rejected]: (store, {payload}) => {
      store.loading = false;
      store.error = payload.message;
    },

    // -------------------updateBalance----------------------------------
    [handleUpdateUserBalance.pending]: (store) => {
      store.loading = true;
      store.error = null;
    },
    [handleUpdateUserBalance.fulfilled]: (store, {payload}) => {
      store.userData.balance = payload.newBalance;
    },
    [handleUpdateUserBalance.rejected]: (store, {payload}) => {
      store.loading = false;
      store.error = payload.message;
    },
  },

  // -------------------refresh------------------------------
  [initNewSession.pending]: store => {
    store.loading = true;
    store.error = null;
  },
  [initNewSession.fulfilled]: (store, {payload}) => {
    store.accessToken = payload.newAccessToken;
    store.refreshToken = payload.newRefreshToken;
    store.sid = payload.newSid;
    store.loading = false;
  },
  [initNewSession.rejected]: (store, {payload}) => {
    store.loading = false;
    store.error = payload.message;
  },
});

export default authSlice.reducer;
