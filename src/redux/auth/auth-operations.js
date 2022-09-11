import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'helpers/auth';
import { toast } from 'react-toastify';
import {setRefreshToken, setToken} from "helpers/auth";

export const register = createAsyncThunk(
  'auth/register',
  async (data, thunkAPI) => {
    try {
      const result = await api.register(data);
      return result;
    } catch (error) {
      toast.error(`Sorry, Register failed. Try again.`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
  try {
    const result = await api.login(data);
    return result;
  } catch (error) {
    toast.error(`Sorry, login failed. Check email and password. Try again.`);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk(
  'auth/logout',
  async ( thunkAPI) => {
    try {
      const result = await api.logout();
      return result.data;
    } catch (error) {
      toast.error(`Sorry, logout failed. Try again.`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const newSession = createAsyncThunk(
  'auth/current-user',
  async (_, thunkAPI) => {
    try {
      const { accessToken, refreshToken, sid } = thunkAPI.getState().auth;
      setRefreshToken(refreshToken)
      const result = await api.getNewSession({sid});
      setToken(accessToken)
      toast.info('Hello, you are already signed in');
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error,
        toast.error(
          'Sorry, request failed. May be you have problems with network or token timed out '
        )
      );
    }
  },
);
