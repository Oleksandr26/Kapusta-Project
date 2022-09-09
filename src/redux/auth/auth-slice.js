import { createSlice } from '@reduxjs/toolkit';
import { login, logout, register /*refresh*/ } from './auth-operations';

const initialState = {
  userData: {},
  token: '',
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
    // -------------------getCurrentUser------------------------------
    // [getCurrentUser.pending]: store => {
    //   store.loading = true;
    //   store.error = null;
    // },
    // [getCurrentUser.fulfilled]: (store, { payload }) => {
    //   store.user = { ...payload };
    //   store.loading = false;
    // },
    // [getCurrentUser.rejected]: (store, { payload }) => {
    //   store.loading = false;
    //   store.error = payload;
    // },

    // -------------------register------------------------------

    [register.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [register.fulfilled]: (store, { payload }) => {
      store.userData = { ...payload.userData };
      store.token = payload.token;
      store.loading = false;
    },
    [register.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    // -------------------login------------------------------

    [login.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [login.fulfilled]: (store, { payload }) => {
      store.userData = { ...payload.userData };
      store.accessToken = payload.accessToken;
      store.loading = false;
    },
    [login.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    // -------------------refresh------------------------------
    // [refresh.pending]: store => {
    //   store.loading = true;
    //   store.error = null;
    // },
    // [refresh.fulfilled]: (store, { payload }) => {
    //   store.userData = { ...payload.userData };
    //   store.token = payload.token;
    //   store.loading = false;
    // },
    // [refresh.rejected]: (store, { payload }) => {
    //   store.loading = false;
    //   store.error = payload;
    // },

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
