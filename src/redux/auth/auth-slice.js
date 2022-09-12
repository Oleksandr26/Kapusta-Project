import { createSlice } from '@reduxjs/toolkit';
import { login, logout, register, newSession, registerGoogle } from './auth-operations';

const initialState = {
  userData: {},
  email: '',
  loading: false,
  error: null,
  accessToken: '',
  refreshToken: '',
  sid: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    // -------------------register------------------------------

    [register.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [register.fulfilled]: (store, { payload }) => {
      store.userData = { ...payload.userData };
      store.token = payload.token;
      store.loading = false;
      console.log(payload);
    },
    [register.rejected]: (store, { payload }) => {
      // console.log(payload);
      store.loading = false;
      store.error = payload;
    },
    // -----------------auth/google----------------------------

    // [registerGoogle.fulfilled]: (store, {payload}) => {
    //   store.loading = false;
    //   console.log(payload);
    // },

    // -------------------login------------------------------

    [login.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [login.fulfilled]: (store, { payload }) => {
      store.userData = { ...payload.userData };
      store.email = payload.userData.email;
      store.accessToken = payload.accessToken;
      store.loading = false;
      store.sid = payload.sid;
      store.refreshToken = payload.refreshToken;
    },
    [login.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    // -------------------refresh------------------------------
    [newSession.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [newSession.fulfilled]: (store, { payload }) => {
      store.accessToken = payload.newAccessToken;
      store.refreshToken = payload.newRefreshToken;
      store.sid = payload.newSid;
      store.loading = false;
    },
    [newSession.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    // -------------------logout------------------------------
    [logout.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [logout.fulfilled]: () => ({ ...initialState }),
    [logout.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default authSlice.reducer;
