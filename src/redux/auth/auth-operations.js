import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import * as api from 'helpers/auth';

export const handleRegistration = createAsyncThunk(
  'auth/registration',
  async (data, { rejectWithValue }) => {
    try {
      const register = await api.registration(data);
      toast.success('Your registration is successful! Please log in.');
      return register;
    } catch ({ response }) {
      toast.warn('Your account is already registered');
      return rejectWithValue(response.data);
    }
  }
);

export const handleAuthGoogle = createAsyncThunk(
  'auth/google',
  async (_, { rejectWithValue }) => {
    try {
      return await api.authGoogle();
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const handleLogin = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      return await api.login(data);
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const handleLogout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      return api.logout();
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/currentUser',
  async (_, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.accessToken;

      api.setToken(token);
      return await api.currentUser();
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const handleUpdateUserBalance = createAsyncThunk(
  'user/updateUserBalance',
  async (amount, { rejectWithValue }) => {
    try {
      const balance = await api.userBalance({ newBalance: amount });
      toast.success('Your balance was confirm');
      return balance;
    } catch ({ response }) {
      toast.error('Your network is dead. Try it later');
      return rejectWithValue(response.data);
    }
  }
);

export const initNewSession = createAsyncThunk(
  'auth/newSession',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { accessToken, refreshToken, sid } = getState().auth;

      api.setRefreshToken(refreshToken);
      const result = await api.newSession({ sid });
      api.setToken(accessToken);

      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);
