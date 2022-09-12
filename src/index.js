import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import instance from './helpers/auth';
import { initNewSession } from './redux/auth/auth-operations';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/Kapusta_Team-Project/">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

const { dispatch } = store;
const ERROR_MESSAGE = 'Invalid session';
instance.interceptors.response.use(
  response => {
    console.log(response);
    return response;
  },
  error => {
    console.log(error);
    if (error.response.data.message === ERROR_MESSAGE) {
      dispatch(initNewSession());
    }
    return Promise.reject(error);
  }
);
