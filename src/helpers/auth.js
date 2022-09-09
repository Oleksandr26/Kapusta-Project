import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://kapusta-backend.goit.global',
});

const setToken = (token = '') => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = '';
};

export const register = async data => {
  console.log('data: ', data);

  const result = await instance.post('/auth/register', data);
  setToken(result.data.accessToken);
  return result.data;
};

export const login = async data => {
  const result = await instance.post('/auth/login', data);
  setToken(result.data.accessToken);
  return result.data;
};

export const logout = async data => {
  const result = await instance.post('/auth/logout', data);
  setToken('');
  return result.data;
};

export const getCurrentUser = async token => {
  try {
    setToken(token);
    const result = await instance.get('/auth/current');
    return result.data;
  } catch (error) {
    setToken('');
    throw error;
  }
};

export default instance;
