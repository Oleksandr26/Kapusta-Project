import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://kapusta-backend.goit.global',
});

export const setToken = (token = '') => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = '';
};

export const setRefreshToken = (refreshToken = '') => {
  if (refreshToken) {
    return (instance.defaults.headers.authorization = `Bearer ${refreshToken}`);
  }
  instance.defaults.headers.authorization = '';
};

export const registration = async body => {
  const result = await instance.post('/auth/register', body);
  setToken(result.data.accessToken);
  return result.data;
};

export const authGoogle = async () => {
  const result = await instance.get('/auth/google', {
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  });
  setToken(result.data.accessToken);
  return result.data;
};

export const login = async data => {
  const result = await instance.post('/auth/login', data);
  setToken(result.data.accessToken);
  return result.data;
};

export const logout = async () => {
  const result = await instance.post('/auth/logout');
  setToken('');
  return result.data;
};

export const currentUser = async () => {
  const result = await instance.get('/user');
  return result.data;
}

export const userBalance = async (body) => {
  const result = await instance.patch('/user/balance', body);
  return result.data;
}

export const newSession = async sid => {
  const result = await instance.post('/auth/refresh', sid);
  return result.data;
};

export default instance;
