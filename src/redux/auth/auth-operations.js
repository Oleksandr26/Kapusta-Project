import {createAsyncThunk} from '@reduxjs/toolkit';
import * as api from 'helpers/auth';

export const handleRegister = createAsyncThunk(
  'auth/registration',
  async (data, {rejectWithValue}) => {
    try {
      return await api.registration(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const handleLogin = createAsyncThunk(
  'auth/login',
  async (data, {rejectWithValue}) => {
  try {
    return await api.login(data);
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const handleLogout = createAsyncThunk(
  'auth/logout',
  async (_, {rejectWithValue}) => {
    try {
      return api.logout();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/currentUser',
  async (_, {getState, rejectWithValue}) => {
    try {
      const token = getState().auth.accessToken;

      api.setToken(token)
      return await api.currentUser();

    } catch (error) {
      return rejectWithValue(error);
    }
  }
)

export const handleUpdateUserBalance = createAsyncThunk(
  'user/updateUserBalance',
  async (amount,{rejectWithValue}) => {
    try {
      return await api.userBalance({newBalance: amount})
    } catch (error){
      rejectWithValue(error)
    }
  }
)

export const initNewSession = createAsyncThunk(
  'auth/newSession',
  async (_, {getState, rejectWithValue}) => {
    try {
      const {accessToken, refreshToken, sid} = getState().auth;

      api.setRefreshToken(refreshToken)
      const result = await api.newSession({sid});
      api.setToken(accessToken)

      return result;

    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
